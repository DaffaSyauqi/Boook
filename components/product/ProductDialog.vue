<template>
  <BaseDialog
    :title="isEdit ? 'Edit Product' : 'Create Product'"
    :open="props.open"
    @update:open="emit('update:open', $event)"
  >
    <template #trigger>
      <slot name="trigger"></slot>
    </template>

    <div class="grid gap-4 py-4">
      <div class="grid items-center gap-4">
        <Label>Name</Label>
        <BaseInput v-model="productInput.name" :type="'text'" />
      </div>
      <div class="grid items-center gap-4">
        <Label>Color</Label>
        <BaseSelect
          v-model="productInput.color"
          :options="productColors.map((color) => ({ id: color, name: color }))"
          option-label="name"
          option-value="id"
          placeholder="Select Color"
        />
      </div>
      <div class="grid items-center gap-4">
        <Label>Price</Label>
        <BaseInput v-model="productInput.price" :type="'number'" />
      </div>
      <div class="grid items-center gap-4">
        <Label>Category</Label>
        <BaseSelect
          v-model="productInput.categoryId"
          :options="categories"
          option-label="name"
          option-value="id"
          placeholder="Select Category"
        />
      </div>
    </div>

    <template #footer>
      <DialogClose as-child>
        <Button type="button" variant="secondary">Cancel</Button>
      </DialogClose>
      <BaseBtn
        @click="submitInput"
        :loading="loading"
        :label="isEdit ? 'Update' : 'Create'"
      />
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import { useProductForm } from "@/composables/useProductForm";
import { useCategoryForm } from "@/composables/useCategoryForm";
import type { Product } from "@/types/product";

const props = defineProps<{
  product?: Product;
  open?: boolean;
}>();

const headers = useHeaders();

const emit = defineEmits(["submitted", "update:open"]);
const open = ref(false);

const productColors = [
  "Black",
  "White",
  "Gray",
  "Red",
  "Yellow",
  "Green",
  "Blue",
];

const { productInput, isEdit, loading } = useProductForm(props.product);
const { categories } = useCategoryForm();

async function submitInput() {
  try {
    loading.value = true;
    const endpoint = isEdit.value
      ? "/api/admin/product/update"
      : "/api/admin/product/create";

    const response = await $fetch(endpoint, {
      headers: {
        ...headers,
      },
      method: "POST",
      body: productInput.value,
    });

    productInput.value = {
      id: null,
      name: "",
      color: "",
      price: 0,
      categoryId: null,
    };
    emit("submitted");
    successMsg(response?.message);
    open.value = false;
  } catch (error) {
    showValidateError(error);
  } finally {
    loading.value = false;
  }
}
</script>
