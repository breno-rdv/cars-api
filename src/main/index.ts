import express, { Router } from "express";
import { configDotenv } from "dotenv";
import carRoutes from "./routes/car-routes";
import MongoDbClient from "../infra/db/mongo-client";

const app = express();
configDotenv();
app.use(express.json()); // body-parser is now deprecated as of Express 4.16+
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
const mongoClient = MongoDbClient.instance;

const router = Router();

carRoutes(router);

app.use("/api", router);

mongoClient
  .connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Error while connecting to mongo`, { err });
  });
