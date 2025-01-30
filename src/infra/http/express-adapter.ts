import { Request, Response } from "express";
import BaseController from "../../presentation/protocols/base-controller";
import { HttpRequest, HttpResponse } from "../../presentation/protocols/http";

export const adaptRoute = (controller: BaseController) => {
  return async (req: Request, res: Response) => {
    const request: HttpRequest = {
      body: req.body,
    };

    const httpResponse: HttpResponse = await controller.handle(request);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
