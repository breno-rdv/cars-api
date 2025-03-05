import { CarType, FuelType, Status, Transmission, Location } from "./types";

export interface Car {
  id: string;
  model: string;
  maker: string;
  year: number;
  type: CarType;
  engineSize: number;
  fuelType: FuelType;
  transmission: Transmission;
  horsepower: number;
  lastServiceDate: string; // ISO date string format
  mileage: number;
  licensePlate: string;
  price: number;
  location: Location;
  status: Status;
  pictures: string[];
  createdAt: string; // ISO date string format
  updatedAt?: string; // ISO date string format
}
