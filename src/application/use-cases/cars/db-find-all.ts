import { Car } from "../../../domain/entities/car";
import { FindAllCars } from "../../../domain/use-cases/cars/find-all";
import { CarRepository } from "../../../infra/repositories/car";

export class DbFindAllCars implements FindAllCars {
  private readonly carRepository: CarRepository;

  public constructor(carRepostirory: CarRepository) {
    this.carRepository = carRepostirory;
  }

  async invoke(): Promise<Car[]> {
    return await this.carRepository.findAll();
  }
}
