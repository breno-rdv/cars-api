import { CarsController } from "../../presentation/controllers/cars-controller";
import { CarRepository } from "../../infra/db/mongodb/car-repository";
import { CarUseCases } from "../../domain/usecases/car";

export const makeCarsController = (): CarsController => {
  const carRepository = new CarRepository();
  const carUseCases = new CarUseCases(carRepository);
  return new CarsController(carUseCases);
};
