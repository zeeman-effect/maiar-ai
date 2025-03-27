import { z } from "zod";

export interface SQLiteConfig {
  dbPath: string;
}

export const SQLiteMemoryUploadSchema = z.object({
  content: z.string().describe("The response data to send back to the client")
});

export const SQLiteQuerySchema = z.object({
  query: z.string().describe("SQL query string")
});
