<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <SidebarMenuButton
        size="lg"
        class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <Avatar class="h-8 w-8 rounded-lg">
          <AvatarImage src="" />
          <AvatarFallback class="rounded-lg">B</AvatarFallback>
        </Avatar>
        <div class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-semibold">{{ name }}</span>
          <span class="truncate text-xs">{{ email }}</span>
        </div>
        <Icon
          name="lucide-chevrons-up-down"
          size="16"
          class="ml-auto text-sidebar-foreground"
        />
      </SidebarMenuButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-64" align="center">
      <DropdownMenuLabel class="font-normal flex">
        <div class="flex flex-col space-y-1">
          <p class="text-sm font-medium leading-none">{{ name }}</p>
          <p class="text-xs leading-none text-muted-foreground">
            {{ email }}
          </p>
        </div>
        <div class="ml-auto">
          <Button
            variant="outline"
            size="icon"
            class="group/toggle size-8"
            @click="
              colorMode.preference =
                colorMode.preference === 'light' ? 'dark' : 'light'
            "
          >
            <Icon v-show="!isDark" name="lucide-sun" />
            <Icon v-show="isDark" name="lucide-moon" />
            <span class="sr-only">Toggle theme</span>
          </Button>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Icon name="lucide-user" />
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem @click="logout()">
        <Icon name="lucide-log-out" />
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");
const rawUserCookie: any = useCookie("user");

const userCookie = computed(() => {
  return rawUserCookie.value || {};
});

const name = computed(() => userCookie.value?.data?.user?.name ?? "Guest");
const email = computed(
  () => userCookie.value?.data?.user?.email ?? "guest@guest.com"
);

function logout() {
  rawUserCookie.value = null;
  useRouter().push("/");
}
</script>
