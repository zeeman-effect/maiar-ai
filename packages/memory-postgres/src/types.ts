export interface PostgresConfig {
  connectionString: string;
  ssl?: boolean;
  max?: number; // maximum number of clients in pool
}
