<template>
  <div class="w-full max-w-sm">
    <h2 class="text-md tracking-tight pt-2">Price</h2>
    <div class="py-4">
      <Slider v-model="price" :min="0" :max="2000" :step="10" class="w-full" />
      <div class="flex justify-between text-sm text-muted-foreground pt-2">
        <span>Min: ${{ price[0] }}</span>
        <span>Max: ${{ price[1] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const price = ref([500, 2000]);
</script>

<style scoped></style>
