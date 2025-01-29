import { Request, Response } from "express";
import BaseController from "../../presentation/protocols/base-controller";
import { HttpRequest, HttpResponse } from "../../presentation/protocols/http";

export class ExpressAdapter {
  private controller: BaseController;

  public constructor(controller: BaseController) {
    this.controller = controller;
  }

  public async adapt(req: Request, res: Response) {
    const request: HttpRequest = {
      body: req.body,
    };

    const httpResponse: HttpResponse = await this.controller.handle(request);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
}
