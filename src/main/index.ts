import express, { Router } from "express";
import { configDotenv } from "dotenv";
import carRoutes from "./routes/car-routes";

const app = express();
configDotenv();

const port = process.env.PORT || 3000;

const router = Router();

carRoutes(router);

app.use("api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
