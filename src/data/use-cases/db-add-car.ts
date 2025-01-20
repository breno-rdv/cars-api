import { Car } from "../../domain/car";
import { AddCar, AddCarModel } from "../../domain/use-cases/add-car";
import { AddCarRespository } from "../protocols/add-car-repository";

export class DbAddCar implements AddCar {
  private readonly addCarRepository: AddCarRespository;

  public constructor(addCarRepository: AddCarRespository) {
    this.addCarRepository = addCarRepository;
  }

  invoke(car: AddCarModel): Promise<Car> {
    console.log(car);
    throw new Error("Method not implemented.");
  }
}
