import prisma from "~/utils/server.prisma";
import { productShema } from "./modules/validateProduct";
import slugify from "slugify";

export default defineEventHandler(async (event) => {
  const { name, price, categoryId } = await readBody(event);
  const slug = slugify(name, { lower: true, strict: true });

  const result = productShema.safeParse({ name, price, categoryId });

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

  const product = await prisma.product.create({
    data: {
      name,
      slug,
      price,
      categoryId,
    },
  });

  return { message: "Product created successfully", product };
});
