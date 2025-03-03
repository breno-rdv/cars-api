import { Car } from "../../entities/car";
import { CreateCarDTO, UpdateCarDTO } from "../../dtos/car.dto";
import { ICarRepository } from "../../repositories/car-repository";

export class CarUseCases {
  constructor(private readonly carRepository: ICarRepository) {}

  async createCar(data: CreateCarDTO): Promise<Car> {
    const car = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return await this.carRepository.create(car);
  }

  async getCar(id: string): Promise<Car> {
    const car = await this.carRepository.findById(id);
    if (!car) {
      throw new Error("Car not found");
    }
    return car;
  }

  async updateCar(id: string, data: UpdateCarDTO): Promise<Car> {
    const car = await this.carRepository.findById(id);
    if (!car) {
      throw new Error("Car not found");
    }

    const updatedCar = await this.carRepository.update(id, {
      ...data,
      updatedAt: new Date(),
    });

    if (!updatedCar) {
      throw new Error("Failed to update car");
    }

    return updatedCar;
  }

  async deleteCar(id: string): Promise<void> {
    const deleted = await this.carRepository.delete(id);
    if (!deleted) {
      throw new Error("Car not found");
    }
  }
}
