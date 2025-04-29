import { FindCarById } from "../../../domain/use-cases/cars/find-by-id";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class FindCarByIdController implements Controller {
  constructor(private readonly findCarById: FindCarById) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { id } = request.params;

    const car = await this.findCarById.invoke(id);

    return {
      statusCode: 200,
      body: car,
    };
  }
}
