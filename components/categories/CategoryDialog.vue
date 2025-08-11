<template>
  <BaseDialog
    :title="isEdit ? 'Edit Category' : 'Create Category'"
    :open="props.open"
    @update:open="emit('update:open', $event)"
  >
    <template #trigger>
      <slot name="trigger"></slot>
    </template>

    <div class="grid gap-4 py-4">
      <div class="grid items-center gap-4">
        <Label>Name</Label>
        <BaseInput v-model="categoryInput.name" :type="'text'" />
      </div>
    </div>

    <template #footer>
      <DialogClose as-child>
        <Button type="button" variant="secondary">Close</Button>
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
import { useCategoryForm } from "@/composables/useCategoryForm";
import type { Category } from "@/types/category";

const props = defineProps<{
  category?: Category;
  open?: boolean;
}>();

const headers = useHeaders();

const emit = defineEmits(["submitted", "update:open"]);
const open = ref(false);

const { categoryInput, isEdit, loading } = useCategoryForm(props.category);

async function submitInput() {
  try {
    loading.value = true;
    const endpoint = isEdit.value
      ? "/api/admin/category/update"
      : "/api/admin/category/create";

    const response = await $fetch(endpoint, {
      headers: {
        ...headers,
      },
      method: "POST",
      body: categoryInput.value,
    });

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
