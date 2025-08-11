import { z } from "zod";

export const categoryShema = z.object({
  name: z.string({
    required_error: "Category Name is required",
    invalid_type_error: "Category Name must be string",
  }),
});

export const deleteCategoryShema = z.object({
  id: z.number().positive("Id should be a number"),
});
