import { z } from "zod";

export interface PostgresConfig {
  connectionString: string;
  ssl?: boolean;
  max?: number; // maximum number of clients in pool
}

export const PostgresMemoryUploadSchema = z.object({
  content: z.string().describe("Data to upload to the sandbox database")
});

export const PostgresQuerySchema = z.object({
  query: z.string().describe("Postgresql query string")
});
