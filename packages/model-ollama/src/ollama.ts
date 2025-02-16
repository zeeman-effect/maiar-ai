import { ModelProvider, ModelRequestConfig } from "@maiar-ai/core";
import { createLogger } from "@maiar-ai/core";

const log = createLogger("model:ollama");

export interface OllamaConfig {
  baseUrl: string;
  model: string;
}

export class OllamaProvider implements ModelProvider {
  readonly id = "ollama";
  readonly name = "Ollama";
  readonly description = "Local Ollama models like Llama 2 and Mistral";

  private baseUrl: string;
  private model: string;

  constructor(config: OllamaConfig) {
    if (!config.baseUrl) {
      throw new Error("baseUrl is required");
    }
    if (!config.model) {
      throw new Error("model is required");
    }

    this.baseUrl = config.baseUrl.replace(/\/$/, "");
    this.model = config.model;
  }

  async getText(prompt: string, config?: ModelRequestConfig): Promise<string> {
    try {
      const response = await fetch(`${this.baseUrl}/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: this.model,
          prompt,
          stream: false,
          options: {
            temperature: config?.temperature ?? 0.7,
            stop: config?.stopSequences
          }
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      log.error("Error getting text from Ollama:", error);
      throw error;
    }
  }

  async init(): Promise<void> {
    await this.checkHealth();
  }

  /**
   * Make sure that the provided baseUrl returns the /api/models endpoint successfully
   * and there is at least 1 model deployed on the server.
   */
  async checkHealth(): Promise<void> {
    try {
      // Send a GET request to the health endpoint
      const modelsUrl = `${this.baseUrl}/api/tags`;
      const response = await fetch(modelsUrl, {
        method: "GET"
      });

      // Ensure the server responded successfully
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Verify that the JSON object has a 'models' array and it contains at least one element
      if (!data || !Array.isArray(data.models) || data.models.length === 0) {
        throw new Error(
          "Health check failed: 'models' array is missing or empty"
        );
      }

      // Verify that the provided this.model exists in one of the models.
      const modelExists = data.models.some(
        (m: { name: string; model: string }) => m.model === this.model
      );

      if (!modelExists) {
        const availableModels = data.models
          .map((m: { model: string }) => m.model)
          .join(", ");
        throw new Error(
          `Model "${this.model}" not deployed in Ollama server. Available models: ${availableModels}`
        );
      }

      log.info({ msg: `Ollama model '${this.model}' health check passed` });
    } catch (error) {
      log.error(
        `Ollama model '${this.model}' health check failed: model not deployed`,
        error
      );
      throw error;
    }
  }
}
