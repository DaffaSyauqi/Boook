<script setup lang="ts">
const logos = [
  "images/clients/amazon.png",
  "images/clients/dribbble.png",
  "images/clients/hubspot2.png",
  "images/clients/netflix.png",
  "images/clients/notion.png",
  "images/clients/zoom.png",
];
</script>

<template>
  <section class="container mx-auto px-6 py-10 w-full overflow-hidden">
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
      <NuxtImg
        v-for="(logo, index) in logos"
        :key="index"
        :src="logo"
        width="100"
        class="object-contain grayscale dark:brightness-100 dark:invert opacity-70 dark:opacity-100"
      />
    </div>
  </section>
</template>
