import { Pool, PoolClient } from "pg";

export class PostgresqlClient {
  private static instance: Pool;
  private static isConnected: boolean = false;

  private static async getInstance(): Promise<Pool> {
    if (!this.instance) {
      try {
        this.instance = new Pool({
          connectionString: process.env.DATABASE_URL,
          // Optional configurations
          max: 20, // Maximum number of clients in the pool
          idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
          connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
        });

        // Test the connection
        const client = await this.instance.connect();
        client.release();

        this.isConnected = true;
        console.log("✅ Successfully connected to PostgreSQL database");
      } catch (error) {
        this.isConnected = false;
        console.error("❌ Failed to connect to PostgreSQL database:", error);
        throw error;
      }
    }
    return this.instance;
  }

  public static async getConnection(): Promise<PoolClient> {
    const pool = await this.getInstance();
    return pool.connect();
  }

  public static async query<T>(
    queryText: string,
    params?: any[]
  ): Promise<T[]> {
    const pool = await this.getInstance();
    try {
      const result = await pool.query(queryText, params);
      return result.rows;
    } catch (error) {
      console.error("Query execution error:", error);
      throw error;
    }
  }

  public static async disconnect(): Promise<void> {
    if (this.instance && this.isConnected) {
      await this.instance.end();
      this.isConnected = false;
      console.log("📤 Disconnected from PostgreSQL database");
    }
  }
}
