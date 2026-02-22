<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"]
  header: string;
  subheader?: string;
}>();
</script>

<template>
  <div :class="cn('flex flex-col lg:flex-row items-center gap-6 lg:gap-12 text-center lg:text-left', props.class)">
    <h1 class="text-secondary bg-primary px-4 py-1 text-xl font-medium rounded-md">{{ props.header }}</h1>

    <p v-if="props.subheader" class="max-w-2xl lg:max-w-xl mx-auto lg:mx-0 text-muted-foreground">{{ props.subheader }}</p>
  </div>
</template>
