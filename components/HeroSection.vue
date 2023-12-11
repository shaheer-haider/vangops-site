<template>
  <div class="flex flex-col lg:flex-row gap-10 justify-center lg:justify-between items-center py-20 md:py-28 px-2 md:px-10 sm:px-20 "
    :class="reserved ? 'flex-row-reverse' : ''"
  >
    <div class="space-y-3 max-w-lg w-full">
      <h1 class="title">{{ props.title }}</h1>
      <h2 class="title-small-primary">{{ props.smallTitlePrimary }}</h2>
      <div class="max-w-[500px]">
        <h3 class="title-small">{{ props.smallTitle }}</h3>
        <h4 v-if="props.para" class="para mt-2 !leading-7">{{ props.para }}</h4>
        <h4 v-if="props.paraSmall" class="para-small !leading-7">{{ props.paraSmall }}</h4>
      </div>
    </div>
    <img class="max-w-lg w-[calc(100vw_-20px)] md:w-auto" :src="props.image" :alt="props.title" />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  smallTitlePrimary: {
    type: String,
    required: false,
  },
  smallTitle: {
    type: String,
    required: false,
  },
  para: {
    type: String,
    required: false,
  },
  paraSmall: {
    type: String,
    required: false,
  },
  image: {
    type: String,
  },
  reserved: {
    type: Boolean,
    default: false,
  }
});
</script>
