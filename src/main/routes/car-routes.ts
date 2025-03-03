import { Router } from "express";
import { adaptRoute } from "../../infra/http/express-adapter";
import { makeCarsController } from "../factories/cars-controller";

export default function carRoutes(router: Router) {
  const controller = makeCarsController();

  router.post(
    "/cars",
    (req, _, next) => {
      req.params.action = "create";
      next();
    },
    adaptRoute(controller)
  );
  router.get(
    "/cars/:id",
    (req, _, next) => {
      req.params.action = "getOne";
      next();
    },
    adaptRoute(controller)
  );
  router.put(
    "/cars/:id",
    (req, _, next) => {
      req.params.action = "update";
      next();
    },
    adaptRoute(controller)
  );
  router.delete(
    "/cars/:id",
    (req, _, next) => {
      req.params.action = "delete";
      next();
    },
    adaptRoute(controller)
  );

  return router;
}
