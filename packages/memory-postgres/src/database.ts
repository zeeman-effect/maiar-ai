import { Pool } from "pg";
import { PostgresConfig } from "./types";

export class PostgresDatabase {
  private static instance: PostgresDatabase;
  private pool: Pool | null = null;

  private constructor() {}

  public init(config: PostgresConfig) {
    if (!this.pool) {
      this.pool = new Pool({
        connectionString: config.connectionString,
        ssl: config.ssl,
        max: config.max || 20
      });
    }
  }

  public static getInstance(): PostgresDatabase {
    if (!PostgresDatabase.instance) {
      PostgresDatabase.instance = new PostgresDatabase();
    }
    return PostgresDatabase.instance;
  }

  public getPool(): Pool {
    if (!this.pool) {
      throw new Error(
        "Pool not initialized, Call .init() on PostgresDatabase before accessing pool"
      );
    }
    return this.pool!;
  }

  public async close(): Promise<void> {
    if (this.pool) {
      await this.pool.end();
      this.pool = null;
    }
  }
}
