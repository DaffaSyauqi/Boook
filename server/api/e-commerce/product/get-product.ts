import prisma from "~/utils/server.prisma";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const category = query.category as string | undefined;
  const minPrice = query.minPrice
    ? parseFloat(query.minPrice as string)
    : undefined;
  const maxPrice = query.maxPrice
    ? parseFloat(query.maxPrice as string)
    : undefined;
  const rating = query.rating ? parseFloat(query.rating as string) : undefined;

  try {
    const whereClause: any = {};

    if (category) {
      whereClause.category = {
        is: { name: category },
      };
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      whereClause.price = {};
      if (minPrice !== undefined) whereClause.price.gte = minPrice;
      if (maxPrice !== undefined) whereClause.price.lte = maxPrice;
    }

    // if (rating !== undefined) {
    //   whereClause.rating = { gte: rating };
    // }

    const products = await prisma.product.findMany({
      where: Object.keys(whereClause).length > 0 ? whereClause : undefined,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: true,
        images: true,
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
