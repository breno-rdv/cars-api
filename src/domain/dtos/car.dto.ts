import { Car } from "../entities/car";

export type CreateCarDTO = Omit<Car, "id">;

export type UpdateCarDTO = Partial<CreateCarDTO>;
