import { DbAddCar } from "../../data/use-cases/db-add-car";
import { CarRepository } from "../../infra/db/mongo/car-repository";
import { CarsController } from "../../presentation/controllers/cars";

export const makeCarsController = (): CarsController => {
  const repository = new CarRepository();
  const addCars = new DbAddCar(repository);
  const controller = new CarsController(addCars);
  return controller;
};
