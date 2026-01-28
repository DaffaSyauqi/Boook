<script setup lang="ts">
import type { Table } from "@tanstack/vue-table";

const icons = {
  first: "lucide-chevrons-left",
  prev: "lucide-chevron-left",
  next: "lucide-chevron-right",
  last: "lucide-chevrons-right",
};

defineProps<{
  table: Table<any>;
}>();
</script>

<template>
  <div class="flex items-center justify-between px-2">
    <div class="flex items-center ml-auto space-x-6 lg:space-x-8">
      <!-- Page size selector -->
      <div class="flex items-center space-x-2">
        <p class="text-sm font-medium">Rows per page</p>
        <Select
          :model-value="`${table.getState().pagination.pageSize}`"
          @update:model-value="(value: any) => table.setPageSize(Number(value))"
        >
          <SelectTrigger class="h-8 w-[70px]">
            <SelectValue
              :placeholder="`${table.getState().pagination.pageSize}`"
            />
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem
              v-for="pageSize in [10, 20, 30, 40, 50]"
              :key="pageSize"
              :value="`${pageSize}`"
            >
              {{ pageSize }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Page indicator -->
      <div
        class="flex w-[100px] items-center justify-center text-sm font-medium"
      >
        Page {{ table.getState().pagination.pageIndex + 1 }} of
        {{ table.getPageCount() }}
      </div>

      <!-- Pagination buttons -->
      <div class="flex items-center space-x-2">
        <Button
          variant="outline"
          class="hidden w-8 h-8 p-0 lg:flex"
          :disabled="!table.getCanPreviousPage()"
          @click="table.setPageIndex(0)"
        >
          <Icon :name="icons.first" class="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          class="w-8 h-8 p-0"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          <Icon :name="icons.prev" class="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          class="w-8 h-8 p-0"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          <Icon :name="icons.next" class="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          class="hidden w-8 h-8 p-0 lg:flex"
          :disabled="!table.getCanNextPage()"
          @click="table.setPageIndex(table.getPageCount() - 1)"
        >
          <Icon :name="icons.last" class="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
</template>
