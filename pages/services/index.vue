<template>
  <div class="px-10 max-w-screen-xl">
    <div class="-top-56 right-[20%] radial" />
    <h1 class="title mt-60 mb-24 text-center">
      Check out the
      <br />
      Services
    </h1>

    <div class="flex justify-center flex-wrap gap-7 pb-8">
      <div v-for="service in allServicesData" class="flex flex-col w-[420px] glowy-container p-8 gap-8 justify-between">
        <div>
          <img :src="service.image" alt="" class="pb-5" />
          <h2 class="pb-2 pt-1 text-3xl font-bold text-headingColor">{{ service.name }}</h2>
          <p class="para">{{ service.description }}</p>
        </div>
          <NuxtLink :to="'/services/' + service.slug" class="btn-primary w-full block text-center text-lg">More Detail</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import allServicesData from "~/composables/data/services-data.json";
</script>
