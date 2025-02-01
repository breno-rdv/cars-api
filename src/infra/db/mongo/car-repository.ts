import { ObjectId } from "mongodb";
import { AddCarRespository } from "../../../data/protocols/add-car-repository";
import { Car } from "../../../domain/car";
import { AddCarModel } from "../../../domain/use-cases/add-car";
import MongoDbClient from "../mongo-client";
import { v4 as uuid } from "uuid";

export class CarRepository implements AddCarRespository {
  async add(car: AddCarModel): Promise<Car> {
    const collection = MongoDbClient.instance.geCollection("cars");

    const domainObject = new Car(
      uuid(),
      car.model,
      car.make,
      car.year,
      car.type,
      car.engineSize,
      car.fuelType,
      car.transmission,
      car.horsepower,
      car.lastServiceDate,
      car.mileage,
      car.licensePlate,
      car.price,
      car.location,
      car.status
    );

    const { id, ...rest } = domainObject;

    await collection.insertOne({
      _id: id as unknown as ObjectId,
      ...rest,
    });

    return domainObject;
  }
}
