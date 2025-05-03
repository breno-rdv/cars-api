import { UpdateCar } from "../../../domain/use-cases/cars/update";
import { ValidateRequestBody } from "../../decorators/request-body-validation";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { updateCarSchema } from "../../validators/car.validator";

@ValidateRequestBody(updateCarSchema)
export class UpdateCarController implements Controller {
  constructor(private readonly updateCar: UpdateCar) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { id } = request.params;
    const carData = request.body;

    try {
      const updatedCar = await this.updateCar.invoke(id, carData);
      return {
        statusCode: 200,
        body: updatedCar,
      };
    } catch (error: any) {
      if (error.message === "Car not found") {
        return {
          statusCode: 404,
          body: { message: "Car not found" },
        };
      }
      throw error;
    }
  }
}
