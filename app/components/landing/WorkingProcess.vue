<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const accordion = ref();

const data = [
  {
    id: "01",
    title: "Consultation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "03",
    title: "Implementation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "04",
    title: "Monitoring and Optimization",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "05",
    title: "Reporting and Communication",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "06",
    title: "Continual Improvement",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];
</script>

<template>
  <section class="container mx-auto px-6">
      <SectionHeader
        header="Our Working Process"
        subheader="Step-by-Step Guide to Achieving Your Business Goals Step-by-Step Guide to Achieving Your Business Goals"
      />

      <div class="py-10">
        <Accordion type="single" collapsible class="gap-20 space-y-4" v-model="accordion">
          <AccordionItem v-for="(process, index) in data" :key="process.id" :value="`${process.title}-${index + 1}`" class="bg-muted rounded-xl px-10 py-4 shadow-3xl dark:shadow">
            <AccordionTrigger class="items-center">
              <div class="px-4 flex items-center justify-start gap-3 lg:gap-2">
                <span class="font-bold text-2xl">0{{ index + 1 }}</span>
                <span class="text-lg font-medium">{{ process.title }}</span>
              </div>

              <template #icon>
                <Button class="rounded-full" size="icon">
                  <Icon v-if="`${process.title}-${index + 1}` !== accordion" name="lucide:plus" size="24" />
                  <Icon v-else name="lucide:minus" size="24" />
                </Button>
              </template>
            </AccordionTrigger>

            <Separator v-if="`${process.title}-${index + 1}` === accordion" class="my-4 dark:bg-white " />
            
            <AccordionContent>{{ process.text }}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
  </section>
</template>
