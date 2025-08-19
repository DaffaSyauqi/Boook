<template>
  <div class="flex">
    <!-- Sidebar -->
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

    <!-- Main Content -->
    <div class="flex-1 p-4">
      <!-- Container -->
      <div class="flex flex-wrap gap-4">
        <Card
          class="w-[240px] bg-transparent py-0 border-none rounded-none shadow-none gap-0"
        >
          <!-- Gambar produk -->
          <CardHeader class="p-0">
            <img
              src="/public/chair1.jpg"
              alt="Product"
              class="rounded-xl object-cover w-[240px] h-[240px] rounded-none border"
            />
          </CardHeader>
          <!-- Konten -->
          <CardContent class="p-0">
            <div class="flex items-center">
              <h3 class="font-semibold text-base text-foreground">Red Chair</h3>
              <p class="text-lg font-bold text-foreground ml-auto">$349.99</p>
            </div>
            <!-- Rating -->
            <div class="flex items-center space-x-1 mt-1">
              <div class="flex">
                <Icon
                  name="lucide-star"
                  class="w-4 h-4 text-yellow-500 fill-yellow-500"
                  v-for="i in 4"
                  :key="i"
                />
                <Icon name="lucide-star" class="w-4 h-4 text-gray-300" />
              </div>
              <span class="text-xs text-muted-foreground">(213)</span>
            </div>
          </CardContent>
        </Card>
        <Card
          class="w-[240px] bg-transparent py-0 border-none rounded-none shadow-none gap-0"
        >
          <!-- Gambar produk -->
          <CardHeader class="p-0">
            <img
              src="/public/chair2.jpg"
              alt="Product"
              class="rounded-xl object-cover w-[240px] h-[240px] rounded-none border"
            />
          </CardHeader>
          <!-- Konten -->
          <CardContent class="p-0">
            <div class="flex items-center">
              <h3 class="font-semibold text-base text-foreground">
                Blue Chair
              </h3>
              <p class="text-lg font-bold text-foreground ml-auto">$249.99</p>
            </div>
            <!-- Rating -->
            <div class="flex items-center space-x-1 mt-1">
              <div class="flex">
                <Icon
                  name="lucide-star"
                  class="w-4 h-4 text-yellow-500 fill-yellow-500"
                  v-for="i in 4"
                  :key="i"
                />
                <Icon name="lucide-star" class="w-4 h-4 text-gray-300" />
              </div>
              <span class="text-xs text-muted-foreground">(213)</span>
            </div>
          </CardContent>
        </Card>
        <Card
          class="w-[240px] bg-transparent py-0 border-none rounded-none shadow-none gap-0"
        >
          <!-- Gambar produk -->
          <CardHeader class="p-0">
            <img
              src="/public/chair3.jpg"
              alt="Product"
              class="rounded-xl object-cover w-[240px] h-[240px] rounded-none border"
            />
          </CardHeader>
          <!-- Konten -->
          <CardContent class="p-0">
            <div class="flex items-center">
              <h3 class="font-semibold text-base text-foreground">
                Black Chair
              </h3>
              <p class="text-lg font-bold text-foreground ml-auto">$529.99</p>
            </div>
            <!-- Rating -->
            <div class="flex items-center space-x-1 mt-1">
              <div class="flex">
                <Icon
                  name="lucide-star"
                  class="w-4 h-4 text-yellow-500 fill-yellow-500"
                  v-for="i in 4"
                  :key="i"
                />
                <Icon name="lucide-star" class="w-4 h-4 text-gray-300" />
              </div>
              <span class="text-xs text-muted-foreground">(213)</span>
            </div>
          </CardContent>
        </Card>
        <Card
          class="w-[240px] bg-transparent py-0 border-none rounded-none shadow-none gap-0"
        >
          <!-- Gambar produk -->
          <CardHeader class="p-0">
            <img
              src="/public/chair4.jpg"
              alt="Product"
              class="rounded-xl object-cover w-[240px] h-[240px] rounded-none border"
            />
          </CardHeader>
          <!-- Konten -->
          <CardContent class="p-0">
            <div class="flex items-center">
              <h3 class="font-semibold text-base text-foreground">
                Pink Chair
              </h3>
              <p class="text-lg font-bold text-foreground ml-auto">$129.99</p>
            </div>
            <!-- Rating -->
            <div class="flex items-center space-x-1 mt-1">
              <div class="flex">
                <Icon
                  name="lucide-star"
                  class="w-4 h-4 text-yellow-500 fill-yellow-500"
                  v-for="i in 4"
                  :key="i"
                />
                <Icon name="lucide-star" class="w-4 h-4 text-gray-300" />
              </div>
              <span class="text-xs text-muted-foreground">(213)</span>
            </div>
          </CardContent>
        </Card>
        <Card
          class="w-[240px] bg-transparent py-0 border-none rounded-none shadow-none gap-0"
        >
          <!-- Gambar produk -->
          <CardHeader class="p-0">
            <img
              src="/public/chair.png"
              alt="Product"
              class="rounded-xl object-cover w-[240px] h-[240px] rounded-none border"
            />
          </CardHeader>
          <!-- Konten -->
          <CardContent class="p-0">
            <div class="flex items-center">
              <h3 class="font-semibold text-base text-foreground">
                White Chair
              </h3>
              <p class="text-lg font-bold text-foreground ml-auto">$129.99</p>
            </div>
            <!-- Rating -->
            <div class="flex items-center space-x-1 mt-1">
              <div class="flex">
                <Icon
                  name="lucide-star"
                  class="w-4 h-4 text-yellow-500 fill-yellow-500"
                  v-for="i in 4"
                  :key="i"
                />
                <Icon name="lucide-star" class="w-4 h-4 text-gray-300" />
              </div>
              <span class="text-xs text-muted-foreground">(213)</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "e-commerce",
  auth: false,
});

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
  "Table",
  "Chair",
  "Lamp",
  "Bookshelf",
  "Storage",
  "Shoe racks",
  "Bed frame",
];
const selectedCategory = ref(null);
</script>
