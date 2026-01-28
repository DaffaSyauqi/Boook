<template>
  <Card
    class="w-[240px] bg-transparent py-0 border-none rounded-none shadow-none gap-0 cursor-pointer"
  >
    <!-- Gambar produk -->
    <CardHeader class="p-0">
      <img
        :src="product?.images?.[0]?.url"
        :alt="product?.name"
        class="rounded-xl object-cover w-[240px] h-[240px] border"
      />
    </CardHeader>

    <!-- Konten -->
    <CardContent class="p-0">
      <div class="flex items-center gap-4">
        <h3 class="font-semibold text-base text-foreground truncate">
          {{ product?.name }}
        </h3>
        <p class="text-lg font-bold text-foreground ml-auto">
          ${{ product?.price }}
        </p>
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
        <span class="text-xs text-muted-foreground">(100)</span>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
const props = defineProps<{
  product: any;
}>();
</script>
