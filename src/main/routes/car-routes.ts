import { Router } from "express";
import { ExpressAdapter } from "../../infra/http/express-adapter";
import { makeCarsController } from "../factories/cars-controller";

export default function carRoutes(router: Router) {
  const controller = makeCarsController();
  const expressAdapter = new ExpressAdapter(controller);
  return router.post("/cars", expressAdapter.adapt.bind(controller.handle));
}
