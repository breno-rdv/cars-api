import { DeleteCar } from "../../../domain/use-cases/cars/delete";
import { CarRepository } from "../../../infra/repositories/car";

export class DbDeleteCar implements DeleteCar {
  private readonly carRepository: CarRepository;

  public constructor(carRepostirory: CarRepository) {
    this.carRepository = carRepostirory;
  }

  async invoke(id: string): Promise<boolean> {
    return await this.carRepository.delete(id);
  }
}
