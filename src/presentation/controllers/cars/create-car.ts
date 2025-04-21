import { CreateCar } from "../../../domain/use-cases/cars/create";
import { ValidateRequestBody } from "../../decorators/request-body-validation";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { createCarSchema } from "../../validators/car.validator";

@ValidateRequestBody(createCarSchema)
export class CreateCarController implements Controller {
  constructor(private readonly createCar: CreateCar) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const createdCar = await this.createCar.invoke(request.body);

    return {
      statusCode: 201,
      body: createdCar,
    };
  }
}
