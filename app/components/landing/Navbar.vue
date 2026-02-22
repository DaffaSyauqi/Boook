<template>
  <nav
    class="flex justify-between items-center px-8 md:px-16 py-4 sticky top-0 z-20 backdrop-blur-xl bg-(--background)/50 dark:bg-(--background)/70"
  >
    <NuxtLink to="/">
      <div class="flex items-center gap-2">
        <Avatar class="h-8 w-8 rounded-lg">
          <AvatarFallback class="rounded-lg bg-primary text-primary-foreground">
            <Icon name="lucide-book-open" size="20" />
          </AvatarFallback>
        </Avatar>
        <div class="flex flex-col gap-0.5 leading-none">
          <span class="truncate font-medium"> Boook! </span>
        </div>
      </div>
    </NuxtLink>

    <div class="flex items-center space-x-2">
      <NuxtLink to="/e-commerce/home">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button
                variant="secondary"
                size="icon"
                class="size-8 cursor-pointer"
              >
                <Icon name="lucide-shopping-cart" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Shop</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </NuxtLink>

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <Avatar class="h-8 w-8 rounded-lg cursor-pointer">
                    <AvatarImage src="" />
                    <AvatarFallback class="rounded-lg">
                      <Icon name="lucide-user" />
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Account</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-64" align="end">
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
          <NuxtLink to="/auth/login">
            <DropdownMenuItem>
              <Icon name="lucide-log-in" />
              Login
            </DropdownMenuItem>
          </NuxtLink>
          <NuxtLink to="/auth/register">
            <DropdownMenuItem>
              <Icon name="lucide-user-plus" />
              Register
            </DropdownMenuItem>
          </NuxtLink>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </nav>
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
</script>
