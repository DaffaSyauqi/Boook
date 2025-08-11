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
                  <Icon name="lucide-box" size="32" />
                </div>
              </NuxtLink>
              <h1 class="text-xl font-bold">Welcome to CubeShop.</h1>
              <div class="text-center text-sm">
                Already have an account?
                <NuxtLink to="/auth/login" class="underline underline-offset-4">
                  Sign in
                </NuxtLink>
              </div>
            </div>
            <div class="flex flex-col gap-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-2">
                  <Label for="first-name">First name</Label>
                  <FormError :errors="v$.firstname.$errors">
                    <BaseInput
                      v-model="registerInput.firstname"
                      :placeholder="'John'"
                      :type="'text'"
                    />
                  </FormError>
                </div>
                <div class="grid gap-2">
                  <Label for="last-name">Last name</Label>
                  <FormError :errors="v$.lastname.$errors">
                    <BaseInput
                      v-model="registerInput.lastname"
                      :placeholder="'Doe'"
                      :type="'text'"
                    />
                  </FormError>
                </div>
              </div>
              <div class="grid gap-2">
                <Label html-for="email">Email</Label>
                <FormError :errors="v$.email.$errors">
                  <BaseInput
                    v-model="registerInput.email"
                    :placeholder="'example@example.com'"
                    :type="'text'"
                  />
                </FormError>
              </div>
              <div class="grid gap-2">
                <Label html-for="password">Password</Label>
                <FormError :errors="v$.password.$errors">
                  <BaseInput
                    v-model="registerInput.password"
                    :placeholder="'********'"
                    :type="'password'"
                  />
                </FormError>
              </div>
              <BaseBtn
                @submit="submitInput"
                :label="'Sign Up'"
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

const registerStore = useRegisterStore();
const { registerInput } = storeToRefs(registerStore);

const rules = {
  firstname: { required },
  lastname: { required },
  email: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, registerInput);
const loading = ref(false);
const router = useRouter();

onMounted(() => {
  registerInput.value.firstname = "";
  registerInput.value.lastname = "";
  registerInput.value.email = "";
  registerInput.value.password = "";
});

async function submitInput() {
  const isValid = v$.value.$validate();
  if (!isValid) return;

  try {
    loading.value = true;

    const payload = {
      ...registerInput.value,
      name: `${registerInput.value.firstname} ${registerInput.value.lastname}`,
    };

    delete payload.firstname;
    delete payload.lastname;

    const response = await $fetch("/api/auth/register", {
      method: "POST",
      body: payload,
    });

    loading.value = false;
    router.push("/auth/email-verification");
  } catch (error) {
    showValidateError(error);
  } finally {
    loading.value = false;
  }
}
</script>
