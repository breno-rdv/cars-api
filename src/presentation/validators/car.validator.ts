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

export const findAllCarsQuerySchema = z
  .object({
    page: z
      .string()
      .optional()
      .transform((val) => (val ? parseInt(val) : 1)),
    limit: z
      .string()
      .optional()
      .transform((val) => (val ? parseInt(val) : 10)),
    sort: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    year: z
      .string()
      .optional()
      .transform((val) => (val ? parseInt(val) : undefined)),
    minPrice: z
      .string()
      .optional()
      .transform((val) => (val ? parseFloat(val) : undefined)),
    maxPrice: z
      .string()
      .optional()
      .transform((val) => (val ? parseFloat(val) : undefined)),
  })
  .refine(
    (data) => {
      if (data.minPrice && data.maxPrice) {
        return data.minPrice <= data.maxPrice;
      }
      return true;
    },
    {
      message: "minPrice must be less than or equal to maxPrice",
    }
  );
