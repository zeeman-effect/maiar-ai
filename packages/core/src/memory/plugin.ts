import { AgentContext, BaseContextItem } from "../types/agent";
import { Plugin, PluginBase, PluginResult, Capability } from "../plugin";
import { MemoryProvider, MemoryQueryOptions } from "./types";

/**
 * Memory item structure for the sandbox table
 */
export interface MemoryItem {
  id: string;
  key: string; // Indexable key for the memory
  value: string; // Content/value of the memory
  metadata?: Record<string, unknown>; // Optional metadata for filtering
  timestamp: number; // When this memory was created/updated
  conversationId?: string; // Optional link to a conversation
}

/**
 * Query options for memory sandbox
 */
export interface MemorySandboxQueryOptions {
  key?: string; // Exact key match
  keyPattern?: string; // Regex pattern for key
  metadata?: Record<string, unknown>; // Filter by metadata fields
  limit?: number; // Max items to return
  before?: number; // Timestamp filter
  after?: number; // Timestamp filter
  conversationId?: string; // Filter by conversation
}

/**
 * Abstract base class for memory plugins that enforces required executors
 */
export class MemoryPlugin extends PluginBase implements Plugin {
  private memoryProvider: MemoryProvider;

  constructor(config: {
    id: string;
    name: string;
    description: string;
    capabilities?: Capability[];
    memoryProvider: MemoryProvider;
  }) {
    super(config);
    this.memoryProvider = config.memoryProvider;
    this.init();
  }

  async init() {
    // construct context tables
    await this.memoryProvider.createTable("sandbox");
    await this.memoryProvider.createTable("history");
    await this.memoryProvider.createTable("user_context");

    this.registerRequiredExecutors();
  }

  /**
   * Register the required executors. Each memory plugin must implement these.
   */
  private registerRequiredExecutors() {
    this.addExecutor({
      name: "insert",
      description: "Store previous context items in memory",
      execute: (context: AgentContext) => {
        const { table, record } = this.getRecordFromContextChain(context);
        const recordAsRecord = {
          ...record,
          content: JSON.stringify(record.content)
        } as Record<string, unknown>;
        return this.insert(table, recordAsRecord);
      }
    });

    this.addExecutor({
      name: "query",
      description: "Query data from memory",
      execute: (context: AgentContext) => {
        const { table, record } = this.getRecordFromContextChain(context);
        const recordAsRecord = {
          ...record,
          content: JSON.stringify(record.content)
        } as Record<string, unknown>;
        return this.query(table, recordAsRecord);
      }
    });

    this.addExecutor({
      name: "remove",
      description: "Remove data from memory",
      execute: (context: AgentContext) => {
        const { table, record } = this.getRecordFromContextChain(context);
        return this.remove(table, record.id);
      }
    });
  }

  private getRecordFromContextChain(context: AgentContext): {
    table: string;
    record: BaseContextItem;
  } {
    // Get the most recent context item
    const contextItem = context.contextChain[context.contextChain.length - 1];
    if (!contextItem) {
      throw new Error("No context item found");
    }

    return { table: contextItem.pluginId || "sandbox", record: contextItem };
  }

  /**
   * Insert context into memory
   * @param context - The context to insert
   * @returns The result of the operation
   */
  async insert(
    table: string,
    context: Record<string, unknown>
  ): Promise<PluginResult> {
    try {
      await this.memoryProvider.insert(table, context);
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }

  /**
   * Query data from memory
   * @param table - The table to query
   * @param query - The query to execute
   * @returns The result of the operation
   */
  async query(table: string, query: MemoryQueryOptions): Promise<PluginResult> {
    try {
      const result = await this.memoryProvider.query(table, query);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }

  /**
   * Remove data from memory
   * @param table - The table to remove from
   * @param id - The id of the record to remove
   * @returns The result of the operation
   */
  async remove(table: string, id: string): Promise<PluginResult> {
    try {
      await this.memoryProvider.remove(table, id);
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }
}
