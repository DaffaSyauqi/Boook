import prisma from "~/utils/server.prisma";
import { comparePasswords } from "./modules/bcrypt";
import { loginShema } from "./modules/validateUser";
import { USER_EMAIL_TYPE } from "./modules/user.constant";
import { signAccessToken, signRefreshToken } from "./modules/jwtToken";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  const result = loginShema.safeParse({ email, password });

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

  const userExists = await prisma.user.findUnique({
    where: { email, isValidEmail: USER_EMAIL_TYPE.VALID_EMAIL },
  });

  if (!userExists) {
    throw createError({
      statusCode: 422,
      message: "Email or Password invalid",
    });
  }

  const isMatchPassword = await comparePasswords(
    password,
    userExists?.password
  );

  if (isMatchPassword) {
    const [accessToken, refreshToken] = await Promise.all([
      signAccessToken(userExists?.id),
      signRefreshToken(userExists?.id),
    ]);

    const data = {
      token: {
        accessToken,
        refreshToken,
      },
      user: {
        id: userExists?.id,
        name: userExists?.name,
        email: userExists?.email,
      },
      isLoggedIn: true,
    };
    return { message: "User logged successfully", data };
  } else {
    throw createError({
      statusCode: 422,
      message: "Email or Password invalid",
    });
  }
});
