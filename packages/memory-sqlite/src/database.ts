import path from "path";
import Database from "better-sqlite3";

import { SQLiteConfig } from "./types";

export class SQLiteDatabase {
  private static instance: SQLiteDatabase;
  private db: Database.Database | null = null;

  private constructor() {}

  public init(config: SQLiteConfig): void {
    if (!this.db) {
      this.db = new Database(path.resolve(config.dbPath));
    }
  }

  public static getInstance(): SQLiteDatabase {
    if (!SQLiteDatabase.instance) {
      SQLiteDatabase.instance = new SQLiteDatabase();
    }
    return SQLiteDatabase.instance;
  }

  public getDatabase(): Database.Database {
    if (!this.db) {
      throw new Error("Database not initialized");
    }
    return this.db;
  }

  public close(): void {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
}
