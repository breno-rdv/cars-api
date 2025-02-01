import { CarType, FuelType, Transmission, Location, Status } from "./types";

export class Car {
  private _id: string;

  private _model: string;

  private _make: string;

  private _year: string;

  private _type: CarType;

  private _engineSize: string;

  private _fuelType: FuelType;

  private _transmission: Transmission;

  private _horsepower: string;

  private _lastServiceDate: string;

  private _mileage: string;

  private _licensePlate: string;

  private _price: number;

  private _createdAt: string;

  private _updatedAt: string;

  private _location: Location;

  private _pictures: Array<string>;

  private _status: Status;

  constructor(
    id: string,
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
    this._id = id;
    this._model = model;
    this._make = make;
    this._year = year;
    this._type = carType;
    this._engineSize = engineSize;
    this._fuelType = fuelType;
    this._transmission = transmission;
    this._horsepower = horsePower;
    this._lastServiceDate = lastServiceDate;
    this._mileage = mileage;
    this._licensePlate = licensePlate;
    this._price = price;
    this._createdAt = new Date().toISOString();
    this._updatedAt = "";
    this._location = location;
    this._pictures = [];
    this._status = status;
  }

  public get id() {
    return this._id;
  }

  public get model() {
    return this._model;
  }

  public get make() {
    return this._make;
  }

  public get year() {
    return this._year;
  }

  public get type() {
    return this._type;
  }

  public get engineSize() {
    return this._engineSize;
  }

  public get fuelType() {
    return this._fuelType;
  }

  public get transmission() {
    return this._transmission;
  }

  public get horsePower() {
    return this._horsepower;
  }

  public get lastServiceDate() {
    return this._lastServiceDate;
  }

  public get mileage() {
    return this._mileage;
  }

  public get licensePlate() {
    return this._licensePlate;
  }

  public get price() {
    return this._price;
  }

  public get location() {
    return this._location;
  }

  public get status() {
    return this._status;
  }

  public setUpdatedAt(date: string) {
    this._updatedAt = date;
  }

  public setPictures(pictures: Array<string>) {
    this._pictures = pictures;
  }
}
