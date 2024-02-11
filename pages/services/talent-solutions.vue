<template>
  <div class="px-10 max-w-screen-xl">
    <div class="-top-40 right-0 radial" />
    <div
      class="flex flex-col lg:flex-row gap-10 justify-center lg:justify-between items-center py-20 md:py-28 px-2 md:px-10 sm:px-20"
    >
      <div class="space-y-3 max-w-lg w-full">
        <h1 class="title">Talent Solutions</h1>
        <h2 class="title-small-primary">Seeking Top Talent?</h2>
        <div class="max-w-[500px]">
          <h3 class="title-small">Discover The Latest Innovators</h3>
          <h4 class="para !leading-7">
            Are you in search of the perfect candidate to bring your vision to life and
            make an immediate impact?
          </h4>
        </div>
      </div>
      <div class="max-w-lg w-[calc(100vw_-20px)] glowy-container p-6">
        <p class="title">98%</p>
        <p class="title-small-primary mb-6">of hires fulfilled diversity goals</p>
        <p class="para-small !leading-7">
          <b>We're dedicated to simplifying the process for you.</b>
          <br />By partnering with us, you'll not only find the right talent but also
          ensure they're a lasting part of your team, empowering you to exceed your
          business objectives and stay at the forefront of innovation.
        </p>
      </div>
    </div>

    <HomeWeGetItDoneSection class="my-20" />

    <HeroSection
      title="Beyond aligning Resumes with job roles"
      para="It's about a deep understanding of your business aspirations and the essence of your company culture to identify the perfect match for your team. Whether it's a seasoned specialist, a committed long-term employee, urgent support for a critical project, or guidance to refine your strategy, we're committed to turning your needs into reality."
      image="/images/services/hiring.png"
      :reserved="true"
    />

    <div
      v-if="serviceData?.sectionsContent?.length"
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
const serviceData = allServicesData.find((e) => e.slug == "talent-solutions");
</script>
