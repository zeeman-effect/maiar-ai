import fs from "fs";
import path from "path";

import Database from "better-sqlite3";

import { createLogger } from "@maiar-ai/core";

import { MemoryProvider, MemoryQueryOptions } from "@maiar-ai/core";

const log = createLogger("memory:sqlite");

export interface SQLiteConfig {
  dbPath: string;
}

export class SQLiteProvider implements MemoryProvider {
  readonly id = "sqlite";
  readonly name = "SQLite Memory";
  readonly description = "Stores conversations in a SQLite database";

  private db: Database.Database;

  constructor(config: SQLiteConfig) {
    const dbDir = path.dirname(config.dbPath);
    fs.mkdirSync(dbDir, { recursive: true });

    this.db = new Database(path.resolve(config.dbPath));
    this.db.exec("PRAGMA foreign_keys = ON;");
    this.checkHealth();
  }

  // TODO: Make more generic, allow for more than just id, content, timestamp
  async createTable(tableName: string): Promise<void> {
    this.db.exec(
      `CREATE TABLE IF NOT EXISTS ${tableName} (id TEXT PRIMARY KEY, content TEXT NOT NULL, timestamp INTEGER NOT NULL)`
    );
  }

  private checkHealth() {
    try {
      this.db.prepare("SELECT 1").get();
      this.db.transaction(() => {})();
      const fkEnabled = this.db.prepare("PRAGMA foreign_keys").get() as {
        foreign_keys: number;
      };
      if (!fkEnabled || !fkEnabled.foreign_keys) {
        throw new Error("Foreign key constraints are not enabled");
      }
      log.info({ msg: "SQLite health check passed" });
    } catch (error) {
      log.error({ msg: "SQLite health check failed", error });
      throw new Error(
        `Failed to initialize SQLite database: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  async insert(tableName: string, row: Record<string, unknown>): Promise<void> {
    const stmt = this.db.prepare(`
            INSERT INTO ${tableName} (id, content, timestamp)
            VALUES (?, ?, ?)
        `);
    stmt.run(row.id, row.content, row.timestamp);
  }

  async query(
    tableName: string,
    query: MemoryQueryOptions
  ): Promise<Record<string, unknown>[]> {
    let queryString = `SELECT * FROM ${tableName}`;
    const params: (string | number)[] = [];

    if (query.after) {
      queryString += " AND timestamp > ?";
      params.push(query.after);
    }

    if (query.before) {
      queryString += " AND timestamp < ?";
      params.push(query.before);
    }

    queryString += " ORDER BY timestamp DESC";

    if (query.limit) {
      queryString += " LIMIT ?";
      params.push(query.limit);
    }

    const stmt = this.db.prepare(queryString);
    return stmt.all(...params) as Record<string, unknown>[];
  }

  async remove(tableName: string, id: string): Promise<void> {
    const deleteMessages = this.db.prepare(
      `DELETE FROM ${tableName} WHERE id = ?`
    );

    try {
      deleteMessages.run(id);
    } catch (error) {
      log.error({
        msg: "Failed to delete conversation",
        id,
        error
      });
      throw error;
    }
  }

  async clear(tableName: string): Promise<void> {
    const stmt = this.db.prepare(`DELETE FROM ${tableName}`);
    try {
      stmt.run();
    } catch (error) {
      log.error({
        msg: "Failed to clear table",
        tableName,
        error
      });
      throw error;
    }
  }
}
