import fs from "fs/promises";
import path from "path";

import { BaseContextItem, createLogger } from "@maiar-ai/core";
import { MemoryProvider, MemoryQueryOptions } from "@maiar-ai/core";

const log = createLogger("memory:filesystem");

export interface FileSystemConfig {
  basePath: string;
}

export class FileSystemProvider implements MemoryProvider {
  readonly id = "filesystem";
  readonly name = "Filesystem Memory";
  readonly description = "Stores conversations as JSON files in the filesystem";

  private basePath: string;

  constructor(config: FileSystemConfig) {
    this.basePath = config.basePath;
    this.initializeStorage();
  }

  private async initializeStorage() {
    try {
      await fs.mkdir(this.basePath, { recursive: true });
      log.info({
        msg: "Initialized filesystem memory storage",
        path: this.basePath
      });
    } catch (error) {
      log.error({
        msg: "Failed to initialize filesystem memory storage",
        error
      });
      throw error;
    }
  }

  private getConversationPath(conversationId: string): string {
    return path.join(this.basePath, `${conversationId}.json`);
  }

  async createTable(tableName: string): Promise<void> {
    const filePath = path.join(this.basePath, `${tableName}.json`);
    await fs.writeFile(filePath, JSON.stringify({}, null, 2));
  }

  async insert(tableName: string, row: Record<string, unknown>): Promise<void> {
    const filePath = path.join(this.basePath, `${tableName}.json`);
    await fs.writeFile(filePath, JSON.stringify(row, null, 2));
  }

  async query(
    tableName: string,
    query: MemoryQueryOptions
  ): Promise<Record<string, unknown>[]> {
    const filePath = path.join(this.basePath, `${tableName}.json`);
    const data = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(data);
    let results: BaseContextItem[] = Object.values(parsedData);

    if (query.after) {
      results = results.filter(
        (item: BaseContextItem) =>
          item.timestamp && item.timestamp > query.after!
      );
    }

    if (query.before) {
      results = results.filter(
        (item: BaseContextItem) =>
          item.timestamp && item.timestamp < query.before!
      );
    }

    results.sort((a, b) => b.timestamp - a.timestamp);

    if (query.limit) {
      results = results.slice(0, query.limit);
    }
    return JSON.parse(data);
  }

  async remove(tableName: string, id: string): Promise<void> {
    const filePath = path.join(this.basePath, `${tableName}.json`);

    const data = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(data);
    delete parsedData[id];
    await fs.writeFile(filePath, JSON.stringify(parsedData, null, 2));
  }

  async clear(tableName: string): Promise<void> {
    const filePath = path.join(this.basePath, `${tableName}.json`);
    await fs.unlink(filePath);
  }
}
