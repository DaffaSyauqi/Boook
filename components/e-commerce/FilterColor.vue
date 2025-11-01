<template>
  <div class="w-full max-w-sm">
    <h2 class="text-md tracking-tight">Color</h2>
    <div class="flex flex-wrap gap-1 pt-3">
      <button
        v-for="(hex, color) in colors"
        :key="color"
        :style="{ backgroundColor: hex }"
        class="w-6 h-6 rounded-full border border-muted transition-all"
        :class="{
          'ring-2 ring-primary scale-110': filters.selectedColor === color,
        }"
        @click="filterColor(color)"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
const filters = useProductFilters();

const colors: Record<string, string> = {
  Black: "#000000",
  White: "#ffffff",
  Gray: "#808080",
  Red: "#ff0000",
  Yellow: "#ffff00",
  Green: "#00ff00",
  Blue: "#0000ff",
};

function filterColor(color: string) {
  if (filters.selectedColor === color) {
    filters.setColor(null);
  } else {
    filters.setColor(color);
  }
}
</script>
