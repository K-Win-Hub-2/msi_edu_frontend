<script setup>
import { ref } from "vue";
import SocialButton from "./partials/SocialButton.vue";
import Button from "./partials/Button.vue";
import router from "../router";
const toAppointment = () => {
  router.push({ name: "appointment-form" });
};

// const socialBar = ref(null)

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     // socialBar.value.style.top = "0";
//     socialBar.value.style.maxHeight = "1px";
//     socialBar.value.style.opacity = "0";
//   } else {
//     // socialBar.value.style.top = "-100px"
//     socialBar.value.style.maxHeight = "100px"
//     socialBar.value.style.opacity = "100%"
//   }
// }
</script>

<template>
  <div ref="socialBar" class="flex items-center justify-between gap-3">
    <div class="gap-6 md:flex ssm:hidden">
      <p class="inline-flex items-center">
        <i class="mr-2 text-base text-white fa-solid fa-phone group-hover:text-white"></i>
        <span class="text-white">Phone: +95 9 510 4872</span>
      </p>
      <p class="inline-flex items-center">
        <i class="mr-2 text-base text-white fa-solid fa-envelope group-hover:text-white"></i>
        <a href="mailto:info@msieducation.edu.mm" class="text-white">Email: info@msieducation.edu.mm</a>
      </p>
    </div>
    <div class="flex gap-3">
      <div>
        <Button
          @click="toAppointment"
          class="px-3 rounded-[20px]"
          type="gradient"
          data-te-toggle="modal"
          data-te-target="#appointmentFormModal"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Get Appointment
        </Button>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped></style>
