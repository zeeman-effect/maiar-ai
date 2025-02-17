import { ModelProvider, ModelRequestConfig } from "@maiar-ai/core";
import { createLogger } from "@maiar-ai/core";
import { verifyBasicHealth } from "./index";

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
    // Nothing to implemnt
  }

  /**
   * Make sure that the provided baseUrl returns the /api/models endpoint successfully
   * and there is at least 1 model deployed on the server.
   */
  async checkHealth(): Promise<void> {
    try {
      // Send a GET request to the tag endpoint and verify if the model exists
      await verifyBasicHealth(this.baseUrl, this.model);
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
