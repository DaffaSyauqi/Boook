<template>
  <Navbar />

  <div class="flex flex-col items-center justify-center min-h-screen px-8">
    <Hero />
    <Services />
    <Sale />
    <Footer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: false,
});
</script>
