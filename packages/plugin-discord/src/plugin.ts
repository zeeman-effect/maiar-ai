import {
  AgentContext,
  createLogger,
  PluginBase,
  PluginResult,
  Runtime,
  UserInputContext
} from "@maiar-ai/core";
import {
  Client,
  Events,
  GatewayIntentBits,
  Message,
  BaseGuildTextChannel
} from "discord.js";
import {
  DiscordPluginConfig,
  DiscordReplySchema,
  DiscordSendSchema,
  DiscordChannelSelectionSchema,
  ChannelInfo,
  MessageIntentSchema,
  DiscordPlatformContext
} from "./types";
import {
  generateResponseTemplate,
  generateChannelSelectionTemplate,
  generateMessageIntentTemplate
} from "./templates";

const log = createLogger("plugin:discord");

export class PluginDiscord extends PluginBase {
  private client: Client;
  private isProcessing: boolean = false; // Our processing lock
  private typingIntervals: Map<string, NodeJS.Timeout> = new Map();

  constructor(private config: DiscordPluginConfig) {
    super({
      id: "plugin-discord",
      name: "Discord",
      description: "Handles Discord bot interactions and message processing"
    });

    if (!config.token || !config.clientId) {
      throw new Error("Discord token and clientId are required");
    }

    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
      ]
    });

    // Add send message executor for proactive messages
    this.addExecutor({
      name: "send_message",
      description:
        "Send a message to a Discord channel based on channel description",
      execute: async (context: AgentContext): Promise<PluginResult> => {
        try {
          const response = await this.runtime.operations.getObject(
            DiscordSendSchema,
            generateResponseTemplate(context.contextChain)
          );

          // Get all available text channels
          const guild = this.config.guildId
            ? await this.client.guilds.fetch(this.config.guildId)
            : this.client.guilds.cache.first();

          if (!guild) {
            return {
              success: false,
              error: "No guild available to send message to"
            };
          }

          const textChannels = (await guild.channels.fetch()).filter(
            (channel) => channel instanceof BaseGuildTextChannel
          ) as Map<string, BaseGuildTextChannel>;

          if (textChannels.size === 0) {
            return {
              success: false,
              error: "No text channels available to send message to"
            };
          }

          // Convert channels to array for AI selection
          const channelInfo = Array.from(textChannels.values()).map(
            (channel) => ({
              id: channel.id,
              name: channel.name,
              type: "text",
              description:
                channel.topic ||
                `${channel.parent?.name || ""} / ${channel.name}`
            })
          ) as ChannelInfo[];

          log.info("Channel info", { channelInfo });

          // Let the AI pick the most appropriate channel
          const channelSelection = await this.runtime.operations.getObject(
            DiscordChannelSelectionSchema,
            generateChannelSelectionTemplate(response.channelName, channelInfo)
          );

          const selectedChannel = textChannels.get(channelSelection.channelId);
          if (!selectedChannel) {
            return {
              success: false,
              error: "Selected channel not found"
            };
          }

          await selectedChannel.send(response.message);

          const user = (context.platformContext as DiscordPlatformContext)
            .metadata?.userId;

          if (user) {
            await this.runtime.memory.storeAssistantInteraction(
              user,
              this.id,
              response.message,
              context.contextChain
            );
          }

          return {
            success: true,
            data: {
              message: response.message,
              channelId: selectedChannel.id,
              channelName: selectedChannel.name
            }
          };
        } catch (error) {
          log.error("Error sending Discord message", { err: error });
          return {
            success: false,
            error: error instanceof Error ? error.message : String(error)
          };
        }
      }
    });

    // Add reply executor for responding to messages
    this.addExecutor({
      name: "reply_message",
      description: "Reply to a Discord message in its channel",
      execute: async (context: AgentContext): Promise<PluginResult> => {
        if (
          !context.platformContext?.metadata?.channelId ||
          !context.platformContext?.metadata?.messageId
        ) {
          return {
            success: false,
            error: "Missing channelId or messageId in platform context"
          };
        }

        const messageId = context.platformContext.metadata.messageId as string;
        const channelId = context.platformContext.metadata.channelId as string;

        try {
          const response = await this.runtime.operations.getObject(
            DiscordReplySchema,
            generateResponseTemplate(context.contextChain)
          );

          const channel = await this.client.channels.fetch(channelId);
          if (
            !channel?.isTextBased() ||
            !(channel instanceof BaseGuildTextChannel)
          ) {
            return {
              success: false,
              error: "Channel not found or is not a text channel"
            };
          }

          const originalMessage = await channel.messages.fetch(messageId);
          await originalMessage.reply(response.message);

          // Stop typing indicator after reply is sent
          this.stopTypingIndicator(channelId);

          // Release processing lock after reply is sent
          this.isProcessing = false;
          log.info("Message processing complete - agent unlocked", {
            messageId,
            channelId
          });

          const user = (context.platformContext as DiscordPlatformContext)
            .metadata?.userId;

          if (user) {
            await this.runtime.memory.storeAssistantInteraction(
              user,
              this.id,
              response.message,
              context.contextChain
            );
          }

          return { success: true, data: { message: response.message } };
        } catch (error) {
          // Make sure we unlock and stop typing if there's an error
          this.isProcessing = false;
          this.stopTypingIndicator(channelId);

          log.error("Error sending Discord reply", { err: error });
          return {
            success: false,
            error: error instanceof Error ? error.message : String(error)
          };
        }
      }
    });
  }

  async init(runtime: Runtime): Promise<void> {
    await super.init(runtime);

    try {
      await this.client.login(this.config.token);
      log.info("Discord client connected successfully");

      // Use once instead of on to ensure we only add the listener once
      if (!this.client.listenerCount(Events.MessageCreate)) {
        this.client.on(Events.MessageCreate, this.handleMessage.bind(this));
      }
    } catch (error) {
      log.error("Failed to initialize Discord client", { err: error });
      throw error;
    }
  }

  private startTypingIndicator(channel: BaseGuildTextChannel) {
    // Clear any existing interval for this channel
    this.stopTypingIndicator(channel.id);

    // Start a new typing indicator that repeats every 7 seconds
    // (Discord's typing indicator lasts 10 seconds, so we refresh before it expires)
    const interval = setInterval(() => {
      channel.sendTyping().catch((error) => {
        log.error("Error sending typing indicator", {
          error,
          channelId: channel.id
        });
      });
    }, 7000);

    // Store the interval
    this.typingIntervals.set(channel.id, interval);

    // Send initial typing indicator
    channel.sendTyping().catch((error) => {
      log.error("Error sending initial typing indicator", {
        error,
        channelId: channel.id
      });
    });
  }

  private stopTypingIndicator(channelId: string) {
    const interval = this.typingIntervals.get(channelId);
    if (interval) {
      clearInterval(interval);
      this.typingIntervals.delete(channelId);
    }
  }

  private async handleMessage(message: Message): Promise<void> {
    // Skip bot messages
    if (message.author.bot) return;

    // Skip messages from other guilds if guildId is specified
    if (this.config.guildId && message.guildId !== this.config.guildId) return;

    // Skip messages not in text channels
    if (
      !message.channel.isTextBased() ||
      !(message.channel instanceof BaseGuildTextChannel)
    )
      return;

    try {
      // If we're already processing a message, skip intent check
      if (this.isProcessing) {
        // Store message in DB since it won't be processed by the event system
        await this.runtime.memory.storeUserInteraction(
          message.author.id,
          this.id,
          message.content,
          Date.now(),
          message.id
        );

        log.debug("Skipping message processing - agent busy", {
          content: message.content,
          author: message.author.username
        });
        return;
      }

      const isMentioned = message.content.includes(
        `<@${this.config.clientId}>`
      );

      log.info("Processing message", {
        content: message.content,
        author: message.author.username,
        channelId: message.channelId,
        isMention: isMentioned,
        isReply: !!message.reference?.messageId
      });

      // Get recent conversation history
      const recentHistory =
        await this.runtime.memory.getRecentConversationHistory(
          message.author.id,
          this.id,
          10 // Limit to last 10 messages
        );

      log.info("Retrieved conversation history", {
        historyCount: recentHistory.length,
        history: recentHistory.map((msg) => ({
          role: msg.role,
          content: msg.content,
          timestamp: new Date(msg.timestamp).toISOString()
        }))
      });

      const intentTemplate = generateMessageIntentTemplate(
        message.content,
        isMentioned,
        !!message.reference?.messageId,
        this.config.clientId,
        this.config.commandPrefix,
        recentHistory
      );

      log.debug("Generated intent template", { template: intentTemplate });

      const intent = await this.runtime.operations.getObject(
        MessageIntentSchema,
        intentTemplate
      );

      log.info("Intent analysis result", {
        isIntendedForAgent: intent.isIntendedForAgent,
        reason: intent.reason,
        message: message.content
      });

      if (intent.isIntendedForAgent) {
        // Set processing lock
        this.isProcessing = true;
        log.info("Message processing started - agent locked", {
          content: message.content,
          author: message.author.username
        });

        log.info("Message intended for agent", {
          reason: intent.reason,
          content: message.content,
          author: message.author.username
        });

        // Start typing indicator
        if (message.channel instanceof BaseGuildTextChannel) {
          this.startTypingIndicator(message.channel);
        }

        const userContext: UserInputContext = {
          id: `${this.id}-${message.id}`,
          pluginId: this.id,
          type: "user_input",
          action: "receiveMessage",
          content: message.content,
          timestamp: Date.now(),
          rawMessage: message.content,
          user: message.author.username,
          messageHistory: [
            {
              role: "user",
              content: message.content,
              timestamp: Date.now()
            }
          ],
          helpfulInstruction: `Message from Discord user ${message.author.username} (${intent.reason})`
        };

        const platformContext: DiscordPlatformContext = {
          platform: this.id,
          responseHandler: async () => {
            // Empty response handler - logic moved to reply executor
          },
          metadata: {
            channelId: message.channelId,
            messageId: message.id,
            userId: message.author.id
          }
        };

        await this.runtime.createEvent(userContext, platformContext);
      } else {
        // Only store the message if we're not going to process it
        // (if we process it, the event system will handle storage)
        await this.runtime.memory.storeUserInteraction(
          message.author.id,
          this.id,
          message.content,
          Date.now(),
          message.id
        );

        log.debug("Message not intended for agent", {
          reason: intent.reason,
          content: message.content,
          author: message.author.username
        });
        // Add detailed info logging for skipped messages
        log.info("Skipping message - not intended for agent", {
          content: message.content,
          author: message.author.username,
          reason: intent.reason,
          isMention: isMentioned,
          isReply: !!message.reference?.messageId,
          hasPrefix: message.content.startsWith(
            this.config.commandPrefix || "!"
          )
        });
      }
    } catch (error) {
      // Make sure we unlock if there's an error
      this.isProcessing = false;
      log.error("Error processing message intent", {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        message: message.content,
        author: message.author.username
      });
    }
  }

  async cleanup(): Promise<void> {
    // Clear all typing intervals
    for (const [channelId, interval] of this.typingIntervals) {
      clearInterval(interval);
      this.typingIntervals.delete(channelId);
    }

    this.isProcessing = false;
    await this.client.destroy();
  }
}
