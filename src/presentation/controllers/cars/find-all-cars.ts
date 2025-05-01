import { FindAllCars } from "../../../domain/use-cases/cars/find-all";
import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { ValidateRequestQuery } from "../../decorators/request-query-validation";
import { findAllCarsQuerySchema } from "../../validators/car.validator";

@ValidateRequestQuery(findAllCarsQuerySchema)
export class FindAllCarsController implements Controller {
  constructor(private readonly findAllCars: FindAllCars) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const {
      page = 1,
      limit = 10,
      sort,
      maker,
      model,
      year,
      minPrice,
      maxPrice,
    } = request.query;

    const cars = await this.findAllCars.invoke({
      page: Number(page),
      limit: Number(limit),
      sort,
      filters: {
        maker,
        model,
        year: year ? Number(year) : undefined,
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined,
      },
    });

    return {
      statusCode: 200,
      body: cars,
    };
  }
}
