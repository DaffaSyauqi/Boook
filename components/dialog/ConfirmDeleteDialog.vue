<template>
  <Dialog :open="props.open" @update:open="emit('update:open', $event)">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogDescription>
          This action will permanently delete
          <b v-if="itemName">"{{ itemName }}"</b>. This action cannot be undone.
        </DialogDescription>
      </DialogHeader>

      <div class="flex justify-end gap-2 pt-4">
        <DialogClose>
          <BaseBtn :label="'Cancel'" variant="secondary" :loading="false" />
        </DialogClose>
        <BaseBtn
          :label="'Confirm'"
          variant="destructive"
          :loading="loading"
          @click="confirm"
        />
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  open: boolean;
  itemName?: string;
  itemId?: number;
}>();

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
  (e: "confirm", id: number): void;
}>();

const loading = ref(false);

async function confirm() {
  loading.value = true;
  await nextTick();
  if (props.itemId !== undefined) {
    emit("confirm", props.itemId);
  }
  loading.value = false;
}
</script>
