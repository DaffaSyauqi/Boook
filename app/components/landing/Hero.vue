<template>
  <header
    class="min-h-screen container px-16 mx-auto py-8 flex flex-col lg:flex-row items-center justify-between"
  >
    <div
      class="w-full space-y-6 items-center lg:items-start text-center lg:text-left"
    >
      <div class="space-y-4">
        <h1 class="text-5xl md:text-7xl font-bold">
          {{ data.title }}
        </h1>

        <p class="md:w-4/5 text-muted-foreground text-center md:text-left">
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

<script setup lang="ts">
const data = {
  title: "Open Your World.",
  description:
    "A world of stories waiting to be yours. Browse our collection, and open your world with books delivered straight to your door.",
};
</script>
