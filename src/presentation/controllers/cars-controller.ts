import {
  BaseController,
  HttpRequest,
  HttpResponse,
} from "../protocols/controller";
import { CarUseCases } from "../../domain/usecases/car";
import { createCarSchema, updateCarSchema } from "../validators/car.validator";
import { ZodError } from "zod";

export class CarsController implements BaseController {
  constructor(private readonly carUseCases: CarUseCases) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      switch (request.params?.action) {
        case "create":
          const createData = createCarSchema.parse(request.body);
          const created = await this.carUseCases.createCar(createData);
          return { statusCode: 201, body: created };

        case "getOne":
          const car = await this.carUseCases.getCar(request.params.id);
          return { statusCode: 200, body: car };

        case "update":
          const updateData = updateCarSchema.parse(request.body);
          const updated = await this.carUseCases.updateCar(
            request.params.id,
            updateData
          );
          return { statusCode: 200, body: updated };

        case "delete":
          await this.carUseCases.deleteCar(request.params.id);
          return { statusCode: 204, body: null };

        default:
          return { statusCode: 400, body: { error: "Invalid action" } };
      }
    } catch (error) {
      if (error instanceof ZodError) {
        return { statusCode: 400, body: { errors: error.errors } };
      }
      if (error instanceof Error) {
        if (error.message === "Car not found") {
          return { statusCode: 404, body: { error: error.message } };
        }
        return { statusCode: 500, body: { error: error.message } };
      }
      return { statusCode: 500, body: { error: "An unknown error occurred" } };
    }
  }
}
