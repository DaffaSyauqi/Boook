<template>
  <div>
    <h2 class="text-3xl font-bold tracking-tight">Products</h2>

    <div class="pt-6">
      <DataTable :columns="columns" :data="data?.products" column-key="name">
        <template #actions>
          <Button @click="openAddDialog">Add Product</Button>
        </template>
      </DataTable>

      <ProductDialog
        v-model:open="dialogOpen"
        :product="selectedProduct"
        :key="selectedProduct?.id || 'new'"
        @submitted="handleSubmitted"
      />

      <ConfirmDeleteDialog
        v-model:open="deleteDialogOpen"
        :item-id="productToDelete?.id"
        :item-name="productToDelete?.name"
        @confirm="confirmDelete"
      />

      <ImageDialog
        v-model:open="imageDialogOpen"
        :product-id="selectedProduct?.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/product";
import ProductDialog from "@/components/product/ProductDialog.vue";
import { getColumns } from "@/components/product/productColumn";

definePageMeta({ layout: "admin" });

const props = defineProps<{
  product?: Product;
}>();
const headers = useHeaders();

const { data, refresh } = await useFetch("/api/admin/product/get", {
  headers: {
    ...headers,
  },
});

const selectedProduct = ref<Product | null>(null);
const dialogOpen = ref(false);
const productToDelete = ref<Product | null>(null);
const deleteDialogOpen = ref(false);
const imageDialogOpen = ref(false);

function openAddDialog() {
  selectedProduct.value = null;
  dialogOpen.value = true;
}

function editProduct(product: Product) {
  selectedProduct.value = product;
  dialogOpen.value = true;
}

function deleteProduct(product: Product) {
  productToDelete.value = product;
  deleteDialogOpen.value = true;
}

function imageProduct(product: Product) {
  selectedProduct.value = product;
  imageDialogOpen.value = true;
}

function handleSubmitted() {
  selectedProduct.value = null;
  dialogOpen.value = false;
  refresh();
}

const columns = getColumns(imageProduct, editProduct, deleteProduct);

async function confirmDelete() {
  try {
    if (!productToDelete.value) return;

    const response = await $fetch("/api/admin/product/delete", {
      headers: {
        ...headers,
      },
      method: "DELETE",
      body: { id: productToDelete.value.id },
    });

    successMsg(response?.message);
    refresh();
  } catch (error) {
    showValidateError(error);
  } finally {
    deleteDialogOpen.value = false;
    productToDelete.value = null;
  }
}
</script>
