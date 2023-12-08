<template>
  <div>
    <div class="-top-40 right-0 radial" />
    <HeroSection
      :title="ServiceData.title"
      :para="ServiceData.description"
      :image="ServiceData.image"
    />
    <HomeWeGetItDoneSection />

  </div>
</template>

<script setup>
import { ServiceData } from "../../composables/services/security-auditing-and-testing.ts";
</script>
