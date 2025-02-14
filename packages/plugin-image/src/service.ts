import axios from "axios";
import { GenerateImageParams, GenerateImageResponse } from "./types";

const API_URL = "https://api.getimg.ai/v1/flux-schnell/text-to-image";
const SIZE = 1024;
const STEPS = 6;

export class ImageService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async generateImage(
    params: GenerateImageParams
  ): Promise<GenerateImageResponse> {
    try {
      const response = await axios.post<GenerateImageResponse>(
        API_URL,
        params,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error generating image:", error);
      throw error;
    }
  }

  async getImage(prompt: string): Promise<string[]> {
    const fullPrompt = `${prompt}, professional product photography, 8k ultra hd, commercial grade, studio lighting, soft shadows, clean background, sharp focus, highly detailed, product centered, commercial advertisement quality, professional color grading, pristine detail, commercial product placement, artstation quality`;

    const params: GenerateImageParams = {
      prompt: fullPrompt,
      negative_prompt:
        "deformed, blurry, bad anatomy, disfigured, poorly drawn, extra limbs, strange colors, blur, grainy, signature, watermark, text, logo, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, ugly, bad proportions, gross proportions, cloned face, distorted, out of frame, cut off, low contrast, underexposed, overexposed, bad art, beginner art, amateur",
      width: SIZE,
      height: SIZE,
      output_format: "jpeg",
      response_format: "url",
      steps: STEPS
    };

    const result = await this.generateImage(params);

    if (!result.url) {
      throw new Error("Failed to generate image");
    }

    return [result.url];
  }
}
