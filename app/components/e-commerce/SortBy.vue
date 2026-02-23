<template>
  <div class="w-full max-w-sm">
    <h2 class="text-lg font-bold tracking-tight">Sort by</h2>

    <div class="pt-2">
      <ButtonGroup class="w-full">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" class="flex-1 cursor-pointer">
              <span class="truncate">{{ sortLabel }}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            class="w-[var(--radix-dropdown-menu-trigger-width)]"
          >
            <DropdownMenuItem @click="setSort('createdAt')"
              >Default</DropdownMenuItem
            >
            <DropdownMenuItem @click="setSort('name')">Name</DropdownMenuItem>
            <DropdownMenuItem @click="setSort('category')"
              >Category</DropdownMenuItem
            >
            <DropdownMenuItem @click="setSort('price')">Price</DropdownMenuItem>
            <DropdownMenuItem @click="setSort('rating')"
              >Star Rating</DropdownMenuItem
            >
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button
              variant="outline"
              class="shrink-0 w-12 flex items-center justify-center gap-1 cursor-pointer"
            >
              <Icon
                :name="
                  filters.sortOrder === 'asc'
                    ? 'lucide-chevron-up'
                    : 'lucide-chevron-down'
                "
                class="h-4 w-4"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem @click="setOrder('asc')">
              <Icon name="lucide-chevron-up" class="mr-2" /> Asc
            </DropdownMenuItem>
            <DropdownMenuItem @click="setOrder('desc')">
              <Icon name="lucide-chevron-down" class="mr-2" /> Desc
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
const filters = useProductFilters();

type SortBy = "createdAt" | "name" | "category" | "price" | "rating";

const sortLabelMap: Record<SortBy, string> = {
  createdAt: "Default",
  name: "Name",
  category: "Category",
  price: "Price",
  rating: "Star Rating",
};

const sortLabel = computed(() => sortLabelMap[filters.sortBy]);

function setSort(value: SortBy) {
  filters.setSortBy(value);
}

function setOrder(value: "asc" | "desc") {
  filters.setSortOrder(value);
}
</script>
