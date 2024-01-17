<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import OurPartner from "./OurPartner.vue";
import UniversitiesSlider from "../Home/UniversitiesSlider.vue";
import Awards from "../Home/Awards.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
</script>

<template>
  <div class="flex justify-around items-center">
    <div class="mt-[100px] -mr-[600px]">
      <img
        src="../../assets/img/AboutUs/MSI-Website-New-Design-Themes-About-Us-(12-Dec-23)_1.png"
        alt=""
        class="w-[1500px] h-[500px] rounded-lg"
      />
    </div>
    <div class="">
      <h2 class="cus-heading uppercase text-cus-secondary -mt-11">
        Who we are........
      </h2>
      <p class="text-cus-secondary uppercase font-bold">
        Myanmar search international
      </p>
      <p class="cus-paragraph w-[500px] mt-8 ml-11">
        Welcome to Myanmar Search International, a leading education consultancy
        firm that assists students in pursuing their dream of studying abroad.
        At Myanmar Search International, we understand that choosing a
        university or college in a foreign country can be an overwhelming
        experience. That's why our team of ex- perienced consultants is
        dedicated to guiding students through the entire process, from selecting
        the right program to applying for a visa.
      </p>
    </div>
  </div>
  <div class="container">
    <UniversitiesSlider class="-mt-[200px]" />
  </div>
  <!-- <Awards class="-mt-[250px] w-[800px]"/> -->
</template>

<style lang="scss" scoped></style>
