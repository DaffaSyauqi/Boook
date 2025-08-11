import { z } from "zod";

export const registerShema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be string",
    })
    .email("Please provide a valid email address"),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be string",
    })
    .min(8, "Password must be at least 8 characters "),
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be string",
    })
    .min(3, "Name must be at least 3 characters "),
});

export const loginShema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be string",
    })
    .email("Please provide a valid email address"),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be string",
    })
    .min(8, "Password must be at least 8 characters "),
});

export const usersShema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be string",
    })
    .email("Please provide a valid email address"),
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be string",
    })
    .min(3, "Name must be at least 3 characters "),
  isValidEmail: z.number().positive("isValidEmail should be a greater than 0"),
});
