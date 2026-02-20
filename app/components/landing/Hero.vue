<script setup lang="ts">
import { Button } from "@/components/ui/button";

const data = {
  title: "Open Your World.",
  description:
    "A world of stories waiting to be yours. Browse our collection, and open your world with books delivered straight to your door.",
};
</script>

<template>
  <header
    class="container px-6 mx-auto py-10 flex flex-col lg:flex-row items-center justify-between"
  >
    <div class="w-full space-y-4">
      <div class="space-y-2">
        <h1 class="w-4/4 md:w-2/3 text-5xl md:text-6xl font-bold">
          {{ data.title }}
        </h1>

        <p class="w-6/7 md:w-4/9 text-muted-foreground">
          {{ data.description }}
        </p>
      </div>

      <NuxtLink to="/e-commerce/home">
        <Button
          size="lg"
          class="bg-secondary dark:bg-primary text-secondary-foreground hover:text-primary-foreground dark:text-primary-foreground cursor-pointer"
          >Shop Collection</Button
        >
      </NuxtLink>
    </div>

    <div class="mt-12 md:mt-0">
      <IconWorld class="w-96 h-96" />
    </div>
  </header>
</template>
