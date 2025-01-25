import { MongoClient } from "mongodb";

export default class MongoDb {
  private client: MongoClient | null = null;
  static #instance: MongoDb;

  private constructor() {}

  public static get instance(): MongoDb {
    if (!MongoDb.#instance) {
      MongoDb.#instance = new MongoDb();
    }

    return MongoDb.instance;
  }

  async connect(): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL ?? "");
  }

  async disconnect(): Promise<void> {
    this.client!.close();
  }
}
