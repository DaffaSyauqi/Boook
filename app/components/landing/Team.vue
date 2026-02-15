<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const data = {
  header: "Team",
  subheader: "Meet the skilled and experienced team behind our successful digital marketing strategies.",
  cards: [
    {
      avatar: "images/members/1.png",
      name: "John Smith",
      major: "CEO & Founder",
      bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy."
    },
    {
      avatar: "images/members/2.png",
      name: "Jane Doe",
      major: "Director of Operations",
      bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills."
    },
    {
      avatar: "images/members/3.png",
      name: "Michael Brown",
      major: "Senior SEO Specialist",
      bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization."
    },
    {
      avatar: "images/members/4.png",
      name: "Emily Johnson",
      major: "PPC Manager",
      bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis."
    },
    {
      avatar: "images/members/5.png",
      name: "Brian Williams",
      major: "Social Media Specialist",
      bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement."
    },
    {
      avatar: "images/members/6.png",
      name: "Sarah Kim",
      major: "Content Creator",
      bio: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries."
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

    <div class="pt-10 pb-5 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Card
        v-for="member in data.cards" :key="member.name"
        class="shadow-3xl"
      >
        <CardContent class="flex flex-col md:flex-row items-center md:items-end gap-4">
          <NuxtImg :src="member.avatar" width="80" />

          <div>
            <CardTitle class="text-2xl">{{ member.name }}</CardTitle>
            <CardDescription>{{ member.major }}</CardDescription>
          </div>
        </CardContent>

        <Separator class="mx-auto data-[orientation=horizontal]:w-[90%]" />

        <CardFooter>{{ member.bio }}</CardFooter>
      </Card>
    </div>

    <div class="flex justify-center lg:justify-end items-center">
      <Button size="lg" class="w-fit bg-secondary text-secondary-foreground hover:text-primary-foreground dark:bg-muted dark:hover:bg-primary">See All Members</Button>
    </div>
  </section>
</template>
