<template>
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
          <h3 class="font-semibold text-base text-foreground">Blue Chair</h3>
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
          <h3 class="font-semibold text-base text-foreground">Black Chair</h3>
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
          <h3 class="font-semibold text-base text-foreground">Pink Chair</h3>
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
          <h3 class="font-semibold text-base text-foreground">White Chair</h3>
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
</template>
