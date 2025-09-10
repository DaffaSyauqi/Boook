import prisma from "~/utils/server.prisma";

export default defineEventHandler(async (event) => {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      category: true,
      Images: true,
    },
  });

  return { message: "Product get successfully", products };
});
