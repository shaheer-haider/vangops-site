<template>
  <div class="flex justify-between items-center py-28 px-10 sm:px-20">
    <div class="space-y-3">
      <h1 class="title">{{ props.title }}</h1>
      <h2 class="title-small-primary">{{ props.smallTitlePrimary }}</h2>
      <div>
        <h3 class="title-small">{{ props.smallTitle }}</h3>
        <h4 class="para-small">{{ props.para }}</h4>
      </div>
    </div>
    <img :src="props.image" />
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
  image: {
    type: String,
  },
});
</script>
