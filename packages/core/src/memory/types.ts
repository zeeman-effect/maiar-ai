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
  content: string; // Serialized content for LLM consumption
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

  // Store a new message
  storeMessage(message: Message, conversationId: string): Promise<void>;

  // Store context used in generating a response
  storeContext(context: Context, conversationId: string): Promise<void>;

  // Get recent messages
  getMessages(options: MemoryQueryOptions): Promise<Message[]>;

  // Get contexts for a conversation
  getContexts(conversationId: string): Promise<Context[]>;

  // Get full conversation history
  getConversation(conversationId: string): Promise<Conversation>;

  // Create a new conversation
  createConversation(options?: {
    id?: string;
    metadata?: Record<string, unknown>;
  }): Promise<string>;

  // Delete a conversation and all its messages/contexts
  deleteConversation(conversationId: string): Promise<void>;
}
