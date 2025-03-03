import express from "express";
import { errorHandler } from "../presentation/middlewares/error-handler";
import carRoutes from "./routes/car-routes";

const app = express();
app.use(express.json());

// Routes
carRoutes(app);

// Error handling
app.use(errorHandler);

export { app };
