import { Router } from "express";
import { ExpressAdapter } from "../../infra/http/express-adapter";
import { makeCarsController } from "../factories/cars-controller";

const expressAdapter = new ExpressAdapter(makeCarsController());
export default (router: Router) => {
  router.post("cars", expressAdapter.adapt);
};
