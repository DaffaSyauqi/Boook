<script setup lang="ts">
import type { Row } from "@tanstack/vue-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const props = defineProps<{
  row: Row<any>;
  showImage?: boolean;
}>();

const emit = defineEmits(["image", "edit", "delete"]);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        class="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
      >
        <Icon name="lucide-more-horizontal" class="h-4 w-4" />
        <span class="sr-only">Open menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-[160px]">
      <DropdownMenuItem v-if="showImage" @click="$emit('image', row.original)">
        Image
      </DropdownMenuItem>
      <DropdownMenuSeparator v-if="showImage" />
      <DropdownMenuItem @click="$emit('edit', row.original)">
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem @click="$emit('delete', row.original)">
        Delete
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
