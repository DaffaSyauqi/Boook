<template>
  <div class="w-full max-w-sm pt-6">
    <h2 class="text-lg font-bold tracking-tight">Categories</h2>
    <ScrollArea class="h-32 pr-6">
      <ul class="pt-3 space-y-1">
        <li
          v-for="(category, index) in categories.map((cat) => cat.name)"
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
</template>

<script setup lang="ts">
const { categories, refresh } = useCategoryForm();
const selectedCategory = ref("");
</script>

<style lang="scss" scoped></style>
