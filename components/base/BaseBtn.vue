<template>
  <div>
    <Button type="submit" class="w-full" :disabled="loading" :variant="variant">
      <Loader2 v-show="loading" class="w-4 h-4 mr-2 animate-spin" />
      {{ label }}
    </Button>
  </div>
</template>

<script setup>
import { Loader2 } from "lucide-vue-next";

const props = defineProps(["label", "loading", "variant"]);
</script>
