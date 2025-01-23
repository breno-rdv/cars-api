import { AddCar } from "../../domain/use-cases/add-car";
import HttpServer from "../../infra/http/protocols/http-server";
import BaseController from "../protocols/base-controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class CarsController implements BaseController {
  private readonly addCar: AddCar;
  private readonly httpServer: HttpServer;

  public constructor(httpServer: HttpServer, addCar: AddCar) {
    this.httpServer = httpServer;
    this.addCar = addCar;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    throw new Error(`NO response ${request}`);
  }
}
