<script setup>
const props = defineProps(["data"]);
</script>
<template>
  <div
    class="md:w-[517px] md:h-[320px] card-achiever md:py-[94px] ssm:py-[40px] md:px-[32px]"
  >
    <div class="flex items-center">
      <div class="w-[131px] h-[131px]">
        <img
          class="rounded-full w-[100%] h-[100%]"
          :src="props.data.image"
          alt=""
        />
      </div>
      <div class="md:ml-[35px] ssm:ml-4">
        <h1
          class="text-[#205887] text-[15px] font-[600] uppercase shadow-title"
        >
          100% sCHOLARSHIP ACHIEVER
        </h1>
        <h1 class="text-[#205887] mt-3 text-[13px]">
          <span
            class="text-[#FE005F] text-[12px] font-[700] uppercase shadow-title"
            >{{ props.data.name }}</span
          >
          <span class="text-[11px] font-[400] uppercase shadow-title"
            >(bS IN COMPUTER SCIENCE)</span
          >
          <h1
            class="text-[11px] text-[#205887] mt-3 font-[400] uppercase shadow-title"
          >
            HORIZON INTL SCHOOL (YANGON)
          </h1>
        </h1>
        <h1
          class="text-[#FE005F] font-[600] uppercase text-[11.5px] mt-3 shadow-title"
        >
          WEBSTER UNIVERSITY (U.S.A., THAILAND CAMPUS)
        </h1>
      </div>
    </div>
  </div>
</template>
