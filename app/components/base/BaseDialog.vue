<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>

    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{{ title }}</DialogTitle>
        <DialogDescription>{{ title }}</DialogDescription>
      </DialogHeader>

      <slot />

      <DialogFooter>
        <slot name="footer" />
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
