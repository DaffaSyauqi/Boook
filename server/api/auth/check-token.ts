import { verifyToken } from "#server/api/auth/modules/jwtToken";
import { s } from "vue-router/dist/router-CWoNjPRp.mjs";

export default defineEventHandler(async (event) => {
  const authHeader = getHeader(event, "authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid authorization header",
    });
  }

  const accessToken: any = authHeader.split(" ")[1];

  try {
    const payload = await verifyToken(accessToken);
    return { message: "Token Valid", payload };
  } catch (err) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid access token",
    });
  }
});
