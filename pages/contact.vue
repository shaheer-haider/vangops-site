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
      <form
        @submit.prevent="submitForm"
        class="max-w-lg glowy-container p-8 space-y-5 w-full"
      >
        <div v-for="field in formFields">
          <label class="flex flex-col">
            <span class="text-base text-headingColor pb-3">{{ field?.name }}</span>
            <textarea
              v-if="field.type == 'textarea'"
              v-model="field.value"
              rows="5"
              class="bg-transparent border border-stroke rounded-md focus:outline-none focus:border-primary px-2 text-lg resize-none"
              required
            />
            <input
              v-else
              v-model="field.value"
              class="bg-transparent border border-stroke rounded-md h-12 focus:outline-none focus:border-primary px-2 text-lg"
              :type="field.type"
              required
            />
          </label>
        </div>
        <button class="btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";

const formFields = ref([
  {
    id: "first_name",
    name: "First Name",
    type: "text",
    value: "",
    required: true,
  },
  {
    id: "last_name",
    name: "Last Name",
    type: "text",
    value: "",
    required: true,
  },
  {
    id: "email",
    name: "Email",
    type: "text",
    value: "",
    required: true,
  },
  {
    id: "phone",
    name: "Phone Number",
    type: "text",
    value: "",
    required: true,
  },
  {
    id: "message",
    name: "Message",
    type: "textarea",
    value: "",
    required: true,
  },
]);

async function submitForm() {
  const formData = {};
  formFields.value.forEach((e) => {
    formData[e.id] = e.value;
  });
  Swal.fire({
    title: "Please Wait !",
    html: "Sending your data to the Server",
    allowOutsideClick: false,
    background: "#070C0E",
    onBeforeOpen: () => {
      Swal.showLoading();
    },
  });

  const response = await $fetch("/api/contact-form", {
    method: "post",
    body: formData,
  });
  if (response.success) {
    Swal.fire({
      title: "Thanks for reaching out to us",
      text: "We will get back to you soon.",
      icon: "success",
      iconColor: "#E81C25",
      color: "#ffffff",
      background: "#070C0E",
      confirmButtonColor: "#E81C25",
    });
  } else {
    Swal.fire({
      title: "Something went wrong",
      text: "Please use the live chat option to contact us meanwhile we'll fix it.",
      icon: "error",
      iconColor: "#E81C25",
      color: "#ffffff",
      background: "#070C0E",
      confirmButtonColor: "#E81C25",
    });
  }
}
</script>

<style scoped></style>
