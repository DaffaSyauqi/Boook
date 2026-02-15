<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { Menu } from "lucide-vue-next";


defineProps<{
  navigation: {
    label: string;
    to: string;
  }[];
}>();
</script>

<template>
  <Sheet class="lg:hidden">
    <SheetTrigger asChild class="lg:hidden">
      <Button variant="outline" size="icon">
        <Menu />
      </Button>
    </SheetTrigger>

    <SheetContent  class="px-4 py-2">
      <Logo />
      <NavbarMenu :navigation orientation="vertical" class="flex-0" />

      <div class="mt-4">
        <Button class="w-full flex items-center">Request Quote</Button>
      </div>
    </SheetContent>
  </Sheet>
</template>
