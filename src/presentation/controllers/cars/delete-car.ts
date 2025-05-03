import { DeleteCar } from "../../../domain/use-cases/cars/delete";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class DeleteCarController implements Controller {
  constructor(private readonly deleteCar: DeleteCar) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { id } = request.params;

    const deleted = await this.deleteCar.invoke(id);

    if (!deleted) {
      return {
        statusCode: 404,
        body: { message: "Car not found" },
      };
    }

    return {
      statusCode: 204,
      body: null,
    };
  }
}
