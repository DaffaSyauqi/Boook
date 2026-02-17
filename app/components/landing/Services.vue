<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const data = {
  header: "Services",
  subheader:
    "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:",
  image: "images/illustrations/service-image.png",
  services: [
    {
      cardClass: "bg-muted dark:bg-muted-foreground",
      titleClass: "bg-primary dark:text-secondary",
      title: "Search engine optimization",
      linkButtonClass:
        "bg-secondary text-primary hover:bg-secondary hover:text-primary",
      linkTextClass: "dark:text-secondary",
      image: "images/illustrations/image-1.png",
    },
    {
      cardClass: "bg-primary",
      titleClass: "bg-muted",
      title: "Pay-per-click advertising",
      linkButtonClass:
        "bg-secondary text-primary hover:bg-secondary hover:text-primary",
      linkTextClass: "dark:text-secondary",
      image: "images/illustrations/image-2.png",
    },
    {
      cardClass: "bg-secondary",
      titleClass: "bg-muted dark:bg-muted-foreground dark:text-secondary",
      title: "Social Media Marketing",
      linkButtonClass:
        "bg-muted dark:bg-primary text-secondary hover:bg-secondary hover:text-primary dark:hover:text-secondary",
      linkTextClass: "text-muted dark:text-muted-foreground",
      image: "images/illustrations/image-3.png",
    },
    {
      cardClass: "bg-muted dark:bg-muted-foreground",
      titleClass: "bg-primary dark:text-secondary",
      title: "Email Marketing",
      linkButtonClass:
        "bg-secondary text-primary hover:bg-secondary hover:text-primary",
      linkTextClass: "dark:text-secondary",
      image: "images/illustrations/image-4.png",
    },
    {
      cardClass: "bg-primary",
      titleClass: "bg-secondary text-muted dark:text-foreground",
      title: "Content Creation",
      linkButtonClass:
        "bg-secondary text-primary hover:bg-secondary hover:text-primary",
      linkTextClass: "dark:text-secondary",
      image: "images/illustrations/image-5.png",
    },
    {
      cardClass: "bg-secondary",
      titleClass: "bg-primary dark:text-secondary",
      title: "Analytics & Tracking",
      linkButtonClass:
        "bg-muted dark:bg-primary text-secondary hover:bg-secondary hover:text-primary dark:hover:text-secondary",
      linkTextClass: "text-muted dark:text-muted-foreground",
      image: "images/illustrations/image-6.png",
    },
  ],
};
</script>

<template>
  <section class="mx-auto container px-6 py-10">
    <SectionHeader :header="data.header" :subheader="data.subheader" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      <Card
        v-for="service in data.services"
        :key="service.title"
        :class="
          cn('shadow-3xl flex items-center justify-center', service.cardClass)
        "
      >
        <CardContent
          class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-2"
        >
          <div class="space-y-4 order-2 md:order-1">
            <h3 class="text-xl lg:text-2xl leading-snug">
              <span :class="service.titleClass">{{ service.title }}</span>
            </h3>

            <NuxtLink to="#" class="flex items-center gap-2 w-fit p-1 group">
              <Button
                size="icon"
                :class="
                  cn('rounded-full cursor-pointer', service.linkButtonClass)
                "
              >
                <Icon name="mdi:arrow-top-right" size="20" />
              </Button>

              <span :class="service.linkTextClass">Learn more</span>
            </NuxtLink>
          </div>

          <NuxtImg
            :src="service.image"
            width="200"
            class="order-1 md:order-2"
          />
        </CardContent>
      </Card>
    </div>
  </section>
</template>
