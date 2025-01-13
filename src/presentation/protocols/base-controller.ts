import { Request, Response } from "./http";

export default interface BaseController {
  handle(request: Request): Response;
}
