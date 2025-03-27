import Database, { Statement } from "better-sqlite3";

import { AgentContext, PluginBase, PluginResult } from "@maiar-ai/core";
import { SQLiteDatabase } from "./database";
import { SQLiteMemoryUploadSchema, SQLiteQuerySchema } from "./types";
import {
  generateUploadDocumnetTemplate,
  generateQueryTemplate
} from "./templates";

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
                    timestamp BIGINT NOT NULL,
                    FOREIGN KEY (conversation_id) REFERENCES conversations(id)
                )
        `);

    this.addExecutor({
      name: "memory:add_document",
      description: "Add a peice of information into the sandboxed database",
      execute: async (context: AgentContext): Promise<PluginResult> => {
        const stmt = this.db.prepare(`
            INSERT INTO sandbox (id, conversation_id, content, timestamp)
            VALUES (?, ?, ?, ?)
        `);

        const timestamp = Date.now();
        const documentId = `doc_${timestamp}_${Math.random().toString(36).substr(2, 9)}`;

        // Get data to store in database from context chain
        const formattedResponse = await this.runtime.operations.getObject(
          SQLiteMemoryUploadSchema,
          generateUploadDocumnetTemplate(context.contextChain),
          { temperature: 0.2 }
        );

        // Query to get the most recent conversation ID from the conversations table
        const getLatestConversationStmt = this.db.prepare(`
            SELECT id FROM conversations 
            ORDER BY created_at DESC 
            LIMIT 1
        `);

        const latestConversation = getLatestConversationStmt.get() as {
          id: string;
        };
        if (!latestConversation.id) {
          throw new Error("No conversations found");
        }

        stmt.run(
          documentId,
          latestConversation.id,
          formattedResponse.content,
          timestamp
        );

        return {
          success: true,
          data: { documentId }
        };
      }
    });

    this.addExecutor({
      name: "memory:remove_document",
      description: "Remove a peice of information from the sandbox database",
      execute: async (context: AgentContext): Promise<PluginResult> => {
        // Construct query for document ids
        const queryFormattedResponse = await this.runtime.operations.getObject(
          SQLiteQuerySchema,
          generateQueryTemplate(context.contextChain),
          { temperature: 0.2 }
        );
        const queryStmt = this.db.prepare(queryFormattedResponse.query);
        const queryResults = queryStmt.all() as { id: string }[];

        if (queryResults.length === 0) {
          return {
            success: false,
            data: {
              message: `No documnets found with query: ${queryFormattedResponse.query}`
            }
          };
        }

        let deleteStmt: Statement;
        const documentIds = queryResults.map((result) => result.id).join(", ");
        if (queryResults.length === 1) {
          deleteStmt = this.db.prepare(`
            DELETE FROM sandbox
            WHERE id = '${queryResults[0]?.id}'
          `);
        } else {
          deleteStmt = this.db.prepare(`
              DELETE FROM sandbox 
              WHERE id IN (${documentIds})
          `);
        }

        const result = deleteStmt.run();
        if (result.changes === 0) {
          return {
            success: false,
            data: {
              message: `Database was not altered, check query. ${queryFormattedResponse.query}. Found documents ids ${documentIds}`
            }
          };
        }

        return {
          success: true,
          data: { documentIds }
        };
      }
    });

    this.addExecutor({
      name: "memory:query",
      description:
        "Query the sandbox database for documnets that match the user or plugin requests",
      execute: async (context: AgentContext): Promise<PluginResult> => {
        // Construct query from context
        const queryFormattedResponse = await this.runtime.operations.getObject(
          SQLiteQuerySchema,
          generateQueryTemplate(context.contextChain, ["id", "content"]),
          { temperature: 0.2 }
        );
        const queryStmt = this.db.prepare(queryFormattedResponse.query);
        const results = queryStmt.all() as { id: string; content: string }[];

        return {
          success: true,
          data: { results }
        };
      }
    });
  }
}
