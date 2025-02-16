import { logModelInteraction } from "../utils/logger";
import { generateSystemTemplate } from "../system/templates";
/**
 * Configuration for model requests
 */
export interface ModelRequestConfig {
  temperature?: number;
  maxTokens?: number;
  stopSequences?: string[];
}

/**
 * Base interface that all LLM models must implement
 */
export interface ModelInterface {
  /**
   * Get a text completion from the model
   */
  getText(prompt: string, config?: ModelRequestConfig): Promise<string>;

  /**
   * Initialize the model with any necessary setup
   */
  init?(): Promise<void>;

  checkHealth(): Promise<void>;
}

/**
 * Decorator that adds logging to any ModelInterface implementation.
 * Logs all prompts, responses, and errors to the model interactions log file.
 *
 * This follows the decorator pattern to add logging behavior to any model
 * without requiring the model implementations to handle logging themselves.
 */
export class LoggingModelDecorator implements ModelInterface {
  constructor(
    private model: ModelInterface,
    private modelId: string
  ) {}

  async getText(prompt: string, config?: ModelRequestConfig): Promise<string> {
    try {
      // append the system template to the prompt
      const systemTemplate = generateSystemTemplate();
      const promptWithSystem = `${systemTemplate}\n\n${prompt}`;

      // Log the prompt
      logModelInteraction("prompt", {
        model: this.modelId,
        prompt: promptWithSystem,
        config
      });

      // Get response from underlying model
      const response = await this.model.getText(promptWithSystem, config);

      // Log the response
      logModelInteraction("response", {
        model: this.modelId,
        response,
        execution_metadata: {
          timestamp: new Date().toISOString(),
          config
        }
      });

      return response;
    } catch (error) {
      // Log any errors
      logModelInteraction("error", {
        model: this.modelId,
        error: error instanceof Error ? error.message : String(error),
        status: "failed",
        prompt
      });
      throw error;
    }
  }

  async init(): Promise<void> {
    if (this.model.init) {
      return this.model.init();
    }
  }

  checkHealth(): Promise<void> {
    return Promise.resolve(undefined);
  }
}
