<template>
  <div class="grid grid-cols-1 md:grid-cols-2 p-12">
    <div class="w-full sm:w-auto justify-self-center items-self-center pt-2">
      <!-- Carousel Utama -->
      <Carousel
        class="relative w-[320px] max-w-xs"
        @init-api="(val) => (emblaMainApi = val)"
      >
        <CarouselContent>
          <CarouselItem
            v-for="(img, index) in cardData?.images"
            :key="index"
            class="w-full h-full"
          >
            <img
              :src="img.url"
              :alt="cardData?.name"
              class="w-full h-[320px] object-cover border rounded-lg"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <!-- Thumbnails -->
      <Carousel
        class="relative w-[320px] mt-2"
        @init-api="(val) => (emblaThumbnailApi = val)"
      >
        <CarouselContent class="flex gap-2 p-1 ml-0">
          <CarouselItem
            v-for="(img, index) in cardData?.images"
            :key="index"
            class="pl-0 basis-1/4 cursor-pointer"
            @click="onThumbClick(index)"
          >
            <img
              :src="img.url"
              :alt="cardData?.name"
              class="w-full h-16 object-cover rounded-md border transition-all"
              :class="{
                'ring-2 ring-primary': selectedIndex === index,
              }"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>

    <div class="flex flex-col gap-2">
      <h1 class="text-2xl font-bold">{{ cardData?.name }}</h1>

      <!-- Rating -->
      <div class="flex items-center gap-2">
        <div class="flex">
          <Icon
            name="lucide-star"
            class="w-4 h-4 text-yellow-500 fill-yellow-500"
            v-for="i in 4"
            :key="i"
          />
          <Icon name="lucide-star" class="w-4 h-4 text-gray-300" />
        </div>
        <span class="text-xs text-muted-foreground">(100)</span>
      </div>

      <!-- Price -->
      <div class="flex items-center">
        <span class="text-2xl font-semibold">${{ cardData?.price }}</span>
      </div>

      <Separator class="" />

      <Dialog>
        <div>
          <Label class="" for="quantity">Description</Label>
          <p class="mt-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            omnis soluta unde sed ducimus, necessitatibus optio? Quidem,
            voluptas! Ea, porro? Architecto aut et maxime!
          </p>
          <div class="flex justify-end">
            <DialogTrigger>
              <Button variant="link" size="sm" class="">Read More</Button>
            </DialogTrigger>
          </div>
        </div>
        <DialogContent>
          <div class="p-6">
            <h1 class="text-xl font-medium mb-4">Synopsis :</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              cum magni tempora esse minus dignissimos id ullam obcaecati,
              debitis laboriosam enim officia? Ipsum eaque cumque error nulla
              beatae alias aut, nisi placeat saepe accusamus consequatur harum
              cupiditate voluptatum velit perspiciatis eligendi voluptatem nemo
              voluptates animi dolore rerum! Soluta, voluptates quae.
            </p>

            <Separator class="my-4" />

            <h1 class="text-xl font-medium mb-4">Detail Information :</h1>
            <div class="flex gap-36">
              <div class="flex-col space-y-6">
                <div class="flex-col">
                  <h2 class="text-md">Page</h2>
                  <p class="text-sm">240</p>
                </div>
                <div class="flex-col">
                  <h2 class="text-md">Weight</h2>
                  <p class="text-sm">0,50 kg</p>
                </div>
              </div>
              <div class="flex-col space-y-6">
                <div class="flex-col">
                  <h2 class="text-md">Long</h2>
                  <p class="text-sm">20 cm</p>
                </div>
                <div class="flex-col">
                  <h2 class="text-md">Wide</h2>
                  <p class="text-sm">18 cm</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <!-- Quantity -->
      <div>
        <NumberField
          class="w-32"
          id="quantity"
          :default-value="0"
          :min="0"
          :max="10"
        >
          <Label class="" for="quantity">Quantity</Label>
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
      </div>

      <!-- Buttons -->
      <div class="flex gap-3 mt-2">
        <Button class="flex-1 items-center" variant="outline">
          <Icon name="lucide-shopping-cart" class="text-xl" />
          Add to cart
        </Button>
        <Button class="flex-1">
          <Icon name="lucide-message-square" class="text-xl" />
          Review
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CarouselApi } from "@/components/ui/carousel";

const props = defineProps<{
  cardData: any;
}>();

const mainImage = ref<string | null>(null);
const headers = useHeaders();

watch(
  () => props.cardData,
  (val) => {
    mainImage.value = val?.images?.[0]?.url || null;
  },
  { immediate: true }
);

const selectedColor = ref("");
const quantity = ref(1);

const emblaMainApi = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const selectedIndex = ref(0);

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  emblaMainApi.value.scrollTo(index);
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return;
  onSelect();
  emblaMainApi.on("select", onSelect);
  emblaMainApi.on("reInit", onSelect);
});
</script>
