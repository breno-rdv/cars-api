import { Car } from "../../domain/entities/car";
import { CreateCarDTO, UpdateCarDTO } from "../../domain/dtos/car.dto";

export interface CarRepository {
  create(car: CreateCarDTO): Promise<Car>;
  findById(id: string): Promise<Car | null>;
  findAll(): Promise<Car[]>;
  update(id: string, car: UpdateCarDTO): Promise<Car | null>;
  delete(id: string): Promise<boolean>;
}
