import { DbCreateCar } from "../../application/use-cases/cars/db-create";
import { DbFindCarById } from "../../application/use-cases/cars/db-find-by-id";
import { CarRepositoryImpl } from "../../infra/repositories/car-impl";
import { CreateCarController } from "../../presentation/controllers/cars/create-car";
import { FindCarByIdController } from "../../presentation/controllers/cars/find-by-id";

const carRepository = new CarRepositoryImpl();

export const makeCreateCarController = () => {
  const dbCreateCar = new DbCreateCar(carRepository);
  return new CreateCarController(dbCreateCar);
};

export const makeFindByIdController = () => {
  const dbFindById = new DbFindCarById(carRepository);
  return new FindCarByIdController(dbFindById);
};
