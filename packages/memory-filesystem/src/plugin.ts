import path from "path";
import fs from "fs";
import fsPromises from "fs/promises";

import { AgentContext, PluginBase, PluginResult } from "@maiar-ai/core";
import { FileSystemConfig } from "./types";

export class FileSystemMemoryPlugin extends PluginBase {
  private sandboxPath: string;

  constructor(config: FileSystemConfig) {
    super({
      id: "plugin-filesystem-memory",
      name: "File System Memory Plugin",
      description:
        "Memory extension that allows for runtime operations to control a sandbox table"
    });
    this.sandboxPath = path.join(config.basePath, "sandbox.json");

    this.addExecutor({
      name: "memory:add_document",
      description:
        "Add a peice of context from the context chain into the sandboxed database",
      execute: async (context: AgentContext): Promise<PluginResult> => {
        const timestamp = Date.now();
        const documentId = `doc_${timestamp}`;

        // Add most recent peice of context to the sandbox database
        const contextItem =
          context.contextChain[context.contextChain.length - 1];

        // Get the latest conversation ID by finding the most recent conversation file
        let conversationId: string | null = null;

        try {
          // Get the directory containing conversation files
          const baseDir = path.dirname(this.sandboxPath);

          // Read all files in the directory
          const files = fs.readdirSync(baseDir);

          // Filter for JSON files that aren't sandbox.json
          const conversationFiles = files
            .filter((file) => file.endsWith(".json") && file !== "sandbox.json")
            .map((file) => ({
              name: file,
              path: path.join(baseDir, file),
              stats: fs.statSync(path.join(baseDir, file))
            }));

          // Sort by modification time (most recent first)
          conversationFiles.sort((a, b) => b.stats.mtimeMs - a.stats.mtimeMs);

          // Get the most recent conversation ID (filename without extension)
          if (conversationFiles.length > 0) {
            conversationId = path.basename(conversationFiles[0].name, ".json");
          }
        } catch (error) {
          console.error("Error finding latest conversation:", error);
        }

        if (!conversationId) {
          return {
            success: false,
            error: "No conversation found"
          };
        }

        await fsPromises.writeFile(
          this.sandboxPath,
          JSON.stringify(
            {
              id: documentId,
              conversation_id: conversationId,
              content: contextItem?.content,
              timestamp: timestamp
            },
            null,
            2
          )
        );

        return { success: true, data: { documentId } };
      }
    });
  }
}
