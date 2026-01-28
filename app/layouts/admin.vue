<template>
  <SidebarProvider>
    <DashboardSidebar />
    <div class="flex flex-1 flex-col gap-4 p-4 pt-6">
      <slot></slot>
    </div>
  </SidebarProvider>
</template>

<script lang="ts"></script>
