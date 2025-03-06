import { Car } from "../../entities/car";

export interface FindAllCars {
  invoke(): Promise<Car[]>;
}
