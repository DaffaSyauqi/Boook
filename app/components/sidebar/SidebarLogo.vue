<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg" as-child>
        <NuxtLink to="/">
          <div class="flex items-center gap-2">
            <Avatar class="h-8 w-8 rounded-lg">
              <AvatarImage src="" />
              <AvatarFallback
                class="rounded-lg bg-primary text-primary-foreground"
              >
                <Icon name="lucide-book-open" size="20" />
              </AvatarFallback>
            </Avatar>
            <div class="flex flex-col gap-0.5 leading-none">
              <span class="truncate font-medium"> Boook! </span>
            </div>
          </div>
        </NuxtLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</template>

<script setup lang="ts"></script>
