import { Car } from "../../domain/car";
import { AddCarModel } from "../../domain/use-cases/add-car";

export interface AddCarRespository {
  add(car: AddCarModel): Promise<Car>;
}
