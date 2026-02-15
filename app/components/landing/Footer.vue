<script setup lang="ts"></script>

<template>
  <footer class="mx-auto container px-0 md:px-8 pt-5 md:pt-10 text-white">
    <div class="bg-secondary rounded-0 lg:rounded-t-3xl px-10 pt-10">
      <div class="flex justify-center lg:justify-start">
        <NuxtImg src="/images/logo-dark.png" alt="Logo" width="150" />
      </div>

      <div
        class="py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center lg:items-start lg:justify-between"
      >
        <div class="flex flex-col items-center lg:items-start gap-y-4">
          <SectionHeader header="Contact Info" />

          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <Icon name="mdi:email" size="20" />
              <span>info@positivus.com</span>
            </div>

            <div class="flex items-center space-x-2">
              <Icon name="mdi:phone" size="20" />
              <span>123-456-7890</span>
            </div>

            <div class="flex items-center space-x-2">
              <Icon name="mdi:location" size="20" />
              <div class="flex flex-col">
                <span>Apt. 883 3771 Brigid Isle,</span>
                <span>Schulistland, MO 21665-4924</span>
              </div>
            </div>
          </div>
        </div>

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
