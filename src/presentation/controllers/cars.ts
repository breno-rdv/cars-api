import { AddCar } from "../../domain/use-cases/add-car";
import BaseController from "../protocols/base-controller";
import { Request, Response } from "../protocols/http";

export class CarsController implements BaseController {
  private readonly addCar: AddCar;

  public constructor(addCar: AddCar) {
    this.addCar = addCar;
  }

  handle(request: Request): Response {
    if (!request) throw new Error("Request required");
    throw new Error("Method not implemented.");
  }
}
