import { Router } from "express";
import { adaptRoute } from "../../infra/http/express-adapter";
import { makeCarsController } from "../factories/cars-controller";

export default function carRoutes(router: Router) {
  const controller = makeCarsController();
  return router.post("/cars", adaptRoute(controller));
}
