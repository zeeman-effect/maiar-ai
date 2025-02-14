import express, { Express, Request, Response } from "express";

import { PluginBase, PluginResult, UserInputContext } from "@maiar-ai/core";
import { ExpressPluginConfig, ExpressResponseSchema } from "./types";
import { generateResponseTemplate } from "./templates";

interface ExpressPlatformContext {
  platform: string;
  responseHandler?: (response: unknown) => void;
  metadata?: {
    req: Request;
    res: Response;
  };
}

export class PluginExpress extends PluginBase {
  private app: Express | null = null;

  constructor(
    private config: ExpressPluginConfig = { port: 3000, host: "localhost" }
  ) {
    super({
      id: "plugin-express",
      name: "Express",
      description: "Handles HTTP requests for the Maiar agent"
    });

    this.addExecutor({
      name: "send_response",
      description: "Send a response to a pending HTTP request",
      execute: async (): Promise<PluginResult> => {
        const context = this.runtime.context;
        if (!context?.platformContext?.responseHandler) {
          console.error(
            "[Express Plugin] Error: No response handler available"
          );
          return {
            success: false,
            error: "No response handler available"
          };
        }

        try {
          // Format the response based on the context chain
          const formattedResponse = await this.runtime.operations.getObject(
            ExpressResponseSchema,
            generateResponseTemplate(context.contextChain),
            { temperature: 0.2 }
          );

          await context.platformContext.responseHandler(
            formattedResponse.message
          );
          return {
            success: true,
            data: {
              message: formattedResponse.message,
              helpfulInstruction:
                "This is the formatted response sent to the HTTP client"
            }
          };
        } catch (error) {
          console.error("[Express Plugin] Error sending response:", error);
          return {
            success: false,
            error: "Failed to send response"
          };
        }
      }
    });

    this.addTrigger({
      id: "http_request_listener",
      start: () => {
        console.log("[Express Plugin] Starting HTTP request listener");

        if (this.app) {
          console.warn("[Express Plugin] Express server already running");
          return;
        }

        this.app = express();
        this.app.use(express.json());
        console.log("[Express Plugin] Express middleware configured");

        // Basic health check endpoint
        this.app.get("/health", (req, res) => {
          console.log("[Express Plugin] Health check requested");
          res.json({ status: "ok" });
        });

        // Generic message endpoint that creates a context
        this.app.post("/message", async (req: Request, res: Response) => {
          const { message, user } = req.body;
          console.log(
            `[Express Plugin] Received message from user ${user || "anonymous"}:`,
            message
          );

          // Create new context chain with initial user input
          const initialContext: UserInputContext = {
            id: `${this.id}-${Date.now()}`,
            pluginId: this.id,
            type: "user_input",
            action: "receive_message",
            content: message,
            timestamp: Date.now(),
            rawMessage: message,
            user: user || "anonymous"
          };

          // Create event with initial context and response handler
          const platformContext: ExpressPlatformContext = {
            platform: this.id,
            responseHandler: (result: unknown) => res.json(result),
            metadata: {
              req,
              res
            }
          };

          await this.runtime.createEvent(initialContext, platformContext);
        });

        // Start the server
        this.app.listen(
          this.config.port,
          this.config.host || "localhost",
          () => {
            console.log(
              `[Express Plugin] Server is running on ${this.config.host || "localhost"}:${this.config.port}`
            );
          }
        );
      }
    });
  }
}
