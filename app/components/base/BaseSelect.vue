<template>
  <Select v-model="localValue">
    <SelectTrigger class="w-full">
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem
        v-for="item in options"
        :key="item[optionValue]"
        :value="item[optionValue]"
      >
        {{ item[optionLabel] }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string | number | null;
  placeholder?: string;
  options: any[];
  optionLabel: string;
  optionValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number | null): void;
}>();

const localValue = ref(props.modelValue);

watch(localValue, (val) => {
  emit("update:modelValue", val);
});

watch(
  () => props.modelValue,
  (val) => {
    if (val !== localValue.value) {
      localValue.value = val;
    }
  }
);
</script>
