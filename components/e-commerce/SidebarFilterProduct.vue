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
    <FilterCategories />
    <Separator class="my-4" />

    <!-- Filter by -->
    <h2 class="text-lg font-bold tracking-tight">Filter by</h2>

    <!-- Price -->
    <FilterPrice />
    <Separator class="my-4" />

    <!-- Star Rating -->
    <FilterStarRating />
    <Separator class="my-4" />

    <Button> Clear all filters </Button>
  </div>
</template>

<script setup lang="ts"></script>
