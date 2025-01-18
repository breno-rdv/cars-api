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
    id: string,
    model: string,
    make: string,
    year: string,
    type: CarType,
    engineSize: string,
    fuelType: FuelType,
    transmission: Transmission,
    horsepower: string,
    lastServiceDate: string,
    mileage: string,
    licensePlate: string,
    price: number,
    createdAt: string,
    updatedAt: string,
    location: Location,
    pictures: Array<string>,
    status: Status
  ) {
    this.id = id;
    this.model = model;
    this.make = make;
    this.year = year;
    this.type = type;
    this.engineSize = engineSize;
    this.fuelType = fuelType;
    this.transmission = transmission;
    this.horsepower = horsepower;
    this.lastServiceDate = lastServiceDate;
    this.mileage = mileage;
    this.licensePlate = licensePlate;
    this.price = price;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.location = location;
    this.pictures = pictures;
    this.status = status;
  }

  getId(): string {
    return this.id;
  }

  getModel(): string {
    return this.model;
  }

  getMake(): string {
    return this.make;
  }

  getYear(): string {
    return this.year;
  }

  getType(): CarType {
    return this.type;
  }

  getEngineSize(): string {
    return this.engineSize;
  }

  getFuelType(): FuelType {
    return this.fuelType;
  }

  getTransmission(): Transmission {
    return this.transmission;
  }

  getHorsepower(): string {
    return this.horsepower;
  }

  getLastServiceDate(): string {
    return this.lastServiceDate;
  }

  getMileage(): string {
    return this.mileage;
  }

  getLicensePlate(): string {
    return this.licensePlate;
  }

  getPrice(): number {
    return this.price;
  }

  getCreatedAt(): string {
    return this.createdAt;
  }

  getUpdatedAt(): string {
    return this.updatedAt;
  }

  getLocation(): Location {
    return this.location;
  }

  getPictures(): Array<string> {
    return this.pictures;
  }

  getStatus(): Status {
    return this.status;
  }

  setId(id: string): void {
    this.id = id;
  }

  setModel(model: string): void {
    this.model = model;
  }

  setMake(make: string): void {
    this.make = make;
  }

  setYear(year: string): void {
    this.year = year;
  }

  setType(type: CarType): void {
    this.type = type;
  }

  setEngineSize(engineSize: string): void {
    this.engineSize = engineSize;
  }

  setFuelType(fuelType: FuelType): void {
    this.fuelType = fuelType;
  }

  setTransmission(transmission: Transmission): void {
    this.transmission = transmission;
  }

  setHorsepower(horsepower: string): void {
    this.horsepower = horsepower;
  }

  setLastServiceDate(lastServiceDate: string): void {
    this.lastServiceDate = lastServiceDate;
  }

  setMileage(mileage: string): void {
    this.mileage = mileage;
  }

  setLicensePlate(licensePlate: string): void {
    this.licensePlate = licensePlate;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  setCreatedAt(createdAt: string): void {
    this.createdAt = createdAt;
  }

  setUpdatedAt(updatedAt: string): void {
    this.updatedAt = updatedAt;
  }

  setLocation(location: Location): void {
    this.location = location;
  }

  setPictures(pictures: Array<string>) {
    this.pictures = pictures;
  }

  setStatus(status: Status) {
    this.status = status;
  }
}
