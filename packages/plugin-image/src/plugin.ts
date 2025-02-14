import { PluginBase, AgentContext, PluginResult } from "@maiar-ai/core";
import { ImageService } from "./service";
import { PluginImageConfig, PromptResponseSchema } from "./types";
import { generatePromptTemplate } from "./templates";

export class PluginImageGeneration extends PluginBase {
  private service: ImageService;

  constructor(config: PluginImageConfig = {}) {
    if (!config.apiKey) {
      throw new Error("GETIMG_API_KEY is required for image generation plugin");
    }

    super({
      id: "plugin-image-generation",
      name: "image",
      description: "Generate images from text descriptions using GetImg.ai API"
    });

    this.service = new ImageService(config.apiKey);

    this.addExecutor({
      name: "generate_image",
      description: "Generate an image based on a text prompt",
      execute: async (context: AgentContext): Promise<PluginResult> => {
        try {
          const promptResponse = await this.runtime.operations.getObject(
            PromptResponseSchema,
            generatePromptTemplate(context.contextChain),
            { temperature: 0.7 }
          );

          const prompt = promptResponse.prompt;

          const urls = await this.service.getImage(prompt);

          return {
            success: true,
            data: {
              urls,
              helpfulInstruction:
                "IMPORTANT: You MUST use the exact URLs provided in the urls array above. DO NOT use placeholders like [generated-image-url]. Instead, copy and paste the complete URL from the urls array into your response. The user can access these URLs directly. Other plugins can also access these URLs."
            }
          };
        } catch (error) {
          return {
            success: false,
            error:
              error instanceof Error ? error.message : "Unknown error occurred"
          };
        }
      }
    });
  }
}
