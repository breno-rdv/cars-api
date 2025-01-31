import { CarType, FuelType, Transmission, Location, Status } from "./types";

export class Car {
  private id: string;

  private model: string;

  private make: string;

  private year: string;

  private type: CarType;

  private engineSize: string;

  private fuelType: FuelType;

  private transmission: Transmission;

  private horsepower: string;

  private lastServiceDate: string;

  private mileage: string;

  private licensePlate: string;

  private price: number;

  private createdAt: string;

  private updatedAt: string;

  private location: Location;

  private pictures: Array<string>;

  private status: Status;

  constructor(
    model: string,
    make: string,
    year: string,
    carType: CarType,
    engineSize: string,
    fuelType: FuelType,
    transmission: Transmission,
    horsePower: string,
    lastServiceDate: string,
    mileage: string,
    licensePlate: string,
    price: number,
    location: Location,
    status: Status
  ) {
    this.id = "";
    this.model = model;
    this.make = make;
    this.year = year;
    this.type = carType;
    this.engineSize = engineSize;
    this.fuelType = fuelType;
    this.transmission = transmission;
    this.horsepower = horsePower;
    this.lastServiceDate = lastServiceDate;
    this.mileage = mileage;
    this.licensePlate = licensePlate;
    this.price = price;
    this.createdAt = new Date().toISOString();
    this.updatedAt = "";
    this.location = location;
    this.pictures = [];
    this.status = status;
  }

  public setId(id: string) {
    if (this.id) throw new Error("Car Domain already has in Id");
    this.id = id;
  }

  public setUpdatedAt(date: string) {
    this.updatedAt = date;
  }

  public setPictures(pictures: Array<string>) {
    this.pictures = pictures;
  }
}
