<template>
  <div class="flex">
    <SidebarFilterProduct />

    <div class="flex-1 p-4">
      <Drawer v-model:open="isDrawerOpen">
        <div class="flex flex-wrap gap-4">
          <DrawerTrigger
            v-for="product in data?.products"
            :key="product.id"
            as-child
          >
            <ProductCard
              :product="product"
              @click="onSelectProduct(product.id)"
            />
          </DrawerTrigger>
        </div>

        <DrawerContent class="focus-visible:outline-none focus:outline-none">
          <ProductDetail :cardData="selectedProduct" />
        </DrawerContent>
      </Drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

definePageMeta({
  layout: "e-commerce",
  auth: false,
});

const headers = useHeaders();
const isDrawerOpen = ref(false);
const selectedProduct = ref<any>(null);

const filters = useProductFilters();
const baseUrl = "/api/e-commerce/product/get-product";

const queryParams = computed(() => ({
  category: filters.selectedCategory || undefined,
  minPrice: filters.priceRange[0],
  maxPrice: filters.priceRange[1],
  rating: filters.rating > 0 ? filters.rating : undefined,
}));

const { data, refresh } = await useFetch(baseUrl, {
  params: queryParams,
  immediate: true,
});

async function onSelectProduct(id: number) {
  const { data: detail } = await useFetch(`/api/e-commerce/product/${id}`);
  selectedProduct.value = detail.value?.product || null;
  isDrawerOpen.value = true;
}
</script>
