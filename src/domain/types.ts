export enum Transmission {
  MANUAL,
  AUTOMATIC,
}

export enum FuelType {
  HIBRID,
  FLEX,
  GAS,
  ETHANOL,
}

export enum CarType {
  CARS,
  VANS,
  MOTORCYCLE,
}

export enum Status {
  AVAILABLE,
  SOLD,
}

export interface Location {
  address: string;
  number: number;
  city: string;
  state: string;
  zipcode: number;
}
