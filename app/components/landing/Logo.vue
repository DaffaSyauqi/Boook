<script lang="ts" setup>
import { useColorMode } from "@vueuse/core";

const mode = useColorMode();
</script>

<template>
  <NuxtImg :src=" mode === 'light' ? 'images/logo.png' : 'images/logo-dark.png'" width="150" />
</template>
