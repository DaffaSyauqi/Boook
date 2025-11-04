import prisma from "~/utils/server.prisma";

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id);

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Invalid product ID" });
  }

  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
      images: true,
    },
  });

  if (!product) {
    throw createError({ statusCode: 404, statusMessage: "Product not found" });
  }

  return { message: "Product detail fetched successfully", product };
});
