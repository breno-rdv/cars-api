import { Car } from "../../../domain/entities/car";
import { UpdateCarDTO } from "../../../domain/dtos/car.dto";
import { UpdateCar } from "../../../domain/use-cases/cars/update";
import { CarRepository } from "../../../infra/repositories/car";

export class DbUpdateCar implements UpdateCar {
  private readonly carRepository: CarRepository;

  public constructor(carRepostirory: CarRepository) {
    this.carRepository = carRepostirory;
  }

  async invoke(id: string, car: UpdateCarDTO): Promise<Car> {
    const updated = await this.carRepository.update(id, car);
    if (!updated) {
      throw new Error("Car not found");
    }
    return updated;
  }
}
