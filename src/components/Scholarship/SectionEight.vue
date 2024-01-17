<template>
  <div class="mb-[90px]">
    <div class="">
      <div class="py-[90px]">
        <h1
          class="text-[#FE005F] lg:text-[48px] shadow-title md:text-[32px] text-[24px] leading-[43.5px] text-center md:font-[600] text-[530] lg:font-[700]"
        >
          STUDY GRANT SGD (2,000-5,000)
        </h1>
        <h1
          class="text-[#205887] text-2xl shadow-title text-[32px] my-8 leading-[43.5px] text-center font-[700] uppercase"
        >
          NANGYAN INSTITUTE OF MANAGEMENT (NIM)
        </h1>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="">
        <div class="max-w-[1094px] h-[346]">
          <div
            class="flex flex-wrap justify-center md:gap-x-[12px] lg:gap-8 gap-y-[69px]"
          >
            <!-- loop card start -->
            <BusinessCard />
            <BusinessCard />
            <BusinessCard />
            <BusinessCard />
            <BusinessCard />
            <BusinessCard />
            <BusinessCard />
            <!-- loop card end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BusinessCard from "./BusinessCard.vue";
</script>

<style>
.shadow-title {
  text-shadow: 0px 04px 04px rgba(0, 0, 0, 0.15);
}
</style>
