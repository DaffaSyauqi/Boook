<template>
  <NuxtLayout>
    <NuxtPage />
    <Toaster :theme="colorMode.value" v-if="mounted" />
  </NuxtLayout>
</template>

<script setup>
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";

const colorMode = useColorMode();
const mounted = ref(false);
onMounted(() => (mounted.value = true));
</script>
