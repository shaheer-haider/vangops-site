<template>
  <div>
    <div class="-top-56 right-[20%] radial" />
    <div class="mb-24 mt-60 text-center max-w-3xl m-auto space-y-5 px-10">
      <h1 class="title px-4">Projects</h1>
      <!-- <p class="para">
        Lorem ipsum dolor sit amet consectetur. Elit porta amet eu tincidunt. Volutpat
        nisl auctor arcu massa bibendum consectetur. Duis in nullam massa blandit nibh.
      </p> -->
    </div>
    <div class="px-10 max-w-screen-xl m-auto">
      <div class="flex flex-wrap md:flex-nowrap m-auto md:justify-center select-none gap-y-3">
        <div
          v-for="category in projectCategories"
          @click="activeCategory = category"
          class="cursor-pointer relative text-center"
        >
          <h2 class="text-lg text-primary px-4">{{ category }}</h2>
          <div
            :class="activeCategory == category ? '' : 'hidden'"
            class="w-full h-[3px] bg-primary mt-2"
          ></div>
          <div
            class="w-full h-[1px] bg-stroke mt-2 absolute bottom-[1px] left-0 -z-[1]"
          ></div>
        </div>
      </div>
    </div>
    <div class="mt-16">
  <div v-for="(project, index) in projectData.filter((e)=> e.categories.includes(activeCategory))" :key="index">
    <div class="flex flex-wrap-reverse gap-16 items-center justify-center w-full"
        :class="index % 2 == 0 ? '': 'flex-row-reverse'"
    >
      <div class="max-w-xl">
        <h3 class="title-medium mb-3">{{ project.name }}</h3>
        <p class="para">{{ project.description }}</p>
      </div>
    <img class="w-[280px] md:w-[320px] lg:w-[420px] rounded-lg" :src="project.image" alt="" />
    </div>
    <div class="max-w-5xl m-auto">
      <div class="bg-stroke h-[1px] my-16 w-full" /> <!-- Set the width to full -->
    </div>
  </div>
</div>

  </div>
</template>

<script setup>
import projectCategories from "~/composables/data/projects-categories.json";
import projectData from "~/composables/data/projects-data.json";
const activeCategory = ref(projectCategories[0]);
</script>
