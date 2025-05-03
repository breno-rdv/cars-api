import { Router } from "express";
import { adaptRoute } from "../../infra/http/express-adapter";
import * as CarsController from "../factories/cars-controller";

export default function carRoutes(router: Router) {
  router.post("/cars", adaptRoute(CarsController.makeCreateCarController()));
  router.get("/cars/:id", adaptRoute(CarsController.makeFindByIdController()));
  router.delete(
    "/cars/:id",
    adaptRoute(CarsController.makeDeleteCarController())
  );

  return router;
}
