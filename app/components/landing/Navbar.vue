<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-vue-next";

const mode = useColorMode();

const navigation = [
  {
    label: "About us",
    to: "#",
  },
  {
    label: "Services",
    to: "#",
  },
  {
    label: "Use Cases",
    to: "#",
  },
  {
    label: "Pricing",
    to: "#",
  },
  {
    label: "Blog",
    to: "#",
  },
];
</script>

<template>
  <nav
    class="flex justify-between items-center px-2 sm:px-6 lg:px-12 xl:px-20 py-4 sticky top-0 z-20 backdrop-blur-xl bg-(--background)/50 dark:bg-(--background)/70"
  >
    <NuxtLink to="/">
      <div class="flex items-center gap-2">
        <Avatar class="h-8 w-8 rounded-lg">
          <AvatarImage src="" />
          <AvatarFallback class="rounded-lg bg-primary text-primary-foreground">
            <Icon name="lucide-book-open" size="20" />
          </AvatarFallback>
        </Avatar>
        <div class="flex flex-col gap-0.5 leading-none">
          <span class="truncate font-medium"> Boook! </span>
        </div>
      </div>
    </NuxtLink>

    <NavbarMenu class="hidden lg:block" :navigation />

    <div class="flex items-center space-x-2">
      <Button
        variant="outline"
        @click="mode = mode === 'light' ? 'dark' : 'light'"
      >
        <Moon
          v-if="mode === 'light'"
          class="group-hover:text-secondary dark:group-hover:text-primary transition-all"
        />
        <Sun
          v-else
          class="group-hover:text-secondary dark:group-hover:text-primary transition-all"
        />
      </Button>

      <NuxtLink to="#">
        <Button
          variant="outline"
          class="hidden lg:block dark:hover:text-primary"
          >Request Quote</Button
        >
      </NuxtLink>

      <NavbarSheet class="lg:hidden" :navigation />
    </div>
  </nav>
</template>
