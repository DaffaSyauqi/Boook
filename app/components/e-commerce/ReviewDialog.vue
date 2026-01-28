<template>
  <div class="w-full p-6">
    <h2 class="text-2xl font-bold mb-4">Reviews</h2>
    <Separator class="my-4" />

    <div class="flex gap-6">
      <!-- Left summary -->
      <div class="flex flex-col items-center justify-center w-32 gap-1">
        <p class="text-4xl font-bold">4.0</p>
        <div class="flex">
          <Icon
            name="lucide-star"
            class="w-4 h-4 text-yellow-500 fill-yellow-500"
            v-for="i in 4"
            :key="i"
          />
          <Icon name="lucide-star" class="w-4 h-4 text-gray-300" />
        </div>
        <p class="text-sm text-gray-500 mt-1">100 ratings</p>
      </div>

      <div class="">
        <Separator orientation="vertical" class="" />
      </div>

      <!-- Rating bars -->
      <div class="flex-1 flex flex-col gap-1">
        <div
          class="flex items-center gap-2"
          v-for="item in ratings"
          :key="item.star"
        >
          <Progress :model-value="item.percent" class="w-[70%]" />
          <span class="w-10 text-sm font-medium">{{ item.star }}.0</span>
          <span class="text-sm text-gray-500">{{ item.count }}</span>
        </div>
      </div>
    </div>

    <div class="flex gap-6 pt-4">
      <div class="flex flex-wrap justify-center items-center gap-1">
        <Icon
          v-for="rating in 5"
          :key="rating"
          name="lucide-star"
          size="24"
          class="cursor-pointer transition-colors"
          :class="
            rating <= filters.rating
              ? 'text-yellow-500 fill-yellow-500'
              : 'text-gray-300'
          "
          @click="filterRating(rating)"
        />
      </div>
      <div class="flex-1 pl-4">
        <ButtonGroup class="w-full">
          <Input
            type="text"
            placeholder="Enter a review"
            class="rounded-full"
          />
          <Button variant="outline" class="rounded-full">
            <Icon name="lucide-send" />
          </Button>
        </ButtonGroup>
      </div>
    </div>

    <div class="w-full pt-6">
      <!-- Header: Avatar, Name, Time, Rating -->
      <div class="flex justify-between items-start">
        <!-- User Info -->
        <div class="flex items-center gap-3">
          <Avatar class="h-10 w-10">
            <AvatarImage src="" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>

          <div class="flex flex-col">
            <p class="font-semibold text-sm">{{ data.name }}</p>
            <span class="text-xs text-muted-foreground">{{ data.time }}</span>
          </div>
        </div>

        <!-- Rating -->
        <div class="flex items-center gap-1">
          <span class="font-semibold">{{ data.rating.toFixed(1) }}</span>

          <!-- Stars -->
          <div class="flex text-yellow-500 fill-yellow-500">
            <Icon
              v-for="n in 5"
              :key="n"
              name="lucide-star"
              size="16"
              :class="
                n <= Math.round(data.rating) ? '' : 'text-gray-300 fill-none'
              "
            />
          </div>
        </div>
      </div>

      <!-- Review Text -->
      <p class="text-sm mt-3 leading-relaxed">
        {{ data.review }}
      </p>

      <Separator class="my-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
const ratings = [
  { star: 5, percent: 80, count: "43 reviews" },
  { star: 4, percent: 55, count: "17 reviews" },
  { star: 3, percent: 40, count: "10 reviews" },
  { star: 2, percent: 20, count: "5 reviews" },
  { star: 1, percent: 70, count: "25 reviews" },
];

const data = {
  name: "John Doe",
  initials: "JD",
  avatar: "",
  time: "2 days ago",
  rating: 5.0,
  review:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere temporibus tenetur laborum nulla sequi minus maiores vitae dignissimos voluptas corrupti, eius magni impedit animi molestiae hic eos laboriosam tempore officia est explicabo eaque ex! Officia, doloribus, quo quas consequuntur deserunt nisi eaque molestias possimus porro quis repudiandae delectus perferendis?",
};

const filters = useProductFilters();

function filterRating(rating: number) {
  if (filters.rating === rating) {
    filters.setRating(0);
  } else {
    filters.setRating(rating);
  }
}
</script>

<style scoped></style>
