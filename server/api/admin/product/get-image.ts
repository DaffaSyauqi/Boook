import prisma from "~/utils/server.prisma";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const productId = Number(query.productId);

  if (!productId) {
    throw createError({
      statusCode: 400,
      message: "Product ID is required",
    });
  }

  const images = await prisma.image.findMany({
    where: { productId },
    orderBy: { id: "asc" },
    select: { id: true, url: true },
  });

  return { images };
});
