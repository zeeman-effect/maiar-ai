import { z } from "zod";

export const TextGenerationSchema = z.object({
  text: z.string().describe("The generated text content")
});

export type TextGeneration = z.infer<typeof TextGenerationSchema>;
