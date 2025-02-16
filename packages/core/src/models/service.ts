import {
  ModelInterface,
  ModelRequestConfig,
  LoggingModelDecorator
} from "./base";
import { createLogger } from "../utils/logger";

const log = createLogger("models");

/**
 * Interface for model providers
 * Each provider should implement this interface and be instantiated with its config
 */
export interface ModelProvider extends ModelInterface {
  readonly id: string;
  readonly name: string;
  readonly description: string;
}

/**
 * Service for managing LLM operations
 */
export class LLMService {
  private models: Map<string, ModelProvider> = new Map();
  private defaultModelId: string | null = null;

  constructor(model?: ModelProvider) {
    log.debug({ msg: `Initializing LLM service: ${model?.id}` });
    if (model) {
      this.registerModel(model, "default");
    }
    log.info({ msg: `Initialized LLM service: ${model?.id}` });
  }

  /**
   * Register a model
   */
  registerModel(model: ModelProvider, modelId: string): void {
    // Create a decorated provider that adds logging while preserving the provider interface
    const decoratedProvider: ModelProvider = {
      ...model, // Copy all provider properties
      getText: async (prompt: string, config?: ModelRequestConfig) => {
        // Create logging decorator just for getText calls
        const decorator = new LoggingModelDecorator(model, modelId);
        return decorator.getText(prompt, config);
      }
    };

    this.models.set(modelId, decoratedProvider);

    // Set as default if it's the first model
    if (this.defaultModelId === null) {
      this.defaultModelId = modelId;
    }

    log.debug({ msg: "Registered model instance", modelId });
  }

  /**
   * Get text completion from the default or specified model
   */
  async getText(
    prompt: string,
    config?: ModelRequestConfig & { modelId?: string }
  ): Promise<string> {
    const modelId = config?.modelId || this.defaultModelId;
    if (!modelId) {
      throw new Error("No model available");
    }

    const model = this.models.get(modelId);
    if (!model) {
      throw new Error(`Unknown model: ${modelId}`);
    }

    return model.getText(prompt, config);
  }

  /**
   * Set the default model
   */
  setDefaultModel(modelId: string): void {
    if (!this.models.has(modelId)) {
      throw new Error(`Unknown model: ${modelId}`);
    }
    this.defaultModelId = modelId;
    log.debug({ msg: "Set default model", modelId });
  }

  /**
   * Get the current default model ID
   */
  getDefaultModelId(): string | null {
    return this.defaultModelId;
  }

  /**
   * Get all registered model IDs
   */
  getModelIds(): string[] {
    return Array.from(this.models.keys());
  }
}
