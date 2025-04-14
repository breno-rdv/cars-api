import { PostgresqlClient } from "../config/postgresql/postgresql-client";
import { Car } from "../../domain/entities/car";
import { CarRepository } from "./car";
import { CreateCarDTO, UpdateCarDTO } from "../../domain/dtos/car.dto";

export class CarRepositoryImpl implements CarRepository {
  async create(car: CreateCarDTO): Promise<Car> {
    const result = await PostgresqlClient.query<Car>(
      "INSERT INTO cars (model, maker, year, color, type, engineSize, fuelType, transmission, horsepower, lastServiceDate, mileage, licensePlate, price, location, status, pictures, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        car.model,
        car.maker,
        car.year,
        car.color,
        car.type,
        car.engineSize,
        car.fuelType,
        car.transmission,
        car.horsepower,
        car.lastServiceDate,
        car.mileage,
        car.licensePlate,
        car.price,
        car.location,
        car.status,
        car.pictures,
        car.createdAt,
        car.updatedAt,
      ]
    );
    return result[0];
  }
  async findById(id: string): Promise<Car | null> {
    const result = await PostgresqlClient.query<Car>(
      "SELECT * FROM cars WHERE id = $1",
      [id]
    );
    return result.length > 0 ? result[0] : null;
  }
  async findAll(): Promise<Car[]> {
    const result = await PostgresqlClient.query<Car>("SELECT * FROM cars", []);
    return result;
  }
  async update(id: string, car: UpdateCarDTO): Promise<Car | null> {
    const updateFields: string[] = [];
    const values: any[] = [];
    let parameterIndex = 1;

    Object.entries(car).forEach(([key, value]) => {
      if (value !== undefined) {
        updateFields.push(`${key} = $${parameterIndex}`);
        values.push(value);
        parameterIndex++;
      }
    });

    if (updateFields.length === 0) {
      return null;
    }

    values.push(id);

    const query = `
      UPDATE cars 
      SET ${updateFields.join(", ")}, updatedAt = NOW()
      WHERE id = $${parameterIndex}
      RETURNING *
    `;

    const result = await PostgresqlClient.query<Car>(query, values);
    return result.length > 0 ? result[0] : null;
  }
  async delete(id: string): Promise<boolean> {
    const result = await PostgresqlClient.query<Car>(
      "DELETE FROM cars WHERE id = $1 RETURNING *",
      [id]
    );
    return result.length > 0;
  }
}
