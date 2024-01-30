<template>
  <div class="lg:mb-[70px] md:mb-[30px]">
    <div class="">
      <div class="lg:py-[70px] md:py-[20px]">
        <h1
          class="text-[#FE005F] lg:text-[40px] md:text-[28px] text-[20px] shadow-text leading-[43.5px] text-center md:font-[600] font-[530] lg:font-[700]"
        >
          STUDY GRANT SGD (2,000-6,500)
        </h1>
        <h1
          class="text-[#205887] lg:text-[32px] md:text-[24px] text-[20px] lg:py-8 md:py-3 shadow-text leading-[43.5px] text-center md:font-[600] font-[520] lg:font-[700] uppercase"
        >
          NANGYAN INSTITUTE OF MANAGEMENT (NIM)
        </h1>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="">
        <div class="lg:max-w-[1094px] md:max-w-600px">
          <div
            v-if="data"
            class="flex flex-wrap justify-center sm:gap-x-6 md:gap-x-[12px] ssm:gap-y-4 lg:gap-8 lg:gap-y-[69px] md:gap-y-[15px]"
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
const url = ref("scholarship-achievers/scholar-type/5");

const { data, fetchData } = getData();
onMounted(() => {
  fetchData(url.value);
});
</script>

<style>
.shadow-title {
  text-shadow: 0px 04px 04px rgba(0, 0, 0, 0.15);
}
</style>
