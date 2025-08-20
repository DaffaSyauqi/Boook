<template>
  <div class="flex">
    <SidebarFilterProduct />

    <div class="flex-1 p-4">
      <ProductCard />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "e-commerce",
  auth: false,
});
</script>
