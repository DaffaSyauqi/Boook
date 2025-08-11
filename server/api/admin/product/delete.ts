import prisma from "~/utils/server.prisma";
import { deleteProductShema } from "./modules/validateProduct";

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);

  const result = deleteProductShema.safeParse({ id });

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

  const product = await prisma.product.delete({
    where: {
      id,
    },
  });

  return { message: "Product deleted successfully" };
});
