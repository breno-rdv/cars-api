import { Car } from "../../domain/entities/car";
import { CreateCarDTO, UpdateCarDTO } from "../../domain/dtos/car.dto";
import {
  FindAllCarsParams,
  FindAllCarsResult,
} from "../../domain/use-cases/cars/find-all";

export interface CarRepository {
  create(car: CreateCarDTO): Promise<Car>;
  findById(id: string): Promise<Car | null>;
  findAll(params: FindAllCarsParams): Promise<FindAllCarsResult>;
  update(id: string, car: UpdateCarDTO): Promise<Car | null>;
  delete(id: string): Promise<boolean>;
}
