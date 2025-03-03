import { z } from "zod";

export const createCarSchema = z.object({
  model: z.string().min(1, "Model is required"),
  brand: z.string().min(1, "Brand is required"),
  year: z
    .number()
    .min(1900)
    .max(new Date().getFullYear() + 1),
  price: z.number().positive("Price must be positive"),
  color: z.string().min(1, "Color is required"),
});

export const updateCarSchema = createCarSchema.partial();
