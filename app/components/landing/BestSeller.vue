<template>
  <section class="container mx-auto px-8 py-10" id="best-seller">
    <SectionHeader
      header="Best Sellers"
      subheader="The books everyone is reading right now."
    />

    <div class="">
      <Carousel
        v-slot="{ canScrollNext, canScrollPrev, scrollPrev, scrollNext }"
        @init-api="setApi"
        :opts="{ loop: true }"
        class="p-6"
      >
        <CarouselContent class="-ml-3">
          <CarouselItem
            v-for="book in data"
            :key="book.id"
            class="basis-auto pl-3"
          >
            <Nuxtlink>
              <Card
                class="bg-transparent border-none shadow-none w-64 cursor-pointer"
              >
                <CardContent class="flex flex-col p-0">
                  <NuxtImg
                    :src="book.image"
                    :alt="book.title"
                    class="rounded-lg object-cover w-64 h-96"
                    placeholder
                  />

                  <div class="mt-3 space-y-1 text-center">
                    <h1 class="text-md font-semibold line-clamp-2 truncate">
                      {{ book.title }}
                    </h1>

                    <p class="text-xs text-muted-foreground">
                      {{ book.author }}
                    </p>

                    <div class="flex items-center justify-center gap-1">
                      <Icon
                        v-for="n in 5"
                        :key="n"
                        name="lucide:star"
                        size="14"
                        :class="
                          n <= book.rating ? 'text-yellow-500' : 'text-muted'
                        "
                      />
                      <span class="text-xs text-muted-foreground ml-1"
                        >(100)</span
                      >
                    </div>

                    <p class="text-sm font-bold">${{ book.price }}</p>
                  </div>
                </CardContent>
              </Card>
            </Nuxtlink>
          </CarouselItem>
        </CarouselContent>

        <div class="mt-2 flex items-center justify-end gap-2 md:gap-6">
          <Button
            variant="link"
            size="icon"
            :disabled="!canScrollPrev"
            @click="scrollPrev"
          >
            <Icon
              name="lucide:arrow-left"
              size="24"
              class="dark:group-hover:text-primary cursor-pointer"
            />
          </Button>

          <Button
            variant="link"
            size="icon"
            :disabled="!canScrollNext"
            @click="scrollNext"
          >
            <Icon
              name="lucide:arrow-right"
              size="24"
              class="dark:group-hover:text-primary cursor-pointer"
            />
          </Button>
        </div>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CarouselApi } from "@/components/ui/carousel";

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
    title: "Atomic Habits",
    author: "James Clear",
    rating: 5,
    price: 18.99,
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    rating: 4,
    price: 16.5,
    image: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    rating: 5,
    price: 21.0,
    image: "https://picsum.photos/200/300?random=3",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    rating: 4,
    price: 14.99,
    image: "https://picsum.photos/200/300?random=4",
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    rating: 4,
    price: 12.75,
    image: "https://picsum.photos/200/300?random=5",
  },
  {
    id: 6,
    title: "The Lean Startup",
    author: "Eric Ries",
    rating: 4,
    price: 19.99,
    image: "https://picsum.photos/200/300?random=6",
  },
  {
    id: 7,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    rating: 5,
    price: 22.5,
    image: "https://picsum.photos/200/300?random=7",
  },
  {
    id: 8,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    rating: 4,
    price: 17.99,
    image: "https://picsum.photos/200/300?random=8",
  },
  {
    id: 9,
    title: "Good to Great",
    author: "Jim Collins",
    rating: 5,
    price: 20.0,
    image: "https://picsum.photos/200/300?random=9",
  },
  {
    id: 10,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    rating: 4,
    price: 19.5,
    image: "https://picsum.photos/200/300?random=10",
  },
];
</script>
