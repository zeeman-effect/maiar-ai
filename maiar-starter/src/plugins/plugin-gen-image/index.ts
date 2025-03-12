import { PluginBase } from "@maiar-ai/core";

export class PluginGenImage extends PluginBase {
  constructor() {
    super({
      id: "plugin-gen-image",
      name: "Generate Image",
      description: "Generate an image based on the user's prompt",
      capabilities: [
        {
          id: "generate_image",
          description: "Generate an image based on the user's prompt",
          required: true
        }
      ]
    });
  }
}
