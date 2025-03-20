export interface Message {
  id: string;
  role: string;
  content: string;
  timestamp: number;
  contextId?: string; // ID of the context that generated this message (for assistant messages)
  user_message_id?: string;
}

export interface Context {
  id: string;
  type: string;
  content: string; // Serialized content for model consumption
  timestamp: number;
  user_message_id?: string;
  agent_message_id?: string;
}

export interface Conversation {
  id: string;
  messages: Message[];
  contexts: Context[];
  metadata?: Record<string, unknown>;
}

export interface MemoryQueryOptions {
  user?: string;
  pluginId?: string;
  limit?: number;
  before?: number;
  after?: number;
  conversationId?: string;
}

/**
 * Interface that all memory providers must implement
 */
export interface MemoryProvider {
  readonly id: string;
  readonly name: string;
  readonly description: string;

  // Create a new table in memory database
  createTable(tableName: string): Promise<void>;

  // Insert a new row into a table in memory database
  insert(tableName: string, row: Record<string, unknown>): Promise<void>;

  // Query a table in memory database
  query(
    tableName: string,
    query: MemoryQueryOptions
  ): Promise<Record<string, unknown>[]>;

  // Remove a row from a table in memory database
  remove(tableName: string, id: string): Promise<void>;

  // Clear a table in memory database
  clear(tableName: string): Promise<void>;
}
