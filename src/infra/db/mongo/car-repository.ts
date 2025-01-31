import { AddCarRespository } from "../../../data/protocols/add-car-repository";
import { Car } from "../../../domain/car";
import { AddCarModel } from "../../../domain/use-cases/add-car";
import MongoDbClient from "../mongo-client";

export class CarRepository implements AddCarRespository {
  async add(car: AddCarModel): Promise<Car> {
    const collection = MongoDbClient.instance.geCollection("cars");

    const domainObject = new Car(
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

    const result = await collection.insertOne(car);

    domainObject.setId(result.insertedId.toString());

    return domainObject;
  }
}
