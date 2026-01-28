<template>
  <SidebarGroup>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem v-for="item in items" :key="item.title">
          <SidebarMenuButton :tooltip="item.title" as-child>
            <NuxtLink :to="item.url" class="">
              <span class="flex items-center">
                <Icon :name="item.icon" size="16" />
              </span>
              <span>{{ item.title }}</span>
            </NuxtLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>

<script setup lang="ts">
defineProps<{
  items: {
    title: string;
    url: string;
    icon: string;
  }[];
}>();
</script>
