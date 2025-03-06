export interface DeleteCar {
  invoke(id: string): Promise<boolean>;
}
