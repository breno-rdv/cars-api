import { HttpRequest, HttpResponse } from "./http";

export default interface BaseController {
  handle(request: HttpRequest): Promise<HttpResponse>;
}
