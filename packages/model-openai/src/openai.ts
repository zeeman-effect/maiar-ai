import { z } from "zod";

import OpenAI from "openai";
import { ModelProviderBase, ModelRequestConfig } from "@maiar-ai/core";
import { createLogger } from "@maiar-ai/core";

const log = createLogger("model:openai");

export interface OpenAIConfig {
  apiKey: string;
  models: string[];
}

interface OpenAIModelRequestConfig extends ModelRequestConfig {
  n?: number;
  size?: "1024x1024" | "1792x1024" | "1024x1792";
}

// Define capability schemas
export const textGenerationSchema = {
  input: z.union([z.string(), z.array(z.string())]),
  output: z.string()
};

export const imageGenerationSchema = {
  input: z.string(),
  output: z.array(z.string())
};

const textGenerationModels = ["gpt-4o", "gpt-4o-mini", "gpt-3.5-turbo"];
const imageGenerationModels = ["dall-e-2", "dall-e-3"];

export class OpenAIProvider extends ModelProviderBase {
  readonly id = "openai";
  readonly name = "OpenAI";
  readonly description = "OpenAI API models like GPT-4 and GPT-3.5";
  private client: OpenAI;
  private models: string[];

  constructor(config: OpenAIConfig) {
    super("openai", "OpenAI", "OpenAI API models like GPT-4 and GPT-3.5");
    this.client = new OpenAI({ apiKey: config.apiKey });
    this.models = config.models;

    if (this.models.some((model) => textGenerationModels.includes(model))) {
      this.addCapability({
        id: "text-generation",
        name: "Text generation capability",
        description: "Generate text completions from prompts",
        input: textGenerationSchema.input,
        output: textGenerationSchema.output,
        execute: this.generateText.bind(this)
      });
    }

    if (this.models.some((model) => imageGenerationModels.includes(model))) {
      this.addCapability({
        id: "image-generation",
        name: "Image generation capability",
        description: "Generate images from prompts",
        input: imageGenerationSchema.input,
        output: imageGenerationSchema.output,
        execute: this.generateImage.bind(this)
      });
    }
  }

  async generateImage(
    prompt: string,
    config?: OpenAIModelRequestConfig
  ): Promise<z.infer<typeof imageGenerationSchema.output>> {
    const response = await this.client.images.generate({
      prompt: prompt,
      n: config?.n ?? 1,
      size: config?.size ?? "1024x1024"
    });

    if (response.data.length !== (config?.n ?? 1)) {
      throw new Error("Unexpected number of images generated");
    }

    const urls = response.data.map((image) => image.url).filter(Boolean);
    const filteredUrls = urls.filter((url) => url !== undefined);

    if (filteredUrls.length === 0) {
      throw new Error("No valid image URLs generated");
    }

    return filteredUrls;
  }

  async generateText(
    prompt: string,
    config?: ModelRequestConfig
  ): Promise<z.infer<typeof textGenerationSchema.output>> {
    try {
      const completion = await this.client.chat.completions.create({
        model: this.models.find((model) =>
          textGenerationModels.includes(model)
        ) as string,
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
    // Nothing to init
  }

  async checkHealth(): Promise<void> {
    // Verifying if we can call the API
    try {
      const resp = await this.executeCapability<string, string>(
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
