import { z } from "zod";

export const createCarSchema = z.object({
  model: z.string().min(1, "Model is required"),
  maker: z.string().min(1, "Brand is required"),
  year: z
    .number()
    .min(new Date().getFullYear() - 20)
    .max(new Date().getFullYear() + 1),
  price: z.number().positive("Price must be positive"),
  color: z.string().min(1, "Color is required"),
  type: z.enum(["SUV", "SEDAN", "HATCHBACK", "PICKUP", "VAN", "SPORTS"]),
  engineSize: z.number().positive("Engine size must be positive"),
  fuelType: z.enum(["GASOLINE", "DIESEL", "ELECTRIC", "HYBRID"]),
  transmission: z.enum(["MANUAL", "AUTOMATIC"]),
  horsepower: z.number().positive("Horsepower must be positive"),
  lastServiceDate: z.string().datetime(),
  mileage: z.number().nonnegative("Mileage cannot be negative"),
  licensePlate: z.string().min(1, "License plate is required"),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
    address: z.string(),
  }),
  status: z.enum(["AVAILABLE", "RENTED", "MAINTENANCE", "SOLD"]),
  pictures: z.array(z.string().url()),
});

export const updateCarSchema = createCarSchema.partial();
