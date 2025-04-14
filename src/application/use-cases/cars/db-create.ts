import { Car } from "../../../domain/entities/car";
import { CreateCar } from "../../../domain/use-cases/cars/create";
import { CreateCarDTO } from "../../../domain/dtos/car.dto";
import { CarRepository } from "../../../infra/repositories/car";

export class DbCreateCar implements CreateCar {
  private readonly carRepository: CarRepository;

  public constructor(carRepostirory: CarRepository) {
    this.carRepository = carRepostirory;
  }

  async invoke(car: CreateCarDTO): Promise<Car> {
    return await this.carRepository.create(car);
  }
}
