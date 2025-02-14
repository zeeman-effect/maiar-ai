import { ModelProvider, ModelRequestConfig } from "@maiar-ai/core";
import { createLogger } from "@maiar-ai/core";

const log = createLogger("models");

export interface DeepseekConfig {
  baseUrl: string;
  model: string;
}

const deepseekSystemTemplate = `
High level rules you must follow:
1. Always use english unless explicitly told otherwise in your output operations.
2. Your interal thoughs, considerations, and operations will always be in english.
3. You will not inject chinese characters, mandarin, or chinese into your thoughts, output operations, generated text, or anything else.
`;

export class DeepseekProvider implements ModelProvider {
  readonly id = "deepseek";
  readonly name = "Deepseek";
  readonly description = "Deepseek models running through Ollama";

  private baseUrl: string;
  private model: string;

  constructor(config: DeepseekConfig) {
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
      log.info("Sending prompt to Deepseek:", prompt);

      const response = await fetch(`${this.baseUrl}/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: this.model,
          prompt: `${deepseekSystemTemplate}\n\n${prompt}\n\nAssistant: Let me help you with that.`,
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
      const text = data.response;

      log.info("Received response from Deepseek:", text);

      // Remove the "Assistant: Let me help you with that." prefix if it exists
      const cleanedText = text.replace(
        /^Assistant: Let me help you with that\.\s*/,
        ""
      );

      return cleanedText;
    } catch (error) {
      log.error("Error getting text from Deepseek:", error);
      throw error;
    }
  }

  async init(): Promise<void> {
    // No initialization needed for Deepseek
  }
}
