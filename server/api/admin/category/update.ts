import prisma from "~/utils/server.prisma";
import { categoryShema } from "./modules/validateCategory";

export default defineEventHandler(async (event) => {
  const { id, name } = await readBody(event);

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

  const category = await prisma.category.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });

  return { message: "Category updated successfully", category };
});
