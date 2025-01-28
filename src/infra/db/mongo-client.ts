import { MongoClient, ServerApiVersion } from "mongodb";

export default class MongoDbClient {
  private mongoClient: MongoClient;
  static #instance: MongoDbClient;

  private constructor() {
    this.mongoClient = new MongoClient(process.env.MONGODB_URL ?? "", {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  }

  public static get instance(): MongoDbClient {
    if (!MongoDbClient.#instance) {
      MongoDbClient.#instance = new MongoDbClient();
    }

    return MongoDbClient.#instance;
  }

  public get client(): MongoClient {
    return this.mongoClient;
  }
  public async connect(): Promise<void> {
    await this.mongoClient?.connect();
  }

  public async disconnect(): Promise<void> {
    this.mongoClient?.close();
  }
}
