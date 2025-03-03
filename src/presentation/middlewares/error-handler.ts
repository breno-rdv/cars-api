import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const errorHandler = (
  error: Error | ZodError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(error);

  if (error instanceof ZodError) {
    res.status(400).json({ errors: error.errors });
    return;
  }

  if (error.message === "Car not found") {
    res.status(404).json({ error: error.message });
    return;
  }

  res.status(500).json({ error: error.message });
  next();
};
