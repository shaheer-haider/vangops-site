<template>
  <div
    class="max-w-[660px] w-full px-4 sm:px-12 py-14 space-y-3 glowy-container flex flex-col-reverse lg:flex-row justify-between items-center gap-x-2"
  >
    <div class="space-y-2">
      <h2 class="title-2xl">{{ title }}</h2>
      <p class="para !leading-6">
        {{ description }}
      </p>
    </div>
    <div>
      <FeaturesIcon :name="image" />
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "description", "image"]);
</script>
