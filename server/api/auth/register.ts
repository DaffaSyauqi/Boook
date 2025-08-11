import prisma from "~/utils/server.prisma";
import { hashPassword } from "./modules/bcrypt";
import { registerShema } from "./modules/validateUser";
import { generateOtp } from "./modules/generateOtpCode";
import { USER_EMAIL_TYPE } from "./modules/user.constant";
import { sendEmailVerification } from "./modules/sendEmailVerification";

export default defineEventHandler(async (event) => {
  const { email, password, name } = await readBody(event);

  const result = registerShema.safeParse({ email, password, name });

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
    where: { email },
  });

  if (userExists) {
    throw createError({
      statusCode: 400,
      message: "This email is already registered.",
    });
  }

  const otpCode = generateOtp();
  const hashPwd = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      isValidEmail: USER_EMAIL_TYPE.INVALID_EMAIL,
      otpCode,
      password: hashPwd,
    },
  });

  await sendEmailVerification(email, otpCode);

  return { message: "User created successfully", user, redirect: true };
});
