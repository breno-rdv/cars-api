import { CarType, FuelType, Transmission, Status } from "../types";
import { Car } from "../car";

export interface AddCarModel {
  model: string;

  make: string;

  year: string;

  type: CarType;

  engineSize: string;

  fuelType: FuelType;

  transmission: Transmission;

  horsepower: string;

  lastServiceDate: string;

  mileage: string;

  licensePlate: string;

  price: number;

  createdAt: string;

  updatedAt: string;

  location: Location;

  pictures: Array<string>;

  status: Status;
}

export interface AddCar {
  invoke(car: AddCarModel): Promise<Car>;
}
