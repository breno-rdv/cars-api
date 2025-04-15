import { DbCreateCar } from "../../../application/use-cases/cars/db-create";
import { ValidateRequestBody } from "../../decorators/request-body-validation";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { createCarSchema } from "../../validators/car.validator";

@ValidateRequestBody(createCarSchema)
export class CreateCarController implements Controller {
  constructor(private readonly dbCreateCar: DbCreateCar) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const createdCar = await this.dbCreateCar.invoke(request.body);

    return {
      statusCode: 201,
      body: createdCar,
    };
  }
}
