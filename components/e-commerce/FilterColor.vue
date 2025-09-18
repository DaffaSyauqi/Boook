<template>
  <div class="w-full max-w-sm">
    <h2 class="text-md tracking-tight">Color</h2>
    <div class="flex flex-wrap gap-1 pt-3">
      <button
        v-for="(color, index) in colors"
        :key="index"
        :style="{ backgroundColor: color }"
        class="w-6 h-6 rounded-full border border-muted transition-all"
        :class="{
          'ring-2 ring-primary scale-110': selectedColor === color,
        }"
        @click="setColor(color)"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
const colors = {
  Black: "#000000",
  White: "#ffffff",
  Gray: "#808080",
  Red: "#ff0000",
  Yellow: "#ffff00",
  Green: "#00ff00",
  Blue: "#0000ff",
};

const selectedColor = ref<string | null>(null);
function setColor(color: string) {
  if (selectedColor.value === color) {
    selectedColor.value = null;
  } else {
    selectedColor.value = color;
  }
}
</script>

<style scoped></style>
