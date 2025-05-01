import { PostgresqlClient } from "../config/postgresql/postgresql-client";
import { Car } from "../../domain/entities/car";
import { CarRepository } from "./car";
import { CreateCarDTO, UpdateCarDTO } from "../../domain/dtos/car.dto";
import {
  FindAllCarsParams,
  FindAllCarsResult,
} from "../../domain/use-cases/cars/find-all";

export class CarRepositoryImpl implements CarRepository {
  async create(car: CreateCarDTO): Promise<Car> {
    const result = await PostgresqlClient.query<Car>(
      "INSERT INTO cars (model, maker, year, color, type, engine_size, fuel_type, transmission, horsepower, last_service_date, mileage, license_plate, price, location, status, pictures, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *",
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

  async findAll(params: FindAllCarsParams): Promise<FindAllCarsResult> {
    const { page, limit, sort, filters } = params;
    const offset = (page - 1) * limit;

    let query = "SELECT * FROM cars";
    const values: any[] = [];
    let whereConditions: string[] = [];
    let parameterIndex = 1;

    if (filters) {
      if (filters.maker) {
        whereConditions.push(`maker ILIKE $${parameterIndex}`);
        values.push(`%${filters.maker}%`);
        parameterIndex++;
      }
      if (filters.model) {
        whereConditions.push(`model ILIKE $${parameterIndex}`);
        values.push(`%${filters.model}%`);
        parameterIndex++;
      }
      if (filters.year) {
        whereConditions.push(`year = $${parameterIndex}`);
        values.push(filters.year);
        parameterIndex++;
      }
      if (filters.minPrice) {
        whereConditions.push(`price >= $${parameterIndex}`);
        values.push(filters.minPrice);
        parameterIndex++;
      }
      if (filters.maxPrice) {
        whereConditions.push(`price <= $${parameterIndex}`);
        values.push(filters.maxPrice);
        parameterIndex++;
      }
    }

    if (whereConditions.length > 0) {
      query += " WHERE " + whereConditions.join(" AND ");
    }

    // Add sorting
    if (sort) {
      const [field, order] = sort.split(":");
      query += ` ORDER BY ${field} ${order === "desc" ? "DESC" : "ASC"}`;
    } else {
      query += " ORDER BY created_at DESC";
    }

    // Add pagination
    query += ` LIMIT $${parameterIndex} OFFSET $${parameterIndex + 1}`;
    values.push(limit, offset);

    // Get total count
    const countQuery = `SELECT COUNT(*) FROM cars${
      whereConditions.length > 0
        ? " WHERE " + whereConditions.join(" AND ")
        : ""
    }`;
    const countResult = (await PostgresqlClient.query(
      countQuery,
      values.slice(0, -2)
    )) as Car[];
    const total = countResult.length;

    const cars = await PostgresqlClient.query<Car>(query, values);

    return {
      cars,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      hasMore: page < Math.ceil(total / limit),
    };
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
