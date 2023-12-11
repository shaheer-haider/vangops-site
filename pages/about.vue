<template>
  <div class="px-10 max-w-screen-xl">
    <div class="-top-40 right-0 radial" />
    <HeroSection
      title="About"
      paraSmall="Welcome to Vanguard Ops, a dedicated force in cybersecurity committed to fortifying the digital resilience of the U.S. government and public sector. At the heart of our mission is a relentless pursuit of excellence, ensuring that the entities safeguarding our nation's interests are fortified against evolving cyber threats."
      :image="HeroImage"
    />

    <div
      class="py-12 px-4 sm:px-6 md:px-10 lg:px-20 w-full glowy-container max-w-screen-xl mx-auto space-y-20"
    >
      <div v-for="sectionContent in sectionsContent" class="">
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
import HeroImage from "@/assets/images/about/hero.png";

const sectionsContent = [
  {
    title: "Our Commitment",
    subSections: [
      {
        title: "Tailored Services for Mission Success",
        content: `Our services encompass a comprehensive array of cybersecurity solutions, including consulting, security audit and testing, incident response planning, data privacy services, infrastructure monitoring and reporting, security awareness training, and more. Each service is meticulously designed to meet the specific needs of government and public sector operations.`,
      },
      {
        title: "Our Commitment",
        content: `We understand the unique challenges faced by government and public sector
              organizations. At Vanguard Ops, we see ourselves not just as service
              providers but as strategic partners committed to enhancing your
              cybersecurity posture.`,
      },
    ],
  },
  {
    title: "Why Choose Vanguard Ops?",
    subSections: [
      {
        title: "Government-Centric Expertise",
        content: `Our team comprises cybersecurity experts with a deep understanding of the intricacies involved in securing government and public sector entities. We bring specialized knowledge to the table, ensuring that our solutions align seamlessly with your critical missions.`,
      },
      {
        title: "Compliance Assurance",
        content: `We recognize the paramount importance of compliance within the public sector. Our services are crafted with a steadfast commitment to meeting and exceeding regulatory standards, including those set forth by NIST, FISMA, ISO27001, and more.`,
      },
      {
        title: "Holistic Approach to Cybersecurity",
        content: `At Vanguard Ops, we don't just offer services; we provide a holistic approach to cybersecurity. From proactive consulting to incident response planning, our goal is to create a resilient cybersecurity ecosystem that safeguards your operations at every level.`,
      },
    ],
  },
];
</script>
