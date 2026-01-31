import { defineStore } from "pinia";

export const useRegisterStore = defineStore("register-store", () => {
  const registerInput = ref({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    otpCode: "",
  });

  return { registerInput };
});
