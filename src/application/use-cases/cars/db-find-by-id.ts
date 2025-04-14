import { Car } from "../../../domain/entities/car";
import { FindCarById } from "../../../domain/use-cases/cars/find-by-id";
import { CarRepository } from "../../../infra/repositories/car";

export class DbFindCarById implements FindCarById {
  private readonly carRepository: CarRepository;

  public constructor(carRepostirory: CarRepository) {
    this.carRepository = carRepostirory;
  }

  async invoke(id: string): Promise<Car | null> {
    return await this.carRepository.findById(id);
  }
}
