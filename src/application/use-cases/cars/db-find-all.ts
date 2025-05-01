import {
  FindAllCars,
  FindAllCarsParams,
  FindAllCarsResult,
} from "../../../domain/use-cases/cars/find-all";
import { CarRepository } from "../../../infra/repositories/car";

export class DbFindAllCars implements FindAllCars {
  private readonly carRepository: CarRepository;

  public constructor(carRepostirory: CarRepository) {
    this.carRepository = carRepostirory;
  }

  async invoke(params: FindAllCarsParams): Promise<FindAllCarsResult> {
    const { cars, total } = await this.carRepository.findAll(params);

    const totalPages = Math.ceil(total / params.limit);
    const hasMore = params.page < totalPages;

    return {
      cars,
      total,
      page: params.page,
      totalPages,
      hasMore,
    };
  }
}
