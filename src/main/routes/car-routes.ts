import { Router } from "express";
import { ExpressAdapter } from "../../infra/http/express-adapter";
import { makeCarsController } from "../factories/cars-controller";

const expressAdapter = new ExpressAdapter(makeCarsController());

export default function carRoutes(router: Router) {
  return router.post("cars", expressAdapter.adapt);
}
