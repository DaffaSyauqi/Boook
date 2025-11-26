<template>
  <div class="w-full max-w-sm">
    <h2 class="text-lg font-bold tracking-tight">Categories</h2>
    <ScrollArea class="h-24 pr-6">
      <ul class="pt-3 space-y-1">
        <li
          class="pl-2 py-1 cursor-pointer text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
          @click="filters.setCategory(null)"
          :class="{
            'text-primary bg-secondary rounded-lg':
              filters.selectedCategory === null,
          }"
        >
          All
        </li>
        <li
          v-for="(category, index) in categories.map((cat) => cat.name)"
          :key="index"
          class="pl-2 py-1 cursor-pointer text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
          @click="filters.setCategory(category)"
          :class="{
            'text-primary bg-secondary rounded-lg':
              filters.selectedCategory === category,
          }"
        >
          {{ category }}
        </li>
      </ul>
    </ScrollArea>
  </div>
</template>

<script setup lang="ts">
const { categories, refresh } = useCategoryForm();
const filters = useProductFilters();
</script>

<style lang="scss" scoped></style>
