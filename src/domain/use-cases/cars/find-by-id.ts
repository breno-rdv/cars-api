import { Car } from "../../entities/car";

export interface FindCarById {
  invoke(id: string): Promise<Car>;
}
