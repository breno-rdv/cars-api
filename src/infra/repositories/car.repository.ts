import { PostgresqlClient } from "../config/postgresql/postgresql-client";
import { Car } from "../../domain/entities/car";
import { ICarRepository } from "../../domain/repositories/car-repository";

export class CarRepository implements ICarRepository {
  async create(car: Omit<Car, "id">): Promise<Car> {
    const result = await PostgresqlClient.query<Car>(
      "INSERT INTO cars (model, brand, year, price, color) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [car.model, car.brand, car.year, car.price, car.color]
    );
    return result[0];
  }
  findById(id: string): Promise<Car | null> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<Car[]> {
    throw new Error("Method not implemented.");
  }
  update(id: string, car: Partial<Car>): Promise<Car | null> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
