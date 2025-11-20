<template>
  <!-- <div class="flex min-h-svh flex-col items-center justify-center gap-4">
    <h1 class="text-2xl font-bold">Email Verification</h1>
    <PinInput id="pin-input" v-model="otpInput" placeholder="○">
      <PinInputGroup class="gap-1">
        <template v-for="(id, index) in 6" :key="index">
          <PinInputSlot
            class="rounded-md border w-10 h-10 text-center text-lg"
            :index="index"
          />
          <template v-if="index !== 5">
            <PinInputSeparator>
              <span class="px-1 text-xl font-bold">-</span>
            </PinInputSeparator>
          </template>
        </template>
      </PinInputGroup>
    </PinInput>

    <div class="flex gap-2">
      <BaseBtn
        @click="verifyEmail"
        label="Verify your Email"
        :loading="loading"
      />
    </div>
  </div> -->

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

const otpInput = ref<string[]>([]);
const loading = ref(false);
const router = useRouter();
const registerStore = useRegisterStore();
const { registerInput } = storeToRefs(registerStore);

onMounted(() => {
  registerInput.value.otpCode = "";
});

async function verifyEmail() {
  try {
    loading.value = true;

    const response = await $fetch("/api/auth/email-verification", {
      method: "POST",
      body: registerInput.value,
    });

    loading.value = false;
    const successMessage =
      (response as { data?: { message?: string } })?.data?.message ||
      "Verification successfully!";

    successMsg(successMessage);

    setTimeout(() => {
      router.push("/auth/login");
    }, 1000);
  } catch (error: unknown) {
    loading.value = false;
    const errorMessage =
      (error as { data?: { message?: string } })?.data?.message ||
      "Something went wrong";

    errorMsg(errorMessage);
  }
}
</script>
