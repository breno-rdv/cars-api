import { Collection, MongoClient } from "mongodb";

export class MongoDbClient {
  private static _instance: MongoDbClient;
  private client: MongoClient;
  private uri: string;

  private constructor() {
    this.uri = process.env.MONGODB_URI || "mongodb://localhost:27017/cars_db";
    this.client = new MongoClient(this.uri);
  }

  static get instance(): MongoDbClient {
    if (!MongoDbClient._instance) {
      MongoDbClient._instance = new MongoDbClient();
    }
    return MongoDbClient._instance;
  }

  async getCollection(name: string): Promise<Collection> {
    if (!this.client.connect()) {
      await this.client.connect();
    }
    return this.client.db().collection(name);
  }

  async disconnect(): Promise<void> {
    await this.client.close();
  }
}
