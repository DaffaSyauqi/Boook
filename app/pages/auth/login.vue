<template>
  <div
    class="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10"
  >
    <div class="w-full max-w-sm">
      <div class="flex flex-col gap-6">
        <form @submit.prevent="submitInput">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center gap-2">
              <NuxtLink
                href="/"
                class="flex flex-col items-center gap-2 font-medium"
              >
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-md"
                >
                  <Icon name="lucide-book-open" size="32" />
                </div>
              </NuxtLink>
              <h1 class="text-xl font-bold">Welcome to BookNest.</h1>
              <div class="text-center text-sm">
                Don't have an account?
                <NuxtLink
                  to="/auth/register"
                  class="underline underline-offset-4"
                >
                  Sign up
                </NuxtLink>
              </div>
            </div>
            <div class="flex flex-col gap-6">
              <div class="grid gap-2">
                <Label html-for="email">Email</Label>
                <FormError :errors="v$.email.$errors">
                  <BaseInput
                    v-model="loginInput.email"
                    :placeholder="'example@example.com'"
                    :type="'text'"
                  />
                </FormError>
              </div>
              <div class="grid gap-2">
                <Label html-for="password">Password</Label>
                <FormError :errors="v$.password.$errors">
                  <BaseInput
                    v-model="loginInput.password"
                    :placeholder="'********'"
                    :type="'password'"
                  />
                </FormError>
              </div>
              <BaseBtn
                @submit="submitInput"
                :label="'Sign In'"
                :loading="loading"
              />
            </div>
          </div>
        </form>
        <div
          class="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border"
        >
          <span class="relative z-10 bg-background px-2 text-muted-foreground">
            Or
          </span>
        </div>
        <Button variant="outline" class="w-full">
          <IconGoogle />
          Continue with Google
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

definePageMeta({
  layout: "auth",
  auth: false,
});

const loginInput = ref({
  email: "",
  password: "",
});

const rules = {
  email: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, loginInput);
const loading = ref(false);
const router = useRouter();

const userCookie = useCookie("user", {
  maxAge: 60 * 60 * 24 * 7,
});

onMounted(() => {
  loginInput.value.email = "";
  loginInput.value.password = "";
  loginInput.value.otpCode = "";
});

async function submitInput() {
  const isValid = v$.value.$validate();
  if (!isValid) return;

  try {
    loading.value = true;

    const response = await $fetch("/api/auth/login", {
      method: "POST",
      body: loginInput.value,
    });

    userCookie.value = JSON.stringify(response);
    router.push("/admin/dashboard");
  } catch (error) {
    showValidateError(error);
  } finally {
    loading.value = false;
  }
}
</script>
