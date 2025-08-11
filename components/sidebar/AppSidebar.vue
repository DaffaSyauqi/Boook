<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <SidebarLogo />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
      <NavSecondary :items="data.NavSecondary" class="mt-auto" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>

<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar";

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
});

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: "lucide-layout-dashboard",
    },
    {
      title: "Categories",
      url: "/admin/categories",
      icon: "lucide-layers",
    },
    {
      title: "Products",
      url: "/admin/products",
      icon: "lucide-shopping-bag",
    },
    {
      title: "Payments",
      url: "/admin/payments",
      icon: "lucide-dollar-sign",
    },
    {
      title: "Users",
      url: "/admin/users",
      icon: "lucide-users",
    },
  ],
  NavSecondary: [
    {
      title: "About",
      url: "/about",
      icon: "lucide-book-open",
    },
    {
      title: "Contact",
      url: "/contact",
      icon: "lucide-phone-call",
    },
  ],
};
</script>
