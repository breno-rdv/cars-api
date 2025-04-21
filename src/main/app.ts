import express, { Router } from "express";
import { configDotenv } from "dotenv";
import { errorHandler } from "../presentation/middlewares/error-handler";
import carRoutes from "./routes/car-routes";
import { PostgresqlClient } from "../infra/config/postgresql/postgresql-client";

const port = process.env.PORT || 3000;

configDotenv();

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handling
app.use(errorHandler);

const router = Router();
carRoutes(router);
app.use("/api", router);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

process.on("SIGTERM", async () => {
  await PostgresqlClient.disconnect();
  process.exit(0);
});
