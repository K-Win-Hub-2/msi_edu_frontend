<template>
  <div class="">
    <h1
      class="lg:mt-[110px] md:mt-[20px] lg:text-[40px] md:text-[32px] text-[24px] shadow-title text-[#FE005F] text-center lg:mb-[133px] mb-[40px] md:mb-[40px] uppercase md:font-[600] font-[530] lg:font-[700]"
    >
      50% SCHOLARSHIP ACHIEVERS
    </h1>
    <div class="flex justify-evenly items-center">
      <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-12">
        <div
          class="md:w-[517px] md:h-[320px] card-achiever md:py-[94px] ssm:py-[40px] md:px-[32px]"
        >
          <div class="flex items-center">
            <div class="w-[131px] h-[131px]">
              <img
                class="rounded-full w-[100%] h-[100%]"
                src="../../assets/img/scholarship/UCW-Vancouver-House-Campus-3.jpg"
                alt=""
              />
            </div>
            <div class="md:ml-[35px] ssm:ml-4">
              <h1
                class="text-[#205887] text-[15px] font-[600] uppercase shadow-title"
              >
                50% SCHOLARSHIP ACHIEVER
              </h1>
              <h1 class="text-[#205887] mt-3 text-[13px]">
                <span
                  class="text-[#FE005F] text-[12px] font-[700] uppercase shadow-title"
                  >Aunt Htoo Aung</span
                >
                <span class="text-[11px] font-[400] uppercase shadow-title"
                  >(bS IN Business)</span
                >
                <h1
                  class="text-[11px] text-[#205887] mt-3 font-[400] uppercase shadow-title"
                >
                  (Mandalay)
                </h1>
              </h1>
              <h1
                class="text-[#FE005F] font-[600] uppercase text-[11.5px] mt-3 shadow-title"
              >
                James Cook University (Singapore)
              </h1>
            </div>
          </div>
        </div>
        <div
          class="md:w-[517px] md:h-[320px] card-achiever md:py-[94px] ssm:py-[40px] md:px-[32px]"
        >
          <div class="flex items-center">
            <div class="w-[131px] h-[131px]">
              <img
                class="rounded-full w-[100%] h-[100%]"
                src="../../assets/img/scholarship/Min Khant Tin (Webster).jpg"
                alt=""
              />
            </div>
            <div class="md:ml-[35px] ssm:ml-4">
              <h1
                class="text-[#205887] text-[15px] font-[600] uppercase shadow-title"
              >
                50% SCHOLARSHIP ACHIEVER
              </h1>
              <h1 class="text-[#205887] mt-3 text-[13px]">
                <span
                  class="text-[#FE005F] text-[12px] font-[700] uppercase shadow-title"
                  >Min Khant Tin
                </span>
                <span class="text-[11px] font-[400] uppercase shadow-title"
                  >(bS IN Business)</span
                >
                <h1
                  class="text-[11px] text-[#205887] mt-3 font-[400] uppercase shadow-title"
                >
                  Horizon int'l School (Mandalay)
                </h1>
              </h1>
              <h1
                class="text-[#FE005F] font-[600] uppercase text-[11.5px] mt-3 shadow-title"
              >
                James Cook University (Singapore)
              </h1>
            </div>
          </div>
        </div>
        <!-- <AchieverCard />
        <AchieverCard /> -->
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
