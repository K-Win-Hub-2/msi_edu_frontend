<template>
  <div class="">
    <h1
      class="mt-[110px] lg:text-[40px] md:text-[32px] text-[24px] shadow-title text-[#FE005F] text-center lg:mb-[133px] mb-[80px] md:mb-[100px] uppercase md:font-[600] font-[530] lg:font-[700]"
    >
      50% SCHOLARSHIP ACHIEVERS
    </h1>
    <div class="flex justify-evenly items-center">
      <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-12">
        <div class="w-[517px] h-[320px] card-achiever py-[94px] pl-[52px]">
          <div class="flex items-center">
            <div class="w-[131px] h-[131px]">
              <img
                class="rounded-full w-[100%] h-[100%]"
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt=""
              />
            </div>
            <div class="ml-[35px]">
              <h1 class="text-[#205887] text-[14px] font-[600] uppercase">
                100% sCHOLARSHIP ACHIEVER
              </h1>
              <h1 class="text-[#205887] mt-3 text-[12px]">
                <span class="text-[#FE005F] font-[700] uppercase"
                  >MIN KHANT TIN</span
                >
                <span class="text-[11px] font-[400] uppercase"
                  >(bS IN COMPUTER SCIENCE)</span
                >
                <h1
                  class="text-[11px] text-[#205887] mt-3 font-[400] uppercase"
                >
                  HORIZON INTL SCHOOL (YANGON)
                </h1>
              </h1>
              <h1
                class="text-[#FE005F] text-[12px] font-[600] uppercase shadow-title mt-3"
              >
                WEBSTER UNIVERSITY (U.S.A., THAILAND CAMPUS)
              </h1>
            </div>
          </div>
          <div class="mt-7 ml-[166px]">
            <Button
              class="px-[20px] py-[4px] rounded-[20px] text-[12px]"
              type="gradient"
              data-te-toggle="modal"
              data-te-target="#appointmentFormModal"
              data-te-ripple-init
              data-te-ripple-color="light"
              >SeeMore</Button
            >
          </div>
        </div>
        <div class="w-[517px] h-[320px] card-achiever py-[94px] pl-[52px]">
          <div class="flex items-center">
            <div class="w-[131px] h-[131px]">
              <img
                class="rounded-full w-[100%] h-[100%]"
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt=""
              />
            </div>
            <div class="ml-[35px]">
              <h1 class="text-[#205887] text-[14px] font-[600]">
                100% sCHOLARSHIP ACHIEVER
              </h1>
              <h1 class="text-[#205887] mt-3 text-[12px]">
                <span class="text-[#FE005F] font-[700] uppercase"
                  >MIN KHANT TIN</span
                >
                <span class="text-[11px] font-[400] uppercase"
                  >(bS IN COMPUTER SCIENCE)</span
                >
                <h1
                  class="text-[11px] text-[#205887] mt-3 font-[400] uppercase"
                >
                  HORIZON INTL SCHOOL (YANGON)
                </h1>
              </h1>
              <h1
                class="text-[#FE005F] text-[12px] font-[600] uppercase shadow-title mt-3"
              >
                WEBSTER UNIVERSITY (U.S.A., THAILAND CAMPUS)
              </h1>
            </div>
          </div>
          <div class="mt-7 ml-[166px]">
            <Button
              class="px-[20px] py-[4px] rounded-[20px] text-[12px]"
              type="gradient"
              data-te-toggle="modal"
              data-te-target="#appointmentFormModal"
              data-te-ripple-init
              data-te-ripple-color="light"
              >SeeMore</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "../partials/Button.vue";
</script>

<style>
.shadow-title {
  text-shadow: 0px 04px 04px rgba(0, 0, 0, 0.15);
}
</style>
