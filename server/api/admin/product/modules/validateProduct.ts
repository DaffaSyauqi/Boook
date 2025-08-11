import { z } from "zod";

export const productShema = z.object({
  name: z.string({
    required_error: "Product Name is required",
    invalid_type_error: "Product Name must be string",
  }),
  color: z.string({
    required_error: "Color is required",
    invalid_type_error: "Color must be string",
  }),
  price: z.number().positive("Price should be a greater than 0"),
  categoryId: z.number().positive("Category should be a greater than 0"),
});

export const deleteProductShema = z.object({
  id: z.number().positive("Id should be a number"),
});
