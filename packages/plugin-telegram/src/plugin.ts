import { Telegraf } from "telegraf";

import {
  PluginBase,
  AgentContext,
  PluginResult,
  Runtime,
  UserInputContext
} from "@maiar-ai/core";
import { createLogger } from "@maiar-ai/core";

import {
  TelegramPluginConfig,
  TelegramMessage,
  TelegramResponseSchema
} from "./types";
import { generateResponseTemplate } from "./templates";

const log = createLogger("plugin:telegram");

interface TelegramPlatformContext {
  platform: string;
  responseHandler?: (response: unknown) => void;
  metadata?: {
    chatId: number;
  };
}

export class PluginTelegram extends PluginBase {
  private bot: Telegraf;

  constructor(private config: TelegramPluginConfig) {
    super({
      id: "plugin-telegram",
      name: "Telegram",
      description: "Handles Telegram bot interactions using long polling"
    });

    if (!config.token) {
      throw new Error("Telegram token is required");
    }

    this.bot = new Telegraf(config.token);

    this.addExecutor({
      name: "send_response",
      description: "Send a response to a Telegram chat",
      execute: this.handleSendMessage.bind(this)
    });
  }

  private async handleSendMessage(
    context: AgentContext
  ): Promise<PluginResult> {
    if (!context.platformContext?.responseHandler) {
      return {
        success: false,
        error: "No response handler found in platform context"
      };
    }

    try {
      // Format the response based on the context chain
      const formattedResponse = await this.runtime.operations.getObject(
        TelegramResponseSchema,
        generateResponseTemplate(context.contextChain),
        { temperature: 0.2 }
      );

      await context.platformContext.responseHandler(formattedResponse.message);
      return {
        success: true,
        data: {
          message: formattedResponse.message
        }
      };
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return {
        success: false,
        error: `Failed to send message: ${errorMessage}`
      };
    }
  }

  async init(runtime: Runtime): Promise<void> {
    await super.init(runtime);

    // Handle incoming messages
    this.bot.on("message", async (ctx) => {
      try {
        if (!("text" in ctx.message)) return;

        const message: TelegramMessage = {
          chatId: ctx.message.chat.id,
          text: ctx.message.text,
          username: ctx.message.from?.username
        };

        const userContext: UserInputContext = {
          id: `${this.id}-${Date.now()}`,
          pluginId: this.id,
          type: "user_input",
          action: "receiveMessage",
          content: message.text,
          timestamp: Date.now(),
          rawMessage: message.text,
          user: message.username || "unknown",
          messageHistory: [
            {
              role: "user",
              content: message.text,
              timestamp: Date.now()
            }
          ],
          helpfulInstruction: `Message from Telegram user ${message.username || "unknown"}`
        };

        const platformContext: TelegramPlatformContext = {
          platform: this.id,
          responseHandler: async (response: unknown) => {
            await ctx.reply(String(response));
          },
          metadata: {
            chatId: message.chatId
          }
        };

        try {
          await this.runtime?.createEvent(userContext, platformContext);
          log.debug("Successfully queued Telegram message for processing");
        } catch (error) {
          log.error("Failed to queue Telegram message", {
            error: error instanceof Error ? error.message : String(error),
            user: message.username,
            chatId: message.chatId
          });
        }
      } catch (error) {
        log.error("Error processing Telegram message", {
          error: error instanceof Error ? error.message : String(error),
          ctx: {
            chatId: ctx.message.chat.id,
            username: ctx.message.from?.username
          }
        });
      }
    });

    // Log all bot errors
    this.bot.catch((error) => {
      log.error("Bot error", {
        error: error instanceof Error ? error.message : String(error)
      });
    });

    // Start the bot with polling in the background
    const pollingOptions = {
      timeout: this.config.pollingTimeout || 30,
      dropPendingUpdates: this.config.dropPendingUpdates
    };

    // Launch bot without awaiting to prevent blocking
    this.bot.launch(pollingOptions).catch((error) => {
      log.error("Failed to start bot", {
        error: error instanceof Error ? error.message : String(error)
      });
    });

    log.info("Bot started with polling", { options: pollingOptions });
  }

  async cleanup(): Promise<void> {
    await this.bot.stop();
  }
}
