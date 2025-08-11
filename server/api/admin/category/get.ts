import prisma from "~/utils/server.prisma";

export default defineEventHandler(async (event) => {
  const categories = await prisma.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return { message: "Category get successfully", categories };
});
