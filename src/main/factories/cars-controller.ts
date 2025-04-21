import { DbCreateCar } from "../../application/use-cases/cars/db-create";
import { CarRepositoryImpl } from "../../infra/repositories/car-impl";
import { CreateCarController } from "../../presentation/controllers/cars/create-car";

const carRepository = new CarRepositoryImpl();

export const makeCreateCarController = () => {
  const dbCreateCar = new DbCreateCar(carRepository);
  return new CreateCarController(dbCreateCar);
};
