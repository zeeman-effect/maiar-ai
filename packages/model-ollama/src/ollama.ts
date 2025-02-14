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
    // No initialization needed for Ollama
  }
}
