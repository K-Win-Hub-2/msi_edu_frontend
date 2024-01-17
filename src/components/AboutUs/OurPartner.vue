<template>
  <div class="">
    <div class="w-[500px]">
      <h3
        class="uppercase cus-heading text-cus-secondary text-shadow-sm cus-shadow-color"
      >
        Why Msi
      </h3>
      <h3 class="uppercase text-cus-secondary font-bold">
        Our Excellent services
      </h3>
      <p class="mt-5">
        We are recognized as a award-winning education consultancy by partner universities, which can support guidance for your learning journey. We are providing One-Stop Quality services to the students with the right understanding and the right thinking.
      </p>
    </div>
    <!-- <div class="absolute -top-[100px]">
      <img
        src="../../assets/img/AboutUs/MSI-Website-New-Design-Themes-About-Us-(12-Dec-23)_2.png"
        alt=""
        class="w-[1500px] h-[600px]"
      />
    </div> -->
    <div
      class="grid grid-cols-3 gap-3 relative z-30 mt-11"
    >
      <img
        src="../../assets/img/AboutUs/WhyMsi/one.jpg"
        class="cus-rounded"
      />
      <img
        src="../../assets/img/AboutUs/WhyMsi/two.jpg"
        class="cus-rounded"
      />
      <img
        src="../../assets/img/AboutUs/WhyMsi/three.jpg"
        class="cus-rounded"
      />
    </div>
    <div class="container -mt-9 select-none relative z-30">
      <div class="bg-gray-300 backdrop-blur-sm bg-opacity-40 rounded-lg p-3">
        <UniversitiesSlider />
      </div>
    </div>
  </div>

  <div class="container text-center mb-[100px] mt-3 relative z-30">
    <Button
      class="px-6 rounded-[20px]"
      type="gradient"
      data-te-toggle="modal"
      data-te-target="#appointmentFormModal"
      data-te-ripple-init
      data-te-ripple-color="light"
      >Get Appointment</Button
    >
  </div>
</template>

<script setup>
import UniversitiesSlider from "@/components/AboutUs/UniversitiesSlider.vue";
import Button from "../partials/Button.vue";
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  .cus-bg {
    background-image: radial-gradient(
      closest-corner,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.8) 30%,
      rgba(255, 255, 255, 0) 50%
    );
  }
}
</style>
