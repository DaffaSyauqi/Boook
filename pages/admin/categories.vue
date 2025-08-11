<template>
  <div>
    <h2 class="text-3xl font-bold tracking-tight">Category</h2>

    <div class="pt-6">
      <DataTable :columns="columns" :data="data?.categories" column-key="name">
        <template #actions>
          <Button @click="openAddDialog">Add Category</Button>

          <CategoryDialog
            v-model:open="dialogOpen"
            :category="selectedCategory"
            :key="selectedCategory?.id || 'new'"
            @submitted="handleSubmitted"
          />

          <ConfirmDeleteDialog
            v-model:open="deleteDialogOpen"
            :item-id="categoryToDelete?.id"
            :item-name="categoryToDelete?.name"
            @confirm="confirmDelete"
          />
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from "@/types/category";
import CategoryDialog from "@/components/categories/CategoryDialog.vue";
import { getColumns } from "@/components/categories/categoryColumn";

definePageMeta({ layout: "admin" });

const headers = useHeaders();

const { data, refresh } = await useFetch("/api/admin/category/get", {
  headers: {
    ...headers,
  },
});

const selectedCategory = ref<Category | null>(null);
const dialogOpen = ref(false);
const categoryToDelete = ref<Category | null>(null);
const deleteDialogOpen = ref(false);

function openAddDialog() {
  selectedCategory.value = null;
  dialogOpen.value = true;
}

function editCategory(category: Category) {
  selectedCategory.value = category;
  dialogOpen.value = true;
}

function deleteCategory(category: Category) {
  categoryToDelete.value = category;
  deleteDialogOpen.value = true;
}

function handleSubmitted() {
  selectedCategory.value = null;
  dialogOpen.value = false;
  refresh();
}

const columns = getColumns(editCategory, deleteCategory);

async function confirmDelete() {
  try {
    if (!categoryToDelete.value) return;

    const response = await $fetch("/api/admin/category/delete", {
      headers: {
        ...headers,
      },
      method: "DELETE",
      body: { id: categoryToDelete.value.id },
    });

    successMsg(response?.message);
    refresh();
  } catch (error) {
    showValidateError(error);
  } finally {
    deleteDialogOpen.value = false;
    categoryToDelete.value = null;
  }
}
</script>
