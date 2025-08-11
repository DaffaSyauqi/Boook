import prisma from "~/utils/server.prisma";
import { USER_EMAIL_TYPE } from "./modules/user.constant";

export default defineEventHandler(async (event) => {
  const { email, otpCode } = await readBody(event);

  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  if (userExists) {
    const existingOtpCode = userExists?.otpCode;

    if (parseInt(existingOtpCode) === parseInt(otpCode)) {
      const updatedUser = await prisma.user.update({
        where: {
          email,
        },
        data: {
          isValidEmail: USER_EMAIL_TYPE.VALID_EMAIL,
        },
      });
      return { message: "Email verified successfully", redirect: true };
    } else {
      throw createError({
        statusCode: 401,
        message: "Invalid OTP code",
      });
    }
  } else {
    throw createError({
      statusCode: 400,
      message: "Invalid email adress",
    });
  }
});
