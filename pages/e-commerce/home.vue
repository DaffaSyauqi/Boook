<template>
  <div class="flex">
    <SidebarFilterProduct />

    <div class="flex-1 p-4">
      <div class="flex flex-wrap gap-4">
        <Drawer>
          <!-- DrawerTrigger -->
          <ProductCard v-for="i in 5" :key="i" />
          <!-- DrawerTrigger -->

          <DrawerContent>
            <ProductDetail />
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "e-commerce",
  auth: false,
});
</script>
