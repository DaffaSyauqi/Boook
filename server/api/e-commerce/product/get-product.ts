import prisma from "~/utils/server.prisma";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const category = query.category as string | undefined;

  try {
    const products = await prisma.product.findMany({
      where: category
        ? {
            category: {
              is: {
                name: category,
              },
            },
          }
        : undefined,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: true,
        Images: true,
      },
    });

    return {
      message: "Product get successfully",
      products,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch products",
    });
  }
});
