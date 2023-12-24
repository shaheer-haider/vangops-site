<template>
  <div class="relative">
    <!-- <div class="bottom-0 left-0 radial" /> -->
    <div class="mx-auto bg-footerColor z-10 w-full mt-20 pt-20 min-h-[400px] px-8 pb-2">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
        <img src="@/assets/images/logo-large.png" class="mr-3" alt="vanops" />
        <div class="flex flex-wrap gap-y-5 gap-x-28">
          <div>
            <h5 class="title-small mb-2">Core Services</h5>
            <ul class="space-y-1 para">
              <ol v-for="service in allServicesData">
                <NuxtLink class="hover:text-primary" :to="'/services/' + service.slug">{{service.name}}</NuxtLink>
              </ol>
            </ul>
          </div>
          <div class="space-y-3">
            <h5 class="title-small mb-2 ml-1">Location</h5>
            <div class="flex">
              <div>
                <Icon
                  class="text-2xl text-primary mr-3 mb-1"
                  name="material-symbols:pin-drop"
                />
              </div>
              <span> Connecticut, West Hartford 11203, US </span>
            </div>
            <div class="flex">
              <div>
                <Icon
                  class="text-2xl text-primary mr-3 mb-1"
                  name="material-symbols:call-sharp"
                />
              </div>
              <span
                >860-313-8891
                <br />
                860-709-3484</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="w-full max-w-7xl mt-10 m-auto">
        <div class="h-[1px] w-full max-w-7xl bg-stroke m-auto"></div>
        <div class="flex flex-wrap gap-8 justify-between mt-2">
          <span>© Copyright © 2023 | Vanguard Ops</span>
          <div class="flex flex-wrap gap-6">
            <NuxtLink to="/terms-and-conditions">Terms and Conditions</NuxtLink>
            <NuxtLink to="/privacy">Privacy</NuxtLink>
            <!-- <NuxtLink to="/about">About</NuxtLink> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import allServicesData from "~/composables/data/services-data.json";
</script>
