<script setup lang="ts">
import { Button } from "@/components/ui/button";

const data = {
  title: "Navigating the digital landscape for success",
  description:
    "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
  image: "illustration/hero.png",
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

        <p class="w-5/6 md:w-4/9 text-muted-foreground">
          {{ data.description }}
        </p>
      </div>

      <NuxtLink to="#">
        <Button
          size="lg"
          class="bg-secondary dark:bg-primary text-secondary-foreground hover:text-primary-foreground dark:text-primary-foreground cursor-pointer"
          >Book Consultation</Button
        >
      </NuxtLink>
    </div>

    <div class="mt-12 md:mt-0">
      <NuxtImg
        :src="data.image"
        alt="Illustration"
        width="100%"
        class="object-contain dark:invert"
      />
    </div>
  </header>
</template>
