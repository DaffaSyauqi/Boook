<template>
  <div
    class="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10"
  >
    <div class="w-full max-w-sm">
      <div class="flex flex-col gap-6">
        <form>
          <FieldGroup>
            <div class="flex flex-col items-center gap-2 text-center">
              <NuxtLink
                to=""
                class="flex flex-col items-center gap-2 font-medium"
              >
                <div class="flex size-8 items-center justify-center rounded-md">
                  <Icon name="lucide-book-open" size="32" />
                </div>
                <span class="sr-only">BookNest</span>
              </NuxtLink>
              <h1 class="text-xl font-bold">Enter verification code</h1>
              <FieldDescription>
                We sent a 6-digit code to your email address
              </FieldDescription>
            </div>
            <Field>
              <FieldLabel for="otp" class="sr-only">
                Verification code
              </FieldLabel>
              <InputOTP
                v-model="otpInput"
                id="otp"
                :maxlength="6"
                required
                container-class="gap-4"
                class="justify-center"
              >
                <InputOTPGroup
                  class="gap-2.5 *:data-[slot=input-otp-slot]:h-16 *:data-[slot=input-otp-slot]:w-12 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border *:data-[slot=input-otp-slot]:text-xl"
                >
                  <InputOTPSlot :index="0" />
                  <InputOTPSlot :index="1" />
                  <InputOTPSlot :index="2" />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup
                  class="gap-2.5 *:data-[slot=input-otp-slot]:h-16 *:data-[slot=input-otp-slot]:w-12 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border *:data-[slot=input-otp-slot]:text-xl"
                >
                  <InputOTPSlot :index="3" />
                  <InputOTPSlot :index="4" />
                  <InputOTPSlot :index="5" />
                </InputOTPGroup>
              </InputOTP>
              <FieldDescription class="text-center">
                Didn't receive the code? <a href="#">Resend</a>
              </FieldDescription>
            </Field>
            <Field>
              <BaseBtn
                @click="verifyEmail"
                label="Verify your Email"
                :loading="loading"
              />
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: false,
});

const otpInput = ref("");
const loading = ref(false);

const router = useRouter();
const registerStore = useRegisterStore();
const { registerInput } = storeToRefs(registerStore);

watch(otpInput, (value) => {
  registerInput.value.otpCode = value;
});

async function verifyEmail() {
  const otp = registerInput.value.otpCode;

  if (otp.length !== 6 || !/^\d+$/.test(otp)) {
    return errorMsg("OTP harus 6 digit angka.");
  }

  loading.value = true;
  try {
    const response = await $fetch("/api/auth/email-verification", {
      method: "POST",
      body: registerInput.value,
    });

    const successMessage = response?.message ?? "Verification successfully!";

    successMsg(successMessage);

    setTimeout(() => {
      router.push("/auth/login");
    }, 1000);
  } catch (error: any) {
    const errorMessage = error?.data?.message ?? "Something went wrong";

    errorMsg(errorMessage);
  } finally {
    loading.value = false;
  }
}
</script>
