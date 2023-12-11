<template>
  <div>
    <h5 class="title-medium !text-5xl text-center">Our Services</h5>
    <div class="my-10">
      <div class="glowy-container w-full">
        <div
          class="flex flex-col md:flex-row items-center justify-between px-8 sm:px-10 md:px-20 py-10 gap-8"
        >
          <img
            class="w-[250px] md:w-[350px] lg:w-auto max-w-[450px]"
            :src="allServicesData[selectedServiceId].image"
          />
          <div class="max-w-xl space-y-2">
            <h5 class="title-medium">{{ allServicesData[selectedServiceId].name }}</h5>
            <p class="para min-w-[250px]">
              {{ allServicesData[selectedServiceId].description }}
            </p>
            <NuxtLink
              :to="'/services/' + allServicesData[selectedServiceId].slug"
              class="block w-max btn-primary mt-8"
              >More Detail</NuxtLink
            >
          </div>
        </div>
        <div class="flex items-center justify-center gap-x-1 pb-10">
          <div v-for="serviceId in allServicesData.length" @click="selectedServiceId = serviceId - 1" class="cursor-pointer">
            <div
              :class="
                selectedServiceId == serviceId - 1
                  ? 'border border-primary w-5 h-5 rounded-full flex items-center justify-center'
                  : ''
              "
            >
              <div
                class="rounded-full"
                :class="
                selectedServiceId == serviceId - 1
                    ? 'bg-primary w-4 h-4 border-4 border-transparent'
                    : 'bg-stroke w-3 h-3'
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import allServicesData from "~/composables/data/services-data.json";
const selectedServiceId = ref(1);
</script>
