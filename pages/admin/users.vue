<template>
  <div>
    <h2 class="text-3xl font-bold tracking-tight">Users</h2>

    <div class="pt-6">
      <DataTable :columns="columns" :data="users" column-key="email" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Users } from "@/types/users";
import { getColumns } from "@/components/users/usersColumn";

definePageMeta({ layout: "admin" });

const headers = useHeaders();
const columns = getColumns();
const users = ref<any[]>([]);

const { data, error } = await useFetch("/api/admin/users/get", {
  headers: {
    ...headers,
  },
});

if (error.value) {
  users.value = [];
} else {
  users.value = data.value?.users ?? [];
}
</script>
