import { Car } from "../entities/car";

export interface ICarRepository {
  create(car: Omit<Car, "id">): Promise<Car>;
  findById(id: string): Promise<Car | null>;
  update(id: string, car: Partial<Car>): Promise<Car | null>;
  delete(id: string): Promise<boolean>;
}
