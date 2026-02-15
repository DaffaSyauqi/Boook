<script setup lang="ts">
const data = {
  header: "Case Studies",
  subheader: "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies",
  cards: [
    {
      title: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      title: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      title: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ]
};
</script>

<template>
  <section class="mx-auto container px-6 py-10">
    <SectionHeader
      :header="data.header"
      :subheader="data.subheader"
    />

    <div class="my-12 flex flex-col lg:flex-row items-start bg-secondary dark:bg-muted rounded-3xl p-10 lg:divide-x divide-muted dark:divide-muted-foreground divide gap-6">
      <div v-for="(card, index) in data.cards" :key="index" class="w-full lg:w-1/3 px-6">
        <p class="text-muted dark:text-muted-foreground">{{ card.title }}</p>

        <NuxtLink to="#" class="flex items-center mt-2 md:mt-5 gap-2 text-primary w-fit">
          <span>Learn More</span>
          <Icon name="mdi:arrow-top-right" size="20" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
