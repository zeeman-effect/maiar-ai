import { ModelProvider } from "./base";
import { createLogger } from "../utils/logger";
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
  private capabilityFactories = new Map<
    string,
    CapabilityFactory<unknown, unknown>
  >();
  private capabilityAliases = new Map<string, string>();

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
      if (model.hasCapability(capabilityId)) {
        this.registry.registerCapability(modelId, capabilityId);
      }
    }

    log.debug({ msg: "Registered capability factory", capabilityId });
  }

  /**
   * Register a model
   */
  registerModel(model: ModelProvider): void {
    this.models.set(model.id, model);

    // Register all capabilities provided by the model
    const capabilities = model.getCapabilities();
    for (const capability of capabilities) {
      this.registry.registerCapability(model.id, capability.id);

      // Check if this capability already has a default model
      // If not, set this model as the default for this capability
      if (!this.registry.getDefaultModelForCapability(capability.id)) {
        this.registry.setDefaultModelForCapability(capability.id, model.id);
        log.debug({
          msg: "Set default model for capability",
          capability: capability.id,
          model: model.id
        });
      }
    }

    log.debug({ msg: "Registered model instance", modelId: model.id });
  }

  /**
   * Register a capability alias
   */
  registerCapabilityAlias(alias: string, canonicalId: string): void {
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
    const resolvedCapabilityId =
      this.capabilityAliases.get(capabilityId) || capabilityId;

    // Determine which model to use
    const effectiveModelId =
      modelId ||
      this.registry.getDefaultModelForCapability(resolvedCapabilityId);

    if (!effectiveModelId) {
      throw new Error(
        `No model specified and no default model set for capability ${resolvedCapabilityId}`
      );
    }

    const model = this.models.get(effectiveModelId);
    if (!model) {
      throw new Error(`Unknown model: ${effectiveModelId}`);
    }

    // Try to get the capability from the model
    const capability = model.getCapability<I, O>(resolvedCapabilityId);
    if (capability) {
      return capability.execute(input, config);
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
    const resolvedId = this.capabilityAliases.get(capabilityId) || capabilityId;
    return this.registry.getModelsWithCapability(resolvedId);
  }

  /**
   * Set the default model for a capability
   */
  setDefaultModelForCapability(capabilityId: string, modelId: string): void {
    const resolvedId = this.capabilityAliases.get(capabilityId) || capabilityId;
    this.registry.setDefaultModelForCapability(resolvedId, modelId);
  }

  /**
   * Check if any model supports a capability
   */
  hasCapability(capabilityId: string): boolean {
    const resolvedId = this.capabilityAliases.get(capabilityId) || capabilityId;
    return this.registry.hasCapability(resolvedId);
  }
}
