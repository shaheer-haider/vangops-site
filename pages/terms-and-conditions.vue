<template>
  <div class="px-10 max-w-screen-xl">
    <h1 class="title text-center py-28 max-w-xl m-auto !leading-[1.2]">
      Terms and Conditions of Use
    </h1>
    <div class="top-[-15%] right-[20%] radial" />
    <div class="max-w-[1000px] mx-auto">
      <template v-for="(tAndC, index) in termsAndConditions" :key="index">
        <div
          class="glowy-border mb-10 py-10 flex justify-between cursor-pointer"
          @click="tAndC.opened = !tAndC.opened"
        >
          <div class="flex gap-x-6">
            <div
              class="border border-stroke rounded-full h-12 w-12 flex justify-center items-center title-medium"
            >
              {{ index + 1 }}
            </div>
            <div>
              <h2 class="title-medium select-none pt-1">
                {{ tAndC.title }}
              </h2>
              <div
                class="max-w-3xl lg:para-small para pt-4"
                :class="tAndC.opened ? 'h-auto' : 'h-0 overflow-hidden'"
                v-html="tAndC.content"
              ></div>
            </div>
          </div>
          <div>
            <Icon class="text-primary text-3xl" name="mingcute:add-fill" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const termsAndConditions = ref([
  {
    opened: false,
    title: "Acceptance of Terms",
    content: `By accessing or using the website https://vangops.com/ (the "Site"), you agree
            to comply with and be bound by these terms and conditions of use ("Terms"). If
            you do not agree with these Terms, please do not use this Site.`,
  },
  {
    opened: false,
    title: "Changes to Terms",
    content: `We reserve the right to modify, update, or replace these Terms at any  time without notice. It is your responsibility to check for changes periodically. Your continued use of the Site following the posting of any changes constitutes acceptance of those changes.`,
  },
  {
    opened: false,
    title: "Use of the Site",
    content: `
    <ol>
        <li>1. You agree to provide accurate, current, and complete information when using the Site.</li>
        <li>2. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.</li>
    </ol>
    `,
  },
  {
    opened: false,
    title: "Intellectual Property",
    content: `
    <ol>
        <li>1. All content on this Site, including but not limited to text, graphics, logos, images, and software, is the property of Vanguard Ops or its content suppliers and is protected by copyright laws.</li>
        <li>2. You may not reproduce, distribute, display, or transmit any content on this Site without the prior written consent of Vanguard Ops.</li>
    </ol>
    `,
  },
  {
    opened: false,
    title: "User Conduct",
    content: `
    <ol>
        <li>1. You agree not to use the Site for any unlawful purpose or in a way that violates these Terms.</li>
        <li>2. You may not use the Site to solicit personal information from others or to engage in any commercial activities.</li>
    </ol>
    `,
  },
  {
    opened: false,
    title: "Disclaimer",
    content: `
    <ol class='list-decimal'>
        <li>The content on this Site is provided "as is" without warranties of any kind, either express or implied.</li>
        <li>Vanguard Ops does not warrant that the Site will be uninterrupted or error-free, that defects will be corrected, or that the Site or the server that makes it available are free of viruses or other harmful components.</li>
    </ol>
    `,
  },
  {
    opened: false,
    title: "Disclaimer",
    content: `
    In no event shall Vanguard Ops be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from
    <br />
    <ol class='list-decimal ml-5 mt-5'>
        <li>Your use or inability to use the Site,</li>
        <li>Any unauthorized access to or use of our servers and/or any personal information stored therein,</li>
        <li>Any interruption or cessation of transmission to or from the Site, or</li>
        <li>Any bugs, viruses, trojan horses, or the like, which may be transmitted to or through the Site by any third party.</li>
    </ol>
    `,
  },
]);
</script>
