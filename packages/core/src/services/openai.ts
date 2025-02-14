import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export class OpenAIService {
  private openai: OpenAI;
  constructor() {
    this.openai = new OpenAI({
      apiKey: OPENAI_API_KEY
    });
  }

  // get completion from chatgpt
  async getChatCompletion(prompt: string): Promise<OpenAI.Chat.ChatCompletion> {
    const response: OpenAI.Chat.ChatCompletion =
      await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      });
    return response;
  }

  // get image from openai
  async getImage(prompt: string, count: number = 1): Promise<string[]> {
    const response = await this.openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      size: "1024x1024",
      quality: "standard",
      n: count
    });

    const imageUrls = response.data
      .map((image) => image.url)
      .filter((url): url is string => url !== undefined);

    if (imageUrls.length === 0) throw new Error("Failed to generate image");

    return imageUrls;
  }
}

export default new OpenAIService();
