import { AgentContext } from "../types/agent";
import { Runtime } from "../runtime";

/**
 * Result of a plugin execution
 */
export interface PluginResult {
  success: boolean;
  error?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

/**
 * Metadata about a plugin executor
 */
export interface Executor {
  name: string;
  description: string;
}

/**
 * Implementation of a plugin executor
 */
export interface ExecutorImplementation extends Executor {
  execute: (context: AgentContext) => Promise<PluginResult>;
}

/**
 * Plugin trigger that listens for events
 */
export interface Trigger {
  id: string;
  start: (context: AgentContext) => void;
}

/**
 * Plugin capability that can be used in plugin executors
 */
export interface Capability {
  id: string;
  description: string;
  required: boolean;
}

/**
 * Plugin interface that all plugins must implement
 */
export interface Plugin {
  id: string;
  name: string;
  description: string;
  executors: Executor[];
  triggers: Trigger[];
  capabilities: Capability[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  init?: (runtime: any) => Promise<void>;
  execute: (action: string, context: AgentContext) => Promise<PluginResult>;
}

/**
 * Base class that implements common plugin functionality
 */
export abstract class PluginBase implements Plugin {
  private executorImplementations: ExecutorImplementation[] = [];
  private triggerImplementations: Trigger[] = [];
  private capabilityList: Capability[] = [];
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

  get executors(): Executor[] {
    return this.executorImplementations.map(({ name, description }) => ({
      name,
      description
    }));
  }

  get triggers(): Trigger[] {
    return this.triggerImplementations;
  }

  get capabilities(): Capability[] {
    return this.capabilityList;
  }

  public addExecutor(executor: ExecutorImplementation) {
    this.executorImplementations.push(executor);
  }

  public addTrigger(trigger: Trigger) {
    this.triggerImplementations.push(trigger);
  }

  public addCapability(capability: Capability) {
    this.capabilityList.push(capability);
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

export * from "./types";
