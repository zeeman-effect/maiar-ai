import { z } from "zod";
import { LLMService } from "../../models/service";
import { OperationConfig } from "../base";
import { getObject } from "../getObject";
import { generateBooleanTemplate } from "./templates";
import { createLogger } from "../../utils/logger";

const log = createLogger("operations");

// Schema for boolean response
const booleanResponseSchema = z
  .object({
    result: z.boolean()
  })
  .describe("A boolean response object");

export async function getBoolean(
  service: LLMService,
  prompt: string,
  config?: OperationConfig
): Promise<boolean> {
  log.debug({
    msg: "Getting boolean response",
    prompt,
    config
  });

  const result = await getObject(
    service,
    booleanResponseSchema,
    generateBooleanTemplate(prompt),
    {
      ...config,
      temperature: config?.temperature ?? 0.1 // Even lower temperature for boolean decisions
    }
  );

  log.debug({
    msg: "Received boolean response",
    result: result.result
  });

  return result.result;
}
