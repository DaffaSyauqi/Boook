<template>
  <div
    class="flex flex-col w-[256px] max-w-[256px] h-screen p-6 border border-secondary border-[1px] sticky top-0"
  >
    <!-- Search -->
    <div class="relative w-full max-w-sm">
      <span
        class="absolute inset-y-0 left-0 flex items-center justify-center pl-3"
      >
        <Icon name="lucide-search" class="w-5 h-5 text-muted-foreground" />
      </span>
      <Input id="search" type="text" placeholder="Search" class="pl-10" />
    </div>

    <!-- Categories -->
    <div class="w-full max-w-sm pt-6">
      <h2 class="text-lg font-bold tracking-tight">Categories</h2>
      <ScrollArea class="h-48 pr-6">
        <ul class="pt-3 space-y-1">
          <li
            v-for="(category, index) in categories"
            :key="index"
            class="pl-2 py-1 cursor-pointer text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
            @click="selectedCategory = category"
            :class="{
              'text-primary bg-secondary rounded-lg':
                selectedCategory === category,
            }"
          >
            {{ category }}
          </li>
        </ul>
      </ScrollArea>
    </div>
    <Separator class="my-4" />

    <!-- Filter by -->
    <div class="w-full max-w-sm">
      <h2 class="text-lg font-bold tracking-tight">Filter by</h2>

      <!-- Price -->
      <h2 class="text-md tracking-tight pt-2">Price</h2>
      <div class="py-4">
        <Slider
          v-model="price"
          :min="0"
          :max="2000"
          :step="10"
          class="w-full"
        />
        <div class="flex justify-between text-sm text-muted-foreground pt-2">
          <span>Min: ${{ price[0] }}</span>
          <span>Max: ${{ price[1] }}</span>
        </div>
      </div>
    </div>
    <Separator class="my-4" />

    <!-- Color -->
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
          @click="selectedColor = color"
        ></button>
      </div>
    </div>
    <Separator class="my-4" />
  </div>
</template>

<script setup lang="ts">
const price = ref([500, 2000]);
const colors = [
  "#000000",
  "#ffffff",
  "#888888",
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ff9900",
];
const selectedColor = ref(null);

const categories = [
  "All",
  "Table",
  "Chair",
  "Lamp",
  "Bookshelf",
  "Storage",
  "Shoe racks",
  "Bed frame",
];
const selectedCategory = ref("All");
</script>
