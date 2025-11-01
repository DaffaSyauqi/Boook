<template>
  <div class="w-full max-w-sm">
    <h2 class="text-md tracking-tight">Star Rating</h2>
    <div class="flex flex-wrap gap-1 pt-3">
      <Icon
        v-for="rating in 5"
        :key="rating"
        name="lucide-star"
        size="24"
        class="cursor-pointer transition-colors"
        :class="
          rating <= filters.rating
            ? 'text-yellow-500 fill-yellow-500'
            : 'text-gray-300'
        "
        @click="filterRating(rating)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const filters = useProductFilters();

function filterRating(rating: number) {
  if (filters.rating === rating) {
    filters.setRating(0);
  } else {
    filters.setRating(rating);
  }
}
</script>

<style scoped></style>
