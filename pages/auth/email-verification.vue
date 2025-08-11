<template>
  <div class="flex min-h-svh flex-col items-center justify-center gap-4">
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

watch(otpInput, (value: string[]) => {
  registerInput.value.otpCode = value.join("");
});

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
