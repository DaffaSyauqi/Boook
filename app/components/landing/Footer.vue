<script setup lang="ts"></script>

<template>
  <footer class="mx-auto container px-0 md:px-8 pt-5 md:pt-10 text-white">
    <div class="bg-secondary rounded-0 lg:rounded-t-3xl px-10 pt-10">
      <div
        class="py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center lg:items-start lg:justify-between"
      >
        <NuxtLink to="/">
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
            </div>
          </div>
        </NuxtLink>
        <div
          class="h-full flex flex-col items-center lg:items-end justify-between gap-6 lg:gap-0"
        >
          <div class="space-x-4">
            <Button size="icon" class="cursor-pointer rounded-full bg-muted">
              <Icon
                name="mdi:linkedin"
                size="24"
                class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all"
              />
            </Button>

            <Button size="icon" class="cursor-pointer rounded-full bg-muted">
              <Icon
                name="mdi:facebook"
                size="24"
                class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all"
              />
            </Button>

            <Button size="icon" class="cursor-pointer rounded-full bg-muted">
              <Icon
                name="mdi:twitter"
                size="24"
                class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all"
              />
            </Button>
          </div>
        </div>
      </div>

      <Separator class="bg-muted-foreground" />

      <div class="py-4">
        <h3 class="flex flex-col sm:flex-row space-x-1">
          <span>
            © {{ new Date().getFullYear() }}
            <NuxtLink
              to="https://www.figma.com/community/file/1230604708032389430"
              target="_blank"
              class="text-primary"
              >Positivus</NuxtLink
            >
            &
            <NuxtLink
              to="https://github.com/prpanto"
              target="_blank"
              class="text-transparent bg-clip-text bg-linear-to-r to-blue-600 from-sky-400"
              >Pro. Pantos</NuxtLink
            >.
          </span>
          <span>All Rights Reserved.</span>
        </h3>
      </div>
    </div>
  </footer>
</template>
