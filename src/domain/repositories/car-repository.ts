import { Car } from "../entities/car";
// TODO: remove repository and create usecase for each operation
export interface ICarRepository {
  create(car: Omit<Car, "id">): Promise<Car>;
  findById(id: string): Promise<Car | null>;
  findAll(): Promise<Car[]>;
  update(id: string, car: Partial<Car>): Promise<Car | null>;
  delete(id: string): Promise<boolean>;
}
