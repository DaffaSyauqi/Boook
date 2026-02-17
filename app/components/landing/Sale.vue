<script setup lang="ts">
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { watchOnce } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const api = ref<CarouselApi>();
const count = ref(0);
const current = ref(0);

const setApi = (value: CarouselApi) => (api.value = value);

watchOnce(api, (api) => {
  if (!api) return;

  count.value = api.scrollSnapList().length;
  current.value = api.selectedScrollSnap() + 1;

  api.on("select", () => {
    current.value = api.selectedScrollSnap() + 1;
  });
});

const data = [
  {
    id: 1,
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    major: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    major: "Marketing Director at XYZ Corp",
  },
  {
    id: 3,
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    major: "Marketing Director at XYZ Corp",
  },
  {
    id: 4,
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    major: "Marketing Director at XYZ Corp",
  },
  {
    id: 5,
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    major: "Marketing Director at XYZ Corp",
  },
];
</script>

<template>
  <section class="container mx-auto px-8 py-10">
    <SectionHeader
      header="Best Selling Book"
      subheader="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
    />

    <div class="bg-secondary dark:bg-muted py-12 my-12 rounded-3xl">
      <Carousel
        v-slot="{ canScrollNext, canScrollPrev, scrollPrev, scrollNext }"
        @init-api="setApi"
        :opts="{ loop: true }"
      >
        <CarouselContent class="px-6 md:px-0">
          <CarouselItem
            v-for="testimonial in data"
            :key="testimonial.id"
            class="basis-1/1 md:basis-1/2"
          >
            <Card class="bg-secondary border-primary">
              <CardContent class="text-muted dark:text-muted-foreground">
                <span>"{{ testimonial.review }}"</span>
              </CardContent>

              <CardHeader>
                <CardTitle class="text-primary">{{
                  testimonial.author
                }}</CardTitle>
                <CardDescription
                  class="text-muted dark:text-muted-foreground"
                  >{{ testimonial.major }}</CardDescription
                >
              </CardHeader>
            </Card>
          </CarouselItem>
        </CarouselContent>

        <div class="mt-8 flex items-center justify-center gap-4 md:gap-10">
          <Button
            variant="secondary"
            size="icon"
            :disabled="!canScrollPrev"
            @click="scrollPrev"
          >
            <Icon
              name="mdi:arrow-left"
              size="22"
              class="dark:group-hover:text-primary cursor-pointer"
            />
          </Button>

          <div class="space-x-2 hidden md:block">
            <Button
              v-for="(_, index) in count"
              :key="index"
              variant="secondary"
              size="icon"
              @click="api?.scrollTo(index)"
            >
              <Icon
                name="mdi:star-four-points"
                size="20"
                :class="
                  cn('dark:group-hover:text-primary cursor-pointer', {
                    'text-primary': current === index + 1,
                  })
                "
              />
            </Button>
          </div>

          <Button
            variant="secondary"
            size="icon"
            :disabled="!canScrollNext"
            @click="scrollNext"
          >
            <Icon
              name="mdi:arrow-right"
              size="22"
              class="dark:group-hover:text-primary cursor-pointer"
            />
          </Button>
        </div>
      </Carousel>
    </div>

    <div
      class="flex items-center bg-muted rounded-2xl my-12 px-15 py-12 lg:py-0"
    >
      <div class="left flex flex-col gap-5">
        <h3 class="font-medium text-3xl">Let's make things happen</h3>
        <p class="w-full md:w-1/2">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>

        <Button
          size="lg"
          class="w-fit bg-secondary text-secondary-foreground hover:text-primary-foreground"
          >Get your free proposal</Button
        >
      </div>

      <div class="w-2/4 hidden md:block">
        <NuxtImg src="" alt="Service Image" width="300" />
      </div>
    </div>
  </section>
</template>
