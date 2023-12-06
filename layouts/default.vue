<template>
  <div class="flex flex-col justify-between min-h-screen">
    <div class="relative">
      <Header />
      <NuxtPage class="max-w-screen-xl mt-20 w-full mx-auto" />
    </div>
    <Footer v-for="x in 200" />
  </div>
</template>
