import { ObjectId } from "mongodb";
import { MongoDbClient } from "./mongodb-client";
import { ICarRepository } from "../../../domain/repositories/car-repository";
import { Car } from "../../../domain/entities/car";

export class CarRepository implements ICarRepository {
  private readonly collection = "cars";

  async create(carData: Omit<Car, "id">): Promise<Car> {
    const db = await MongoDbClient.instance.getCollection(this.collection);
    const result = await db.insertOne(carData);
    const car: Car = {
      id: result.insertedId.toString(),
      model: carData.model,
      brand: carData.brand,
      year: carData.year,
      price: carData.price,
      color: carData.color,
    };
    return car;
  }

  async findById(id: string): Promise<Car | null> {
    const db = await MongoDbClient.instance.getCollection(this.collection);
    const doc = await db.findOne({ _id: new ObjectId(id) });
    if (!doc) return null;
    const { _id, model, brand, year, price, color } = doc;
    return { id: _id.toString(), model, brand, year, price, color };
  }

  async update(id: string, carData: Partial<Car>): Promise<Car | null> {
    const db = await MongoDbClient.instance.getCollection(this.collection);
    const result = await db.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: carData },
      { returnDocument: "after" }
    );
    if (!result?.value) return null;
    const { _id, model, brand, year, price, color } = result.value;
    return { id: _id.toString(), model, brand, year, price, color };
  }

  async delete(id: string): Promise<boolean> {
    const db = await MongoDbClient.instance.getCollection(this.collection);
    const result = await db.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }
}
