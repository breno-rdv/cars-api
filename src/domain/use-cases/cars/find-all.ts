import { Car } from "../../entities/car";

export interface FindAllCarsParams {
  page: number;
  limit: number;
  sort?: string;
  filters?: {
    maker?: string;
    model?: string;
    year?: number;
    minPrice?: number;
    maxPrice?: number;
  };
}

export interface FindAllCarsResult {
  cars: Car[];
  total: number;
  page?: number;
  totalPages?: number;
  hasMore?: boolean;
}

export interface FindAllCars {
  invoke(params: FindAllCarsParams): Promise<FindAllCarsResult>;
}
