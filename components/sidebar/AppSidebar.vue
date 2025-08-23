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
      <NavUser v-if="userCookie" />
      <AuthButton v-else />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>

<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar";

const userCookie: any = useCookie("user");

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
});

const data = {
  navMain: [
    {
      title: "Home",
      url: "/e-commerce/home",
      icon: "lucide-home",
    },
    {
      title: "Cart",
      url: "/e-commerce/cart",
      icon: "lucide-shopping-cart",
    },
    {
      title: "Settings",
      url: "/e-commerce/setting",
      icon: "lucide-settings",
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
