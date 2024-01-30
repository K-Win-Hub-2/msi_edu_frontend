<template>
  <div class="lg:mb-[90px] md:mb-[30px] ssm:mb-16">
    <div class="">
      <div class="lg:py-[90px] md:py-[30px]">
        <h1
          class="text-[#FE005F] lg:text-[40px] md:text-[28px] text-[20px] shadow-text leading-[43.5px] text-center md:font-[600] font-[530] lg:font-[700]"
        >
          CNY (4,500-9,000) FAMILY SCHOLARSHIP
        </h1>
        <h1
          class="text-[#205887] lg:text-[32px] md:text-[24px] text-[20px] lg:py-8 md:py-3 shadow-text leading-[43.5px] text-center md:font-[600] font-[520] lg:font-[700] uppercase"
        >
          university OF nottingham (malaysia)
        </h1>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="">
        <div class="lg:max-w-[1094px] h-[346]">
          <div
            v-if="data"
            class="flex flex-wrap justify-center sm:gap-x-6 md:gap-x-[12px] lg:gap-8 ssm:gap-y-4 lg:gap-y-[69px] md:gap-y-[10px]"
          >
            <!-- loop card start -->
            <div class="" v-for="data in data.scholarAchiever" :key="data">
              <BusinessCard :data="data" />
            </div>
            <!-- loop card end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import getData from "../../axios/getData";
import BusinessCard from "./BusinessCard.vue";
const { data, fetchData } = getData();
const url = ref("scholarship-achievers/scholar-type/6");
onMounted(() => {
  fetchData(url.value);
});
</script>

<style>
.shadow-title {
  text-shadow: 0px 04px 04px rgba(0, 0, 0, 0.15);
}
</style>
