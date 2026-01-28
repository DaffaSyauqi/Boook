<script setup lang="ts">
import type { Column } from "@tanstack/vue-table";
import { cn } from "@/lib/utils";

interface Props {
  column: Column<any, any>;
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div
    v-if="column.getCanSort()"
    :class="cn('flex items-center space-x-2', $attrs.class ?? '')"
  >
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost"
          size="sm"
          class="-ml-3 h-8 data-[state=open]:bg-accent"
        >
          <span>{{ title }}</span>
          <Icon
            name="lucide-arrow-down"
            v-if="column.getIsSorted() === 'desc'"
            class="w-4 h-4 ml-2"
          />
          <Icon
            name="lucide-arrow-up"
            v-else-if="column.getIsSorted() === 'asc'"
            class="w-4 h-4 ml-2"
          />
          <Icon name="lucide-chevrons-up-down" v-else class="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem @click="column.toggleSorting(false)">
          <Icon name="lucide-arrow-up" class="mr-2 h-4 w-4 text-gray-500" />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem @click="column.toggleSorting(true)">
          <Icon name="lucide-arrow-down" class="mr-2 h-4 w-4 text-gray-500" />
          Desc
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

  <div v-else :class="$attrs.class">
    {{ title }}
  </div>
</template>
