<template>
  <div>
    <h5 class="title-medium !text-5xl text-center anim anim-fade-up" anim="fade-up">
      Our Services
    </h5>
    <div class="my-10">
      <div class="glowy-container w-full">
        <div
          id="content-container"
          class="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-10 gap-8 anim anim-fade-up"
          anim="fade-up"
        >
          <img
            class="w-[250px] md:w-[350px] lg:w-auto max-w-[450px] anim anim-fade-up"
            anim="fade-up"
            :src="allServicesData[selectedServiceId].image"
          />
          <div class="max-w-xl space-y-2 anim anim-fade-up" anim="fade-up">
            <h5 class="title-medium">{{ allServicesData[selectedServiceId].name }}</h5>
            <p class="para">
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
          <div
            v-for="serviceId in allServicesData.length"
            @click="() => setServiceId(serviceId)"
            class="cursor-pointer"
          >
            <div
              :class="
                serviceId - 1 == selectedServiceId
                  ? 'border border-primary w-5 h-5 rounded-full flex items-center justify-center'
                  : ''
              "
            >
              <div
                class="rounded-full"
                :class="
                  serviceId - 1 == selectedServiceId
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
const selectedServiceId = ref(0);

function setServiceId(serviceId) {
  selectedServiceId.value = serviceId - 1;
}
</script>
