import * as z from "zod";
import { LLMService } from "../../models/service";
import { OperationConfig, formatZodSchema } from "../base";
import { generateObjectTemplate, generateRetryTemplate } from "./templates";
import { createLogger } from "../../utils/logger";

const log = createLogger("operations");

// Helper to extract valid JSON from a string that might contain code blocks or extra text
function extractJson(str: string): string {
  // Remove markdown code blocks
  str = str.replace(/```(?:\w*\s*)\n?/g, "").replace(/```/g, "");

  // Find the last occurrence of a JSON structure (after any thinking tags)
  const matches = str.match(/\{[\s\S]*\}|\[[\s\S]*\]/g);
  if (!matches) {
    throw new Error("No JSON-like structure found in response");
  }

  // Return the last match (after any thinking/reasoning)
  return matches[matches.length - 1] ?? "";
}

// Helper to clean JSON string before parsing
function cleanJsonString(str: string): string {
  // Just trim whitespace - the model should be giving us valid JSON
  return str.trim();
}

export interface GetObjectConfig extends OperationConfig {
  maxRetries?: number;
}

export async function getObject<T extends z.ZodType>(
  service: LLMService,
  schema: T,
  prompt: string,
  config?: GetObjectConfig
): Promise<z.infer<T>> {
  const maxRetries = config?.maxRetries ?? 3;
  let lastError: Error | null = null;
  let lastResponse: string | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      // Generate the prompt using our template
      const fullPrompt =
        attempt === 0
          ? generateObjectTemplate({
              schema: formatZodSchema(schema),
              prompt
            })
          : generateRetryTemplate({
              schema: formatZodSchema(schema),
              prompt,
              lastResponse: lastResponse!,
              error: lastError!.message
            });

      const response = await service.getText(fullPrompt, config);
      lastResponse = response;

      // Extract JSON from the response, handling code blocks and extra text
      const jsonString = cleanJsonString(extractJson(response));

      try {
        const parsed = JSON.parse(jsonString);
        const result = schema.parse(parsed);
        if (attempt > 0) {
          log.info({
            msg: "Successfully parsed JSON after retries",
            attempts: attempt + 1
          });
        }
        return result;
      } catch (parseError) {
        lastError = parseError as Error;
        log.warn({
          msg: `Attempt ${attempt + 1}/${maxRetries} failed`,
          error: parseError,
          response: jsonString
        });
        if (attempt === maxRetries - 1) throw parseError;
      }
    } catch (error) {
      lastError = error as Error;
      log.error({
        msg: `Attempt ${attempt + 1}/${maxRetries} failed`,
        prompt,
        schema: schema.description,
        config,
        error,
        lastResponse
      });
      if (attempt === maxRetries - 1) throw error;
    }
  }

  // This should never happen due to the throw in the loop
  throw new Error("Failed to get valid response after retries");
}
