import BaseController from "../protocols/base-controller";
import { Request, Response } from "../protocols/http";

export class CarsController implements BaseController {
  handle(request: Request): Response {
    if (!request) throw new Error("Request required");
    throw new Error("Method not implemented.");
  }
}
