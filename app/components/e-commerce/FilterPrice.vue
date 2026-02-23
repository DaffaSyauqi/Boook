<template>
  <div class="w-full max-w-sm">
    <h2 class="text-md tracking-tight">Price</h2>
    <div class="py-2">
      <Slider
        v-model="localPrice"
        :min="0"
        :max="1000"
        :step="5"
        class="w-full cursor-pointer"
        @update:model-value="(value) => updatePriceRange(value as [number, number])"
      />
      <div class="flex justify-between text-sm text-muted-foreground pt-2">
        <span>Min: ${{ localPrice[0] }}</span>
        <span>Max: ${{ localPrice[1] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const filters = useProductFilters();

const localPrice = ref<[number, number]>([...filters.priceRange]);

const updatePriceRange = useDebounceFn((value: [number, number]) => {
  filters.setPriceRange(value[0], value[1]);
}, 500);
</script>

<style scoped></style>
