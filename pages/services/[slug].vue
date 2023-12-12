<template>
  <div class="px-10 max-w-screen-xl">
    <div class="-top-40 right-0 radial" />
    <HeroSection
      :title="serviceData.name"
      :para="serviceData.description"
      :image="serviceData.image"
    />
    <HomeWeGetItDoneSection class="my-20" />

    <div id="related-projects" class="py-8">
      <h2 class="text-center title-medium mb-3">Projects</h2>
      <p class="text-center para max-w-lg m-auto mb-10">
        <!-- Lorem ipsum dolor sit amet consectetur. Elit porta amet eu tincidunt. Volutpat
        nisl auctor arcu massa bibendum. -->
      </p>

      <div class="flex flex-wrap gap-8 justify-center"
      v-if="projects?.length"

      >
        <div v-for="project in projects" class="glowy-container hover:bg-stroke transition-all p-6 w-[280px] sm:w-[320px] md:w-[360px]">
          <img :src="project.image" class="rounded-2xl aspect-video" />
          <h3 class="text-3xl font-bold text-headingColor text-center pt-5">
            {{ project.name }}
          </h3>
          <p class="text-center mt-2 text-lg">
            {{ project.description }}
          </p>
        </div>
      </div>

    </div>

    <div
      v-if="serviceData.sectionsContent?.length"
      class="py-12 px-10 sm:px-20 w-full glowy-container max-w-screen-xl mx-auto space-y-20 mt-20"
    >
      <div v-for="sectionContent in serviceData.sectionsContent" class="">
        <h2 class="title-medium mb-6">{{ sectionContent.title }}</h2>
        <div class="w-full h-[1px] bg-stroke mb-8" />
        <div class="flex flex-wrap justify-between gap-x-3 gap-y-20">
          <div v-for="subSection in sectionContent.subSections" class="max-w-xl">
            <h3 class="title-small-primary mb-3">{{ subSection.title }}</h3>
            <p class="para-small">
              {{ subSection.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import allServicesData from "~/composables/data/services-data.json";
import projectsData from "~/composables/data/projects-data.json";
const serviceData = allServicesData.find((e) => e.slug == useRoute().params.slug);
const projects = projectsData.filter((e) => e.services.includes(serviceData.id));
</script>
