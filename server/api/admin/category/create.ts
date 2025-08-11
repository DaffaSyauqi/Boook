import prisma from "~/utils/server.prisma";
import { categoryShema } from "./modules/validateCategory";

export default defineEventHandler(async (event) => {
  const { name } = await readBody(event);

  const result = categoryShema.safeParse({ name });

  if (!result.success) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Validation failed",
        data: result.error.flatten(),
      })
    );
  }

  const categoryExists = await prisma.category.findUnique({
    where: { name },
  });

  if (categoryExists) {
    throw createError({
      statusCode: 400,
      message: "This category is already been taked.",
    });
  }

  const category = await prisma.category.create({
    data: {
      name,
    },
  });

  return { message: "Category created successfully", category };
});
