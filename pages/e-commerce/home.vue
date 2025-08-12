<template>
  <div
    class="flex flex-col bg-secondary w-[256px] h-full border border-secondary border-[1px] p-6"
  >
    <div class="relative w-full max-w-sm">
      <span
        class="absolute inset-y-0 left-0 flex items-center justify-center pl-3"
      >
        <Icon name="lucide-search" class="text-muted-foreground" />
      </span>

      <Input id="search" type="text" placeholder="Search" class="pl-10" />
    </div>
    <div class="w-full max-w-sm pt-6">
      <h2 class="text-lg font-bold tracking-tight">Categories</h2>
    </div>
    <Separator class="my-4" />
    <div class="w-full max-w-sm">
      <h2 class="text-lg font-bold tracking-tight">Filter by</h2>
      <h2 class="text-md tracking-tight pt-2">Price</h2>
    </div>
    <Separator class="my-4" />
    <div class="w-full max-w-sm">
      <h2 class="text-md tracking-tight pt-2">Color</h2>
    </div>
    <Separator class="my-4" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "e-commerce",
  auth: false,
});

const modelValue = ref([50]);
</script>
