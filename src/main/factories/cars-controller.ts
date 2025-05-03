import { DbCreateCar } from "../../application/use-cases/cars/db-create";
import { DbFindAllCars } from "../../application/use-cases/cars/db-find-all";
import { DbFindCarById } from "../../application/use-cases/cars/db-find-by-id";
import { DbDeleteCar } from "../../application/use-cases/cars/db-delete";
import { DbUpdateCar } from "../../application/use-cases/cars/db-update";
import { CarRepositoryImpl } from "../../infra/repositories/car-impl";
import { CreateCarController } from "../../presentation/controllers/cars/create-car";
import { FindAllCarsController } from "../../presentation/controllers/cars/find-all-cars";
import { FindCarByIdController } from "../../presentation/controllers/cars/find-by-id";
import { DeleteCarController } from "../../presentation/controllers/cars/delete-car";
import { UpdateCarController } from "../../presentation/controllers/cars/update-car";

const carRepository = new CarRepositoryImpl();

export const makeCreateCarController = () => {
  const dbCreateCar = new DbCreateCar(carRepository);
  return new CreateCarController(dbCreateCar);
};

export const makeFindByIdController = () => {
  const dbFindById = new DbFindCarById(carRepository);
  return new FindCarByIdController(dbFindById);
};

export const makeFindAllCarsController = () => {
  const findAllCars = new DbFindAllCars(carRepository);
  return new FindAllCarsController(findAllCars);
};

export const makeDeleteCarController = () => {
  const dbDeleteCar = new DbDeleteCar(carRepository);
  return new DeleteCarController(dbDeleteCar);
};

export const makeUpdateCarController = () => {
  const dbUpdateCar = new DbUpdateCar(carRepository);
  return new UpdateCarController(dbUpdateCar);
};
