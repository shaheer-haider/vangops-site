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
    title: "Information We Collect",
    content: `
      a. Personal Information: We may collect personal information, including but not limited to, your name, email address, and contact details when you voluntarily provide them to us through forms on the Site.
      <br>
      b. Usage Information: We collect information about your interactions with the Site, such as the pages you visit and the actions you take.
    `,
  },
  {
    opened: false,
    title: "How We Use Your Information",
    content: `
    We may use your information for the following purposes:
    <br>
    a. To provide and maintain the Site.
    <br>
    b. To improve user experience and customer service.
    <br>
    c. To send periodic emails regarding updates, promotions, and other relevant information.
    `,
  },
  {
    opened: false,
    title: "Information Sharing",
    content: `We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.`,
  },
  {
    opened: false,
    title: "Cookies and Tracking Technologies",
    content: `
    We may use cookies and similar tracking technologies to enhance your experience on the Site. You can control the use of cookies through your browser settings.
    `,
  },
  {
    opened: false,
    title: "Third-Party Links",
    content: `The Site may contain links to third-party websites. We have no control over the privacy practices or content of these websites and are not responsible for their practices.`,
  },
  {
    opened: false,
    title: "Data Security",
    content: `
      We implement security measures to protect your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
    `,
  },
  {
    opened: false,
    title: "Your Choices",
    content: `You can choose not to provide personal information, but this may limit your ability to use certain features of the Site.`,
  },
  {
    opened: false,
    title: "Updates to this Privacy Notice",
    content: `We may update this Privacy Notice from time to time. The date of the most recent revision will be indicated at the top of this page.`,
  },
  {
    opened: false,
    title: "Updates to this Privacy Notice",
    content: `If you have any questions or concerns regarding this Privacy Notice, please contact us at: Vanguard Ops`,
  },
]);
</script>
