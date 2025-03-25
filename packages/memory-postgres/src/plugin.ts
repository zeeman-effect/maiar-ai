import { Pool } from "pg";
import { AgentContext, PluginBase, PluginResult } from "@maiar-ai/core";
import { PostgresDatabase } from "./database";

export class PostgressMemoryPlugin extends PluginBase {
  private pool: Pool;

  constructor() {
    super({
      id: "plugin-postgres-memory",
      name: "Postgres Memory Plugin",
      description:
        "Memory extension that allows for runtime operations to control a sandbox table"
    });
    this.pool = PostgresDatabase.getInstance().getPool();
    this.createTable();

    this.addExecutor({
      name: "memory:add_document",
      description:
        "Add a peice of context from the context chain into the sandboxed database",
      execute: async (context: AgentContext): Promise<PluginResult> => {
        const timestamp = Date.now();
        const documentId = `doc_${timestamp}_${Math.random().toString(36).substr(2, 9)}`;

        // Add most recent peice of context to the sandbox database
        const contextItem =
          context.contextChain[context.contextChain.length - 1];

        const client = await this.pool.connect();
        try {
          // Query to get the most recent conversation ID from the conversations table
          const conversationResult = await client.query(`
                    SELECT id FROM conversations 
                    ORDER BY created_at DESC 
                    LIMIT 1
                  `);

          if (conversationResult.rows.length === 0) {
            throw new Error("No conversations found in the database");
          }

          const conversationId = conversationResult.rows[0].id;
          await client.query(
            `INSERT INTO messages (id, conversation_id, role, content, timestamp, context_id, user_message_id)
                     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [documentId, conversationId, contextItem?.content, timestamp]
          );
        } finally {
          client.release();
        }

        return {
          success: true,
          data: { documentId }
        };
      }
    });
  }

  async createTable(): Promise<void> {
    const client = await this.pool.connect();
    try {
      await client.query(`
              CREATE TABLE IF NOT EXISTS sandbox (
                id TEXT PRIMARY KEY,
                conversation_id TEXT NOT NULL,
                content TEXT NOT NULL,
                timestamp BIGINT NOT NULL,
                FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE,
              );
            `);
    } finally {
      client.release();
    }
  }
}
