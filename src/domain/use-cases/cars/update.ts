import { UpdateCarDTO } from "../../dtos/car.dto";
import { Car } from "../../entities/car";

export interface UpdateCar {
  invoke(id: string, car: UpdateCarDTO): Promise<Car>;
}
