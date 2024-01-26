<template>
  <div class="flex justify-between items-center py-28 px-4 sm:px-10 md:px-20">
    <div class="relative hidden lg:block">
      <img
        class="anim anim-fade-up"
        anim="fade-up"
        src="@/assets/images/home/think-and-work.png"
      />
      <div class="top-[-70%] left-[-85%] radial absolute" />
    </div>
    <div class="max-w-xl">
      <h2 class="title-medium anim anim-fade-up" anim="fade-up">
        Why Choose Vanguard Ops?
      </h2>
      <div class="w-full h-[1px] bg-stroke mt-4 mb-6" />
      <div v-for="feature in features" class="space-y-2 mb-10">
        <h3 anim="fade-up" class="title-2xl !text-primary anim anim-fade-up">
          {{ feature.title }}
        </h3>
        <h4 anim="fade-up" class="para anim anim-fade-up">
          {{ feature.content }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: "Enterprise-Centric Expertise",
    content: `Our team comprises cybersecurity experts with a deep understanding of the
          intricacies involved in securing government and public sector entities. We bring
          specialized knowledge to the table, ensuring that our solutions align seamlessly
          with your critical missions`,
  },
  {
    title: "Holistic Approach to Cybersecurity",
    content: `At Vanguard Ops, we don't just offer services; we provide a holistic approach to cybersecurity. From proactive consulting to incident response planning, our goal is to create a resilient cybersecurity ecosystem that safeguards your operations at every level.`,
  },
  {
    title: "Compliance Assurance",
    content: `We recognize the paramount importance of compliance within the public sector. Our services are crafted with a steadfast commitment to meeting and exceeding
regulatory standards, including those set forth by NIST, FISMA, ISO27001, and more.`,
  },
];
</script>
