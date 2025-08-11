import prisma from "~/utils/server.prisma";
import { deleteCategoryShema } from "./modules/validateCategory";

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);

  const result = deleteCategoryShema.safeParse({ id });

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

  const category = await prisma.category.delete({
    where: {
      id,
    },
  });

  return { message: "Category deleted successfully" };
});
