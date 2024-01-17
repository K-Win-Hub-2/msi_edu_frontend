<script setup>
import { ref } from "vue";
import SocialButton from "./partials/SocialButton.vue";
import Button from "./partials/Button.vue";

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
  <div ref="socialBar" class="flex justify-between items-center gap-3">
    <div class="flex gap-6">
      <p>
        <i
          class="fa-solid fa-phone text-lg text-cus-primary group-hover:text-white mr-3"
        ></i>
        <span>Phone: +95 9 510 4872 </span>
      </p>
      <p>
        <i
          class="fa-solid fa-envelope text-lg text-cus-primary group-hover:text-white mr-3"
        ></i>
        <a href="mailto:info@msieducation.edu.mm"
          >Email: info@msieducation.edu.mm</a
        >
      </p>
    </div>
    <div class="flex gap-3">
      <div class="">
        <Button
          class="px-3 rounded-[20px]"
          type="gradient"
          data-te-toggle="modal"
          data-te-target="#appointmentFormModal"
          data-te-ripple-init
          data-te-ripple-color="light"
          >Get Appointment</Button
        >
      </div>
      <!-- <SocialButton
        type="facebook"
        url="https://www.facebook.com/MyanmarSearchInternational?mibextid=ZbWKwL"
      />
      <SocialButton type="telegram" url="https://t.me/msieducation" />
      <SocialButton
        type="viber"
        url="https://invite.viber.com/?g2=AQAtldgj44bKy1E%2B99iRJeGTwNTZkAat1yjGtaEf%2FrmfbyU6ljwpfXYnOAP2sDw0"
      />
      <SocialButton
        type="instagram"
        url="https://instagram.com/msi.education?igshid=ZGUzMzM3NWJiOQ=="
      /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
