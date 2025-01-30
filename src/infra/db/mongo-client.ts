import { Collection, MongoClient, ServerApiVersion } from "mongodb";

export default class MongoDbClient {
  private mongoClient: MongoClient | null = null;
  static #instance: MongoDbClient;

  private constructor() {}

  public static get instance(): MongoDbClient {
    if (!MongoDbClient.#instance) {
      MongoDbClient.#instance = new MongoDbClient();
    }

    return MongoDbClient.#instance;
  }

  public async connect(): Promise<void> {
    if (this.mongoClient) {
      throw new Error("Client already connected");
    }
    const client = new MongoClient(process.env.MONGODB_URL ?? "", {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    this.mongoClient = client;
  }

  public async disconnect(): Promise<void> {
    this.mongoClient!.close();
  }

  public geCollection(name: string): Collection {
    return this.mongoClient!.db("cars-api").collection(name);
  }
}
