import { Request, Response } from "express";

export interface BaseController {
  handle(request: HttpRequest): Promise<HttpResponse>;
}

export interface HttpRequest {
  body?: any;
  params?: any;
  query?: any;
}

export interface HttpResponse {
  statusCode: number;
  body: any;
}
