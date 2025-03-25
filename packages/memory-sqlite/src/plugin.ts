import Database from "better-sqlite3";

import { AgentContext, PluginBase, PluginResult } from "@maiar-ai/core";
import { SQLiteDatabase } from "./database";

export class SQLiteMemoryPlugin extends PluginBase {
  private db: Database.Database;

  constructor() {
    super({
      id: "plugin-sqlite-memory",
      name: "SQLite Memory Plugin",
      description: "Memory plugin for SQLite"
    });

    // Get database connection instance
    this.db = SQLiteDatabase.getInstance().getDatabase();
    // Make new sandbox table
    this.db.exec(`
                CREATE TABLE IF NOT EXISTS sandbox (
                    id TEXT PRIMARY KEY,
                    conversation_id TEXT NOT NULL,
                    content TEXT NOT NULL,
                    timestamp INTEGER NOT NULL,
                    plugin_id TEXT,
                    FOREIGN KEY (conversation_id) REFERENCES conversations(id)
                )
        `);

    this.addExecutor({
      name: "memory:add_document",
      description: "Add a peice of information into the sandboxed database",
      execute: async (context: AgentContext): Promise<PluginResult> => {
        const stmt = this.db.prepare(`
                    INSERT INTO sandbox (id, conversation_id, content, timestamp, plugin_id)
                    VALUES (?, ?, ?, ?, ?)
                `);

        const timestamp = Date.now();
        const documentId = `doc_${timestamp}_${Math.random().toString(36).substr(2, 9)}`;

        // Add most recent peice of context to the sandbox database
        const contextItem =
          context.contextChain[context.contextChain.length - 1];

        // Query to get the most recent conversation ID from the conversations table
        const getLatestConversationStmt = this.db.prepare(`
                    SELECT id FROM conversations 
                    ORDER BY timestamp DESC 
                    LIMIT 1
                `);

        const latestConversation = getLatestConversationStmt.get();

        stmt.run(
          documentId,
          latestConversation,
          contextItem?.content,
          timestamp,
          this.id
        );

        return {
          success: true,
          data: { documentId }
        };
      }
    });
  }
}
