import { AddCarRespository } from "../../../data/protocols/add-car-repository";
import { Car } from "../../../domain/car";
import { AddCarModel } from "../../../domain/use-cases/add-car";

export class CarRepository implements AddCarRespository {
  add(car: AddCarModel): Promise<Car> {
    console.log(car);
    throw new Error("Method not implemented.");
  }
}
