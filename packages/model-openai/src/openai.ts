import OpenAI from "openai";
import { ModelProviderBase, ModelRequestConfig } from "@maiar-ai/core";
import { createLogger } from "@maiar-ai/core";

const log = createLogger("model:openai");

export interface OpenAIConfig {
  apiKey: string;
  model: string;
}

export class OpenAIProvider extends ModelProviderBase {
  private client: OpenAI;
  private model: string;

  constructor(config: OpenAIConfig) {
    super("openai", "OpenAI", "OpenAI API models like GPT-4 and GPT-3.5");
    this.client = new OpenAI({ apiKey: config.apiKey });
    this.model = config.model;

    this.addCapability({
      id: "text-generation",
      name: "Generate text with LLM",
      description: "Generate text completions from prompts",
      execute: this.generateText.bind(this)
    });
  }

  async generateText(
    prompt: string,
    config?: ModelRequestConfig
  ): Promise<string> {
    try {
      // When sending requests to OpenAI, ensure content is properly formatted
      const completion = await this.client.chat.completions.create({
        model: this.model,
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant that responds with valid JSON."
          },
          {
            role: "user",
            content: prompt // Make sure this is a string, not an object
          }
        ],
        response_format: { type: "json_object" },
        temperature: config?.temperature ?? 0.7
      });
      log.debug(`OpenAI completion: ${JSON.stringify(completion)}`);

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
    // Nothing to init
  }

  async checkHealth(): Promise<void> {
    // Verifying if we can call the API
    try {
      const resp = await this.executeCapability(
        "text-generation",
        "are you alive? Please respond 'yes' or 'no' only.",
        {
          temperature: 0.7,
          maxTokens: 5
        }
      );
      log.debug(`checkHealth result: ${resp}`);
      log.info({ msg: `Model ${this.id} health check passed` });
    } catch (error) {
      log.error({ msg: `Model ${this.id} health check failed`, error });
      throw new Error(
        `Failed to initialize Model ${this.id}: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
}
