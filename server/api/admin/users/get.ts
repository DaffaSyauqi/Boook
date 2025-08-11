import prisma from "~/utils/server.prisma";

export default defineEventHandler(async (event) => {
  const users = await prisma.user.findMany();

  return { message: "Users get successfully", users };
});
