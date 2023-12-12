<template>
  <div class="flex flex-col justify-between min-h-screen">
    <div class="relative">
      <Header />
      <NuxtPage class="mt-20 w-full mx-auto" />
    </div>
    <Footer />
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationName = "anim-" + entry.target.getAttribute("anim");
          if (entry.target.classList.contains(animationName)) {
            entry.target.classList.remove(animationName);
            entry.target.classList.add(`${animationName}-active`);
            observer.unobserve(entry.target);
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  const hiddenElement = document.querySelectorAll(".anim");
  hiddenElement.forEach((element) => observer.observe(element));
});

</script>
