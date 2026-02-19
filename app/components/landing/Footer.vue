<script setup lang="ts"></script>

<template>
  <footer class="mx-auto container px-0 md:px-8 pt-5 md:pt-10 text-white">
    <div class="bg-secondary rounded-0 lg:rounded-t-3xl px-10 pt-10">
      <div
        class="py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center lg:items-start lg:justify-between"
      >
        <div class="flex items-center gap-2">
          <Avatar class="h-12 w-12 rounded-lg">
            <AvatarImage src="" />
            <AvatarFallback
              class="rounded-lg bg-primary text-primary-foreground"
            >
              <Icon name="lucide-book-open" size="24" />
            </AvatarFallback>
          </Avatar>
          <div class="flex flex-col gap-0.5 leading-none">
            <span class="truncate font-medium"> Boook! </span>
            <span class="text-sm text-muted-foreground">
              Open your world.
            </span>
          </div>
        </div>

        <div
          class="h-full flex flex-col items- lg:items-end justify-between gap-6 lg:gap-0"
        >
          <div
            class="flex flex-col lg:flex-row gap-4 text-sm text-muted-foreground"
          >
            <NuxtLink to="/e-commerce/home" class="hover:text-white transition">
              Shop
            </NuxtLink>
            <NuxtLink to="#best-seller" class="hover:text-white transition">
              Best Sellers
            </NuxtLink>
            <NuxtLink to="#special-offer" class="hover:text-white transition">
              Special Offers
            </NuxtLink>
          </div>
        </div>
      </div>

      <Separator class="bg-muted-foreground" />

      <div class="py-6 text-sm text-muted-foreground">
        <div
          class="flex flex-col sm:flex-row justify-between items-center gap-2"
        >
          <span>
            © {{ new Date().getFullYear() }} Boook! All Rights Reserved.
          </span>
          <div class="space-x-4">
            <NuxtLink to="https://github.com/DaffaSyauqi">
              <Button size="icon" class="cursor-pointer rounded-full bg-muted">
                <Icon
                  name="mdi:github"
                  size="24"
                  class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all"
                />
              </Button>
            </NuxtLink>

            <NuxtLink
              to="https://www.linkedin.com/in/muhammad-daffa-syauki-a56932392/"
            >
              <Button size="icon" class="cursor-pointer rounded-full bg-muted">
                <Icon
                  name="mdi:linkedin"
                  size="24"
                  class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all"
                />
              </Button>
            </NuxtLink>

            <NuxtLink to="https://www.instagram.com/daffasyauqi_12/">
              <Button size="icon" class="cursor-pointer rounded-full bg-muted">
                <Icon
                  name="mdi:instagram"
                  size="24"
                  class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all"
                />
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
