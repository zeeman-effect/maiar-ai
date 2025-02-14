import { LLMService } from "../../models/service";
import { OperationConfig } from "../base";
import { generateTextTemplate } from "./templates";
import { createLogger } from "../../utils/logger";

const log = createLogger("operations");

export async function getText(
  service: LLMService,
  prompt: string,
  config?: OperationConfig
): Promise<string> {
  log.debug({
    msg: "Getting text response",
    prompt,
    config
  });

  const result = await service.getText(generateTextTemplate(prompt), config);

  log.debug({
    msg: "Received text response",
    responseLength: result.length,
    firstLine: result.split("\n")[0]
  });

  return result;
}
