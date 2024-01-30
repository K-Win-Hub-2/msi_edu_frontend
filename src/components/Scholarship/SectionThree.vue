<template>
  <div class="">
    <h1
      class="lg:mt-[110px] md:mt-[20px] lg:text-[40px] md:text-[32px] text-[24px] shadow-title text-[#FE005F] text-center lg:mb-[133px] mb-[40px] md:mb-[40px] uppercase md:font-[600] font-[530] lg:font-[700]"
    >
      50% SCHOLARSHIP ACHIEVERS
    </h1>
    <div class="flex justify-evenly items-center">
      <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-12">
        <AchieverCard />
        <AchieverCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "../partials/Button.vue";
import AchieverCard from "./AchieverCard.vue";
</script>

<style>
.shadow-title {
  text-shadow: 0px 04px 04px rgba(0, 0, 0, 0.15);
}
</style>
