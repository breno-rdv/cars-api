import { AddCar, AddCarModel } from "../../domain/use-cases/add-car";
import BaseController from "../protocols/base-controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class CarsController implements BaseController {
  private readonly addCar: AddCar;

  public constructor(addCar: AddCar) {
    this.addCar = addCar;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    console.log(request);
    const response = await this.addCar.invoke(request as AddCarModel);
    return {
      statusCode: 201,
      body: response,
    };
  }
}
