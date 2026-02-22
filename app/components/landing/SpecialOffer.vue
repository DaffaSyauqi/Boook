<template>
  <section class="container mx-auto md:px-8 py-10" id="special-offer">
    <SectionHeader
      header="Special Offer"
      subheader="Get our featured book at an exclusive discounted price. Don’t miss your chance to grab this bestseller before the offer ends."
    />

    <div
      class="bg-muted flex justify-center rounded-3xl my-12 p-8 md:p-12 md:m-6"
    >
      <div class="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
        <div class="flex">
          <NuxtImg
            src="https://picsum.photos/300/420"
            alt="Book Cover"
            class="w-60 md:w-72 rounded-lg object-cover"
            placeholder
          />
        </div>

        <div class="flex flex-col pt-6 max-w-xl items-center md:items-start">
          <h1 class="text-2xl md:text-4xl font-semibold">{{ book.title }}</h1>

          <p class="text-xs md:text-sm text-muted-foreground">
            by {{ book.by }} - {{ book.category }}
          </p>

          <div class="flex items-center gap-3 pt-2">
            <!-- Discount Price -->
            <p class="text-3xl font-bold">${{ book.price_discount }}</p>

            <!-- Original Price -->
            <p class="text-lg text-muted-foreground line-through">
              ${{ book.price }}
            </p>
          </div>

          <p
            class="text-xs md:text-sm text-muted-foreground leading-relaxed pt-6 text-center md:text-left"
          >
            {{ book.synopsis }}
          </p>

          <div class="flex gap-4 pt-6">
            <Button class="cursor-pointer" size="lg"> Buy Now </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const book = {
  id: 1,
  title: "The Broken Kingdom",
  by: "Lorem Ipsum",
  category: "Business",
  price: 19.0,
  price_discount: 9.0,
  synopsis:
    "You think some names fail. You should see it. It moves like it has no mind. Like it knows it killed the world once and got a taste for murdering. You should see the moves like it’s done this before.",
  image: "https://picsum.photos/300/420",
};
</script>
