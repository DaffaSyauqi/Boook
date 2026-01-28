<template>
  <Input
    v-model="localValue"
    :type="type ?? 'text'"
    :placeholder="placeholder"
    @input="onInput"
    v-bind="$attrs"
  />
</template>

<script setup>
const props = defineProps(["type", "placeholder", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const localValue = ref(props.modelValue);

function onInput(event) {
  let value = event.target.value;
  if (props.type === "number") {
    value = value === "" ? "" : Number(value);
  }
  localValue.value = value;
  emit("update:modelValue", value);
}

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
