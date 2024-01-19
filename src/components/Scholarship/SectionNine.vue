<template>
  <div class="mb-[90px]">
    <div class="">
      <div class="py-[90px]">
        <h1
          class="text-[#FE005F] text-[40px] leading-[43.5px] text-center font-[700] shadow-title"
        >
          CNY (4,500-9,000) FAMILY SCHOLARSHIP
        </h1>
        <h1
          class="text-[#205887] text-[32px] my-8 leading-[43.5px] text-center font-[700] shadow-title uppercase"
        >
          university OF nottingham (malaysia)
        </h1>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="">
        <div class="lg:max-w-[1094px] md:max-w-[600px] h-[346]">
          <div
            class="flex flex-wrap justify-center sm:gap-x-6 md:gap-x-[12px] lg:gap-8 gap-y-[69px]"
          >
            <!-- loop card start -->
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
