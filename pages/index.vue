<template>
  <div class="px-10 max-w-screen-xl">
    <div class="-top-40 right-0 radial" />

    <HeroSection
      title="Vanguard Ops"
      smallTitlePrimary="Developing and Protecting"
      smallTitle="The Public Interest"
      paraSmall="Cybersecurity for Government and the People"
      :image="HeroImage"
    />

    <HomeWeGetItDoneSection />

    <div class="pt-40 pb-20 text-center max-w-2xl mx-auto space-y-4">
      <h2 class="title-medium anim anim-fade-up" anim="fade-up">
        Passion for High Standards and Constant Improvement
      </h2>
      <p class="anim anim-fade-up" anim="fade-up">
        Our commitment to maintaining the highest standards in our work is unwavering, and
        we refuse to compromise quality for immediate gains. In our business, terms like
        "adequate" and "minimal requirement" hold no significance.
      </p>
    </div>
    <div class="flex flex-wrap gap-y-14 gap-x-10 justify-center">
      <FeaturesCard
        v-for="(feature, index) in featuresData"
        :title="feature.title"
        :description="feature.description"
        :image="feature.image"
        class="anim anim-fade-up"
        anim="fade-up"
      />
    </div>

    <HomeWhyChooseUs class="my-16" />

    <HomeOurServices />
  </div>
</template>

<script setup>
import HeroImage from "@/assets/images/home/hero.png";

const featuresData = [
  {
    title: "Integrity",
    description:
      "We uphold and exemplify a superior set of moral and ethical principles, consistently choosing to do what is right, irrespective of external scrutiny.",
    image: "integrity",
  },
  {
    title: "Accountability",
    description:
      "We fully embrace the consequences of our actions, willingly taking ownership and holding ourselves and each other accountable. Our commitment extends to our words, actions, and the outcomes we generate.",
    image: "accountability",
  },
  {
    title: "Professional",
    description:
      "We are trustworthy and ensure the fulfillment of our commitments. In instances where unforeseen circumstances hinder us from meeting expectations, we address the situation with transparent communication to rectify the issue.",
    image: "professional",
  },
  {
    title: "Collaboration",
    description:
      "We actively engage in mutual growth, offering assistance and encouragement to achieve collective objectives through reciprocity. We embrace challenging conversations, maintain open-mindedness, avoid assumptions, pose and answer questions, and rely on collective problem-solving.",
    image: "collaboration",
  },
];
</script>
