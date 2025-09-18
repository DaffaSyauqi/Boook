<template>
  <div class="w-full max-w-sm">
    <h2 class="text-md tracking-tight">Star Rating</h2>
    <div class="flex flex-wrap gap-1 pt-3">
      <Icon
        v-for="i in 5"
        :key="i"
        name="lucide-star"
        size="24"
        class="cursor-pointer transition-colors"
        :class="
          i <= selectedRating
            ? 'text-yellow-500 fill-yellow-500'
            : 'text-gray-300'
        "
        @click="setRating(i)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedRating = ref<number>(0);
function setRating(rating: number) {
  if (selectedRating.value === rating) {
    selectedRating.value = 0;
  } else {
    selectedRating.value = rating;
  }
}
</script>

<style scoped></style>
