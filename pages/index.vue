<template>
  <div>
    <div class="-top-40 right-0 radial" />

    <HeroSection
      title="Vanguard Ops"
      smallTitlePrimary="Developing and Protecting"
      smallTitle="The Public Interest"
      para="Cybersecurity for Government and the People"
      image="@/assets/images/hero.png"
    />

    <HomeWeGetItDoneSection />

    <div class="pt-40 pb-20 text-center max-w-2xl mx-auto space-y-4">
      <h2 class="title-medium">Passion for High Standards and Constant Improvement</h2>
      <p>
        Our commitment to maintaining the highest standards in our work is unwavering, and
        we refuse to compromise quality for immediate gains. In our business, terms like
        "adequate" and "minimal requirement" hold no significance.
      </p>
    </div>
    <div class="flex flex-wrap gap-y-14 gap-x-10 justify-center">
      <FeaturesCard v-for="x in 4" />
    </div>

    <HomeWhyChooseUs class="my-16" />

    <HomeOurServices />
  </div>
</template>
