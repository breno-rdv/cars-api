import { AddCarRespository } from "../../data/protocols/add-car-repository";
import { Car } from "../../domain/car";
import { AddCarModel } from "../../domain/use-cases/add-car";
import MongoDbClient from "../db/mongo-client";

export class CarRepository implements AddCarRespository {
  async add(car: AddCarModel): Promise<Car> {
    const collection = MongoDbClient.instance.geCollection("cars");
    const result = await collection.insertOne(car);
    const createdObject = {
      id: result.insertedId.toString(),
      ...car,
    };
    return createdObject as unknown as Car;
  }
}
