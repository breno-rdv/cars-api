import { CreateCarDTO } from "../../dtos/car.dto";
import { Car } from "../../entities/car";

export interface CreateCar {
  invoke(car: CreateCarDTO): Promise<Car>;
}
