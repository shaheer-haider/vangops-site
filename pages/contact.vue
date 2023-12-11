<template>
  <div class="px-10 pt-24 max-w-screen-xl">
    <div class="flex justify-center flex-wrap gap-14 w-full">
      <div class="max-w-lg w-full">
        <h1
          class="title underline decoration-1 decoration-stroke underline-offset-[20px] mb-6"
        >
          Contacts
        </h1>
        <p class="title-small-primary">Get in touch</p>
        <iframe
          class="w-full h-[450px] rounded-lg my-9"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw&q=Shadow Lane, West Hartford, CT, 06110&zoom=19"
        />

        <div>
          <h2 class="title-small mb-3 ml-1">Offices Location</h2>
          <div class="flex">
            <Icon
              class="text-2xl text-primary mr-[2px] mb-1 block"
              name="material-symbols:pin-drop"
            />
            <p>Shadow Lane, West Hartford, Connecticut, United States of America.</p>
          </div>
        </div>
      </div>
      <form class="max-w-lg glowy-container p-8 space-y-5 w-full">
        <div v-for="field in formFields">
          <label class="flex flex-col">
            <span class="text-base text-headingColor pb-3">{{ field?.name }}</span>
            <textarea
              v-if="field.type == 'textarea'"
              rows="5"
              class="bg-transparent border border-stroke rounded-md focus:outline-none focus:border-primary px-2 text-lg resize-none"
            />
            <input
              v-else
              class="bg-transparent border border-stroke rounded-md h-12 focus:outline-none focus:border-primary px-2 text-lg"
              :type="field.type"
            />
          </label>
        </div>
        <button class="btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
const formFields = ref([
  {
    name: "First Name",
    type: "text",
    value: "",
    required: true,
  },
  {
    name: "Last Name",
    type: "text",
    value: "",
    required: true,
  },
  {
    name: "Email",
    type: "text",
    value: "",
    required: true,
  },
  {
    name: "Phone Number",
    type: "text",
    value: "",
    required: true,
  },
  {
    name: "Messages",
    type: "textarea",
    value: "",
    required: true,
  },
]);
</script>

<style scoped></style>
