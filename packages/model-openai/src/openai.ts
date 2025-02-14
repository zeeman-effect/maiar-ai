import OpenAI from "openai";
import { ModelProvider, ModelRequestConfig } from "@maiar-ai/core";
import { createLogger } from "@maiar-ai/core";

const log = createLogger("model:openai");

export interface OpenAIConfig {
  apiKey: string;
  model: string;
}

export class OpenAIProvider implements ModelProvider {
  readonly id = "openai";
  readonly name = "OpenAI";
  readonly description = "OpenAI API models like GPT-4 and GPT-3.5";

  private client: OpenAI;
  private model: string;

  constructor(config: OpenAIConfig) {
    this.client = new OpenAI({
      apiKey: config.apiKey
    });
    this.model = config.model;
  }

  async getText(prompt: string, config?: ModelRequestConfig): Promise<string> {
    try {
      const completion = await this.client.chat.completions.create({
        model: this.model,
        messages: [{ role: "user", content: prompt }],
        temperature: config?.temperature ?? 0.7,
        max_tokens: config?.maxTokens,
        stop: config?.stopSequences
      });

      const content = completion.choices[0]?.message?.content;
      if (!content) {
        throw new Error("No content in response");
      }

      return content;
    } catch (error) {
      log.error("Error getting text from OpenAI:", error);
      throw error;
    }
  }

  async init(): Promise<void> {
    // No initialization needed for OpenAI
  }
}
