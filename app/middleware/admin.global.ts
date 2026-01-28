export default defineNuxtRouteMiddleware(async (to) => {
  const userCookie = useCookie("user");
  const headers = useHeaders();

  if (to.meta.auth === false) {
    return;
  }

  if (!userCookie.value) {
    return navigateTo("/auth/login");
  }

  try {
    const { error, data } = await useFetch("/api/auth/check-token", {
      headers: {
        Authorization: `Bearer ${userCookie.value?.data?.token?.accessToken}`,
      },
    });

    if (error.value || data.value?.message === "Invalid_token") {
      throw new Error("Token invalid");
    }
  } catch (error) {
    return navigateTo("/auth/login");
  }
});
