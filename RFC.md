## Problem Statement

Currently there is an assumption in the Maiar library that all models are LLMs which leads to limitations to agent behavior.

For reference gpt-4o can accept images as input but this capability is not exposed by the runtime so to analyze images you need to manually implement a text based solution in your plugin. To give a concrete example, I created a `plugin-pdf` package that first converts a PDF into text then adds this text to the context chain for further analysis. This could be simplified by having a model that can handle image data.

## Proposed Solution

With the plugin architecture we collect all the executor methods in a registry that the runtime can use when constructing pipelines. I believe we should use this pattern for models as well.

Model capabilities can be defined in the model provider and the runtime will implement a capabilities registry that contains these methods. Plugins can then directly call these capabilities or with future modifications to the runtime, pipelines can be constructed that dynamically select the proper model capability.

## Technical Details

### Core changes

- Capabilities of each model implement an `execute` method

```typescript
export interface ModelCapability<InputType = unknown, OutputType = unknown> {
  readonly id: string;
  readonly name: string;
  readonly description: string;

  /**
   * Execute the capability with the given input
   */
  execute(input: InputType, config?: OperationConfig): Promise<OutputType>;
}
```

- Capabilities are collected in a capability registry on initialization

```typescript
/**
 * Registry for model capabilities
 */
export class CapabilityRegistry {
  private capabilities = new Map<string, Set<string>>();
  private defaultModels = new Map<string, string>();

  /**
   * Register a capability for a model
   */
  registerCapability(modelId: string, capabilityId: string): void {
    if (!this.capabilities.has(capabilityId)) {
      this.capabilities.set(capabilityId, new Set([modelId]));
    }
  }

  /**
   * Set the default model for a capability
   */
  setDefaultModelForCapability(capabilityId: string, modelId: string): void {
    if (
      !this.capabilities.has(capabilityId) ||
      !this.capabilities.get(capabilityId)!.has(modelId)
    ) {
      throw new Error(
        `Model ${modelId} does not support capability ${capabilityId}`
      );
    }
    this.defaultModels.set(capabilityId, modelId);
  }

  /**
   * Get the default model for a capability
   */
  getDefaultModelForCapability(capabilityId: string): string | undefined {
    return this.defaultModels.get(capabilityId);
  }

  /**
   * Get all models that support a capability
   */
  getModelsWithCapability(capabilityId: string): string[] {
    return Array.from(this.capabilities.get(capabilityId) || new Set());
  }

  /**
   * Get all registered capabilities
   */
  getAllCapabilities(): string[] {
    return Array.from(this.capabilities.keys());
  }

  /**
   * Check if any model supports a capability
   */
  hasCapability(capabilityId: string): boolean {
    return (
      this.capabilities.has(capabilityId) &&
      this.capabilities.get(capabilityId)!.size > 0
    );
  }
}
```

- `ModelProvider` implements methods for retrieving capabilities and verifying if a capability is registered for a given model

```typescript
import { ModelCapability } from "./capabilities";
import { OperationConfig } from "../operations/base";

/**
 * Configuration for model requests
 */
export interface ModelRequestConfig {
  temperature?: number;
  maxTokens?: number;
  stopSequences?: string[];
}

/**
 * Base interface for model providers
 */
export interface ModelProvider {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly capabilities: Map<string, ModelCapability>;

  /**
   * Add a capability to the model
   */
  addCapability(capability: ModelCapability): void;

  /**
   * Get all capabilities supported by this model
   */
  getCapabilities(): ModelCapability[];

  /**
   * Check if the model supports a specific capability
   */
  hasCapability(capabilityId: string): boolean;

  /**
   * Get a specific capability implementation
   */
  getCapability<I, O>(capabilityId: string): ModelCapability<I, O> | undefined;

  /**
   * Initialize the model with any necessary setup
   */
  init?(): Promise<void>;

  /**
   * Check model health
   */
  checkHealth(): Promise<void>;
}

export class ModelPrioviderBase implements ModelProvider {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly capabilities: Map<string, ModelCapability>;

  constructor(id: string, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.capabilities = new Map();
  }

  public addCapability(capability: ModelCapability): void {
    this.capabilities.set(capability.id, capability);
  }

  public getCapability(capabilityId: string): ModelCapability | undefined {
    return this.capabilities.get(capabilityId);
  }

  public getCapabilities(): ModelCapability[] {
    return Array.from(this.capabilities.values());
  }

  public hasCapability(capabilityId: string): boolean {
    return this.capabilities.has(capabilityId);
  }
}
```

- `ModelService` accepts multiple models and generate the capabilities registry

```typescript
import { createLogger } from "../utils/logger";
import { ModelProvider } from "./base";
import { CapabilityRegistry, ModelCapability } from "./capabilities";
import { OperationConfig } from "../operations/base";

const log = createLogger("models");

/**
 * Type-safe capability factory interface
 */
export type CapabilityFactory<I, O> = (
  model: ModelProvider
) => ModelCapability<I, O>;

/**
 * Service for managing model operations
 */
export class ModelService {
  private models = new Map<string, ModelProvider>();
  private registry = new CapabilityRegistry();
  private capabilityFactories = new Map<string, CapabilityFactory<any, any>>();

  constructor() {}

  /**
   * Register a capability factory
   */
  registerCapabilityFactory<I, O>(
    capabilityId: string,
    factory: CapabilityFactory<I, O>
  ): void {
    this.capabilityFactories.set(capabilityId, factory);

    // Apply this factory to all existing models
    for (const [modelId, model] of this.models.entries()) {
      if (model.hasCapability?.(capabilityId)) {
        this.registry.registerCapability(modelId, capabilityId);
      }
    }

    log.debug({ msg: "Registered capability factory", capabilityId });
  }

  /**
   * Register a model
   */
  registerModel(model: ModelProvider, modelId: string): void {
    this.models.set(modelId, model);

    // Register all capabilities provided by the model
    if (model.getCapabilities) {
      const capabilities = model.getCapabilities();
      for (const capability of capabilities) {
        this.registry.registerCapability(modelId, capability.id);
      }
    }

    log.debug({ msg: "Registered model instance", modelId });
  }

  /**
   * Execute a capability with the given input
   */
  async executeCapability<I, O>(
    capabilityId: string,
    input: I,
    modelId?: string
  ): Promise<O> {
    // Determine which model to use
    const modelId =
      modelId || this.registry.getDefaultModelForCapability(capabilityId);

    if (!modelId) {
      throw new Error("No model specified and no default model set");
    }

    const model = this.models.get(modelId);
    if (!model) {
      throw new Error(`Unknown model: ${modelId}`);
    }

    // Try to get the capability from the model
    if (model.getCapability) {
      const capability = model.getCapability<I, O>(capabilityId);
      if (capability) {
        return capability.execute(input, config);
      }
    }

    // Try to create the capability using a registered factory
    const factory = this.capabilityFactories.get(capabilityId);
    if (!factory) {
      throw new Error(
        `Capability ${capabilityId} not found on model ${model.id} and no factory registered`
      );
    }

    const createdCapability = factory(model) as ModelCapability<I, O>;
    return createdCapability.execute(input, config);
  }

  /**
   * Get all available capabilities
   */
  getAvailableCapabilities(): string[] {
    return this.registry.getAllCapabilities();
  }

  /**
   * Get all models that support a capability
   */
  getModelsWithCapability(capabilityId: string): string[] {
    return this.registry.getModelsWithCapability(capabilityId);
  }

  /**
   * Set the default model for a capability
   */
  setDefaultModelForCapability(capabilityId: string, modelId: string): void {
    this.registry.setDefaultModelForCapability(capabilityId, modelId);
  }
}
```

- Remove all other assumptions from runtime, logging and any other functionality that is directly tied to LLM specific operations like `getText`

## Addressing Comments on RFC

1. Capability declaration for Plugins

Updates to the plugin interface to support capability registration in Plugins

```typescript
export interface PluginCapabilityRequirement {
  id: string;
  description: string;
  required: boolean:
}

export interface Plugin {
  id: string;
  name: string;
  description: string;
  executors: Executor[];
  triggers: Trigger[];
  requiredCapabilities: PluginCapabilityRequirement[];

  init?: (runtime: any) => Promise<void>;
  execute: (action: string, context: AgentContext) => Promise<PluginResult>;
}
```

Updates to the plugin base class to support capability registration in Plugins

```typescript
export abstract class PluginBase implements Plugin {
  private executorImplementations: ExecutorImplementation[] = [];
  private triggerImplementations: Trigger[] = [];
  private requiredCapabilities: PluginCapabilityRequirement[] = [];
  public runtime!: Runtime;
  public readonly id: string;
  public readonly name: string;
  public readonly description: string;

  constructor(config: { id: string; name: string; description: string }) {
    this.id = config.id;
    this.name = config.name;
    this.description = config.description;
  }

  async init(runtime: Runtime): Promise<void> {
    this.runtime = runtime;
  }

  public addRequiredCapability(capability: PluginCapabilityRequirement) {
    this.requiredCapabilities.push(capability);
  }

  get requiredCapabilities(): PluginCapabilityRequirement[] {
    return this.requiredCapabilities;
  }

  get executors(): Executor[] {
    return this.executorImplementations.map(({ name, description }) => ({
      name,
      description
    }));
  }

  get triggers(): Trigger[] {
    return this.triggerImplementations;
  }

  public addExecutor(executor: ExecutorImplementation) {
    this.executorImplementations.push(executor);
  }

  public addTrigger(trigger: Trigger) {
    this.triggerImplementations.push(trigger);
  }

  async execute(action: string, context: AgentContext): Promise<PluginResult> {
    const executor = this.executorImplementations.find(
      (e) => e.name === action
    );
    if (!executor) {
      return {
        success: false,
        error: `Unsupported executor: ${action}`
      };
    }
    return executor.execute(context);
  }
}
```

2. Plugin validation via runtime

```ts
export function createRuntime(options: RuntimeOptions): Runtime {
  // Initialize model service
  const modelService = new ModelService();

  // Register all models with model service
  for (const model of options.models) {
    modelService.registerModel(model, model.id);

    // Initialize model if needed
    if (model.init) {
      model
        .init()
        .then(() => {
          log.debug(`Model ${model.id} initialized successfully!`);
        })
        .catch((err) => {
          log.error(`Model ${model.id} failed to initialize`, err);
          throw new Error(err.message);
        });
    }

    // Check model health
    model
      .checkHealth()
      .then(() => {
        log.debug(`Model ${model.id} healthcheck passed!`);
      })
      .catch((err) => {
        log.error(`Model ${model.id} healthcheck failed`, err);
        throw new Error(err.message);
      });
  }

  // Initialize memory service with the provided provider
  const memoryService = new MemoryService(options.memory);

  return new Runtime({
    plugins: options.plugins,
    llmService,
    memoryService
  });
}

export class Runtime {
  private registry: PluginRegistry;
  private plugins: Plugin[] = [];
  private eventQueue: AgentContext[] = [];
  private isRunning: boolean = false;
  private modelService: ModelService;
  private memoryService: MemoryService;
  private currentContext: AgentContext | undefined;
  private contextObservers: Set<(context: AgentContext) => void> = new Set();

  /**
   * Operations that can be used by plugins
   */
  public readonly operations = {
    getObject: <T extends z.ZodType<unknown>>(
      schema: T,
      prompt: string,
      config?: OperationConfig
    ) => getObject(this.llmService, schema, prompt, config),
    getText: (prompt: string, config?: GetObjectConfig) =>
      getText(this.llmService, prompt, config),
    getBoolean: (prompt: string, config?: GetObjectConfig) =>
      getBoolean(this.llmService, prompt, config)
  };

  /**
   * Access to the memory service for plugins
   */
  public get memory(): MemoryService {
    return this.memoryService;
  }

  /**
   * Access to the current context
   */
  public get context(): AgentContext | undefined {
    return this.currentContext;
  }

  constructor(config: RuntimeConfig) {
    this.registry = new PluginRegistry();
    this.modelService = config.modelService;
    this.plugins = config.plugins || [];
    this.memoryService = config.memoryService;
  }

  private async validatePluginCapabilities(plugin: Plugin): Promise<void> {
    for (const capability of plugin.requiredCapabilities) {
      if (
        capability.required &&
        !this.modelService.hasCapability(capability.id)
      ) {
        throw new Error(
          `Plugin ${plugin.id} requires capability ${capability.id} but it is not available`
        );
      } else if (
        !capability.required &&
        !this.modelService.hasCapability(capability.id)
      ) {
        log.warn(
          `Plugin ${plugin.id} specified an optional capability ${capability.id} that is not available`
        );
      }
    }
  }

  /**
   * Register a plugin with the runtime
   */
  public async registerPlugin(plugin: Plugin): Promise<void> {
    this.registry.register(plugin);

    if (plugin.init) {
      await plugin.init(this);
    }

    for (const trigger of plugin.triggers) {
      const initContext: UserInputContext = {
        id: `${plugin.id}-trigger-${Date.now()}`,
        pluginId: plugin.id,
        action: "trigger_init",
        type: "user_input",
        content: "", // Empty content for system trigger
        timestamp: Date.now(),
        rawMessage: "",
        user: "system"
      };

      trigger.start({
        eventQueue: this.queueInterface,
        contextChain: [initContext]
      });
    }
  }

  /**
   * Start the runtime
   */
  public async start(): Promise<void> {
    if (this.isRunning) {
      return;
    }

    // Initialize plugins
    for (const plugin of this.plugins) {
      await this.registerPlugin(plugin);
    }

    // validate getText and getObject capabilites exist for core runtime operations
    if (!this.modelService.hasCapability("getText")) {
      throw new Error(
        "getText capability is required for core runtime operations"
      );
    }
    if (!this.modelService.hasCapability("getObject")) {
      throw new Error(
        "getObject capability is required for core runtime operations"
      );
    }

    // Validate required capabilities for each plugin
    for (const plugin of this.plugins) {
      await this.validatePluginCapabilities(plugin);
    }

    // Print registered plugins after they're all registered
    log.info({
      msg: "Initialized runtime with plugins",
      plugins: this.registry.getAllPlugins().map((p) => p.id)
    });

    this.isRunning = true;
    this.runEvaluationLoop().catch((error) => {
      console.error("Error in evaluation loop:", error);
      this.isRunning = false;
    });
  }

  // Existing runtime methods
}
```

3. Model capabilities

Changed the model provider to support capability aliases

```ts
export class ModelService {
  private models = new Map<string, ModelProvider>();
  private registry = new CapabilityRegistry();
  private capabilityFactories = new Map<string, CapabilityFactory<any, any>>();
  private capabilityAliases = new Map<string, string>();

  constructor() {}

  // register a capability alias
  public registerCapabilityAlias(alias: string, canonicalId: string) {
    if (!this.registry.hasCapability(canonicalId)) {
      throw new Error(`Capability ${canonicalId} not found`);
    }
    this.capabilityAliases.set(alias, canonicalId);
    log.debug({ msg: "Registered capability alias", alias, canonicalId });
  }

  /**
   * Execute a capability with the given input
   */
  async executeCapability<I, O>(
    capabilityId: string,
    input: I,
    config?: OperationConfig,
    modelId?: string
  ): Promise<O> {
    // Resolve alias if it exists
    const resolvedCapabilityId = this.capabilityAliases.get(capabilityId);

    // Determine which model to use
    const modelId =
      modelId ||
      this.registry.getDefaultModelForCapability(resolvedCapabilityId);

    if (!modelId) {
      throw new Error("No model specified and no default model set");
    }

    const model = this.models.get(modelId);
    if (!model) {
      throw new Error(`Unknown model: ${modelId}`);
    }

    // Try to get the capability from the model
    if (model.getCapability) {
      const capability = model.getCapability<I, O>(resolvedCapabilityId);
      if (capability) {
        return capability.execute(input, config);
      }
    }

    // Try to create the capability using a registered factory
    const factory = this.capabilityFactories.get(resolvedCapabilityId);
    if (!factory) {
      throw new Error(
        `Capability ${resolvedCapabilityId} not found on model ${model.id} and no factory registered`
      );
    }

    const createdCapability = factory(model) as ModelCapability<I, O>;
    return createdCapability.execute(input, config);
  }

  hasCapability(capabilityId: string): boolean {
    const resolvedId = this.capabilityAliases.get(capabilityId) || capabilityId;
    return this.registry.hasCapability(resolvedId);
  }

  // previous implementation suggestion
}
```

Add a capability aliases to the runtime options

```ts
export interface RuntimeOptions {
  models: ModelProvider[]; // Changed from single model to array
  memory: MemoryProvider;
  plugins: Plugin[];
  capabilityAliases?: Record<string, string>; // Optional mapping from alias to canonical ID
}
```

**Question: Should we update runtime operations to use capabilities or have all model operations called through executeCapability?**

Here is an example of how to update the `getText` operation to use capabilities

```ts
import { LLMService } from "../../models/service";
import { OperationConfig } from "../base";
import { generateTextTemplate } from "./templates";
import { createLogger } from "../../utils/logger";

const log = createLogger("operations");

export async function getText(
  service: ModelService,
  prompt: string,
  config?: OperationConfig
): Promise<string> {
  log.debug({
    msg: "Getting text response",
    prompt,
    config
  });

  const result = await service.executeCapability(
    "getText",
    generateTextTemplate(prompt),
    config
  );

  log.debug({
    msg: "Received text response",
    responseLength: result.length,
    firstLine: result.split("\n")[0]
  });

  return result;
}
```
