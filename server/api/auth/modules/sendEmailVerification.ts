export async function sendEmailVerification(
  receiveEmail: string,
  otpCode: string
) {
  const nodeMailer = useNodeMailer();

  await nodeMailer.sendMail({
    subject: "Email Verification",
    text: "Hello, use this code to verify your email address : " + otpCode,
    to: receiveEmail,
  });
}
