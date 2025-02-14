import { z } from "zod";

/**
 * Configuration options for the Terminal plugin.
 */
export interface TerminalPluginConfig {
  /**
   * Prompt prefix for the terminal input
   * @default '> '
   */
  prompt?: string;

  /**
   * Default user identifier
   * @default 'local'
   */
  defaultUser?: string;
}

export const TerminalResponseSchema = z.object({
  message: z.string().describe("The response data to send back to the client")
});
