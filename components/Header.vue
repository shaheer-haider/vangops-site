<template>
  <nav class="fixed w-full z-20 top-0 left-0 p-4">
    <div class="max-w-screen-xl mx-auto px-10">
      <div
        class="flex flex-wrap items-center justify-between mx-auto px-6 py-4 glowy-container"
      >
        <NuxtLink to="/" class="flex items-center">
          <img src="@/assets/images/logo.png" class="mr-3" :alt="siteName + ' Logo'" />
        </NuxtLink>
        <div class="flex md:order-2">
          <a class="hidden md:block" />
          <button
            @click="showMobileDrawer = !showMobileDrawer"
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <Icon class="text-4xl" name="ci:hamburger" />
          </button>
        </div>
        <div
          :class="showMobileDrawer ? '' : 'hidden'"
          class="items-center justify-between w-full md:flex md:w-auto md:order-1 relative"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col px-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0"
          >
            <li v-for="(navLink, index) in navLinks" :key="index">
              <NuxtLink
                :to="navLink.path"
                class="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:hover:text-primary md:p-0"
                >{{ navLink.name }}</NuxtLink
              >
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const showMobileDrawer = ref(false);
const siteName = "Vanguard Ops";
const navLinks = [
  {
    name: "Services",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/",
  },
];
</script>
