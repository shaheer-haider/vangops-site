<template>
  <div>
    <h5 class="title-medium !text-5xl text-center anim anim-fade-up" anim="fade-up">
      Our Services
    </h5>
    <div class="my-10 glowy-container flex">
      <Swiper
      class="services-swiper"

        :slides-per-view="1"
        :space-between="30"
        :mousewheel="true"
        :pagination="{
          clickable: true,
        }"
        :modules="[SwiperMousewheel, SwiperPagination]"
      >
        <SwiperSlide v-for="(service, index) in allServicesData">
          <div class="w-full h-full items-center">
            <div
              class="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-10 gap-8"
            >
              <img
                class="w-[250px] md:w-[350px] lg:w-auto max-w-[450px] anim anim-fade-up"
                anim="fade-up"
                :src="service.image"
              />
              <div class="max-w-xl space-y-2 anim anim-fade-up" anim="fade-up">
                <h5 class="title-medium">{{ service.name }}</h5>
                <p class="para">
                  {{ service.description }}
                </p>
                <NuxtLink
                  :to="'/services/' + service.slug"
                  class="block w-max btn-primary mt-8"
                  >More Detail</NuxtLink
                >
              </div>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
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
