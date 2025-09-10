<template>
  <div class="grid grid-cols-1 md:grid-cols-2 p-12">
    <div class="w-full sm:w-auto justify-self-center">
      <!-- Carousel Utama -->
      <Carousel
        class="relative w-[240px] max-w-xs"
        @init-api="(val) => (emblaMainApi = val)"
      >
        <CarouselContent>
          <CarouselItem
            v-for="(img, index) in cardData?.Images"
            :key="index"
            class="w-full h-full"
          >
            <img
              :src="img.url"
              :alt="cardData?.name"
              class="w-[320px] h-[320px] object-cover rounded-lg"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <!-- Thumbnails -->
      <Carousel
        class="relative w-[320px] mt-3"
        @init-api="(val) => (emblaThumbnailApi = val)"
      >
        <CarouselContent class="flex gap-2">
          <CarouselItem
            v-for="(img, index) in cardData?.Images"
            :key="index"
            class="basis-1/5 cursor-pointer"
            @click="onThumbClick(index)"
          >
            <img
              :src="img.url"
              :alt="cardData?.name"
              class="w-full h-16 object-cover rounded-md border"
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
        <span class="text-xs text-muted-foreground">(213)</span>
      </div>

      <!-- Price -->
      <div class="flex items-center gap-3">
        <span class="text-2xl font-semibold">${{ cardData?.price }}</span>
      </div>

      <Separator class="my-4" />

      <!-- Options -->
      <div class="flex gap-12">
        <!-- Color -->
        <div>
          <Label class="font-medium">Color :</Label>
          <div class="flex gap-2 mt-4">
            <button
              v-for="(color, index) in colors"
              :key="index"
              :style="{ backgroundColor: color }"
              class="w-6 h-6 rounded-full border border-muted transition-all"
              :class="{
                'ring-2 ring-primary scale-110': selectedColor === color,
              }"
              @click="selectedColor = color"
            ></button>
          </div>
        </div>

        <!-- Size -->
        <div>
          <Label class="font-medium">Size :</Label>
          <div class="mt-2">
            <Select v-model="selectedSize">
              <SelectTrigger class="w-40">
                <SelectValue placeholder="Select Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  v-for="t in sizes"
                  :key="t"
                  :value="t.toLowerCase()"
                >
                  {{ t }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <!-- Quantity -->
      <div>
        <NumberField
          class="w-32"
          id="quantity"
          :default-value="0"
          :min="0"
          :max="10"
        >
          <Label class="mt-2" for="quantity">Quantity</Label>
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
      </div>

      <!-- Buttons -->
      <div class="flex gap-3 mt-2">
        <Button class="flex-1">Add to cart</Button>
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

console.log("cardData:", props.cardData);

watch(
  () => props.cardData,
  (val) => {
    mainImage.value = val?.Images?.[0]?.url || null;
  },
  { immediate: true }
);

// ---- UI states tetap sama seperti sebelumnya ----
const selectedColor = ref("#ffffff");
const selectedSize = ref(null);
const quantity = ref(1);

const colors = ["#ffffff", "#ff0000", "#ff9900"];
const sizes = ["S", "M", "XL"];

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
