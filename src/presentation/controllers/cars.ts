import { AddCar } from "../../domain/use-cases/add-car";
import BaseController from "../protocols/base-controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class CarsController implements BaseController {
  private readonly addCar: AddCar;

  public constructor(addCar: AddCar) {
    this.addCar = addCar;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    throw new Error(`NO response ${request}`);
  }
}
