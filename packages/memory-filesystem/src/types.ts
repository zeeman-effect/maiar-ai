import { z } from "zod";

export interface FileSystemConfig {
  basePath: string;
}

export interface FileSystemMemoryDocument {
  id: string;
  conversationId: string;
  content: string;
  timestamp: number;
}

export const FileSystemMemoryUploadSchema = z.object({
  content: z.string().describe("Data to upload to the sandbox database")
});

export interface FileSystemQuery {
  ids?: string[];
  conversationIds?: string[];
  content?: string;
  before?: number;
  after?: number;
}

export const FileSystemQuerySchema = z.object({
  ids: z
    .array(z.string())
    .optional()
    .describe("Array of document IDs to query"),
  conversationIds: z
    .array(z.string())
    .optional()
    .describe("Conversation IDs of documents to query"),
  content: z.string().optional().describe("Content to search documents for"),
  before: z
    .number()
    .optional()
    .describe("Timestamp to filter documnets before"),
  after: z.number().optional().describe("Timestamp to filter documents after")
});
