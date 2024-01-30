<template>
  <div class="mb-12">
    <div class="">
      <div class="lg:pt-[90px] lg:pb-[40px] md:py-[30px] ssm:pt-[20px]">
        <h1
          class="text-[#FE005F] lg:text-[48px] md:text-[32px] text-[24px] leading-[43.5px] text-center md:font-[600] font-[530] shadow-title"
        >
          25%, 50% SCHOLARSHIP ACHIEVERS
        </h1>
        <h1
          class="text-[#205887] lg:text-[32px] md:text-[24px] text-[20px] lg:py-6 md:py-3 leading-[43.5px] text-center md:font-[600] lg:font-[700] font-[530] uppercase shadow-title"
        >
          UON KDU university (MALAYSIA)
        </h1>
      </div>
    </div>
    <div class="flex justify-evenly items-center">
      <!-- carousel start -->
      <div class="relative container lg:min-w-[1350px]">
        <!-- <swiper
          :pagination="{
            clickable: true,
          }"
          @slideChange="onSlideChange"
          :breakpoints="swiperOptions.breakpoints"
          :navigation="swiperOptions.navigation"
          :modules="modules"
          class="mySwiper"
        > -->
        <!-- slider one -->
        <div class="flex justify-center py-12">
          <div
            class="lg:max-w-[1350px] max-w-[610px] lg:min-w-[1350px] md:min-w-[850px]"
          >
            <div
              v-if="data"
              class="flex flex-wrap justify-center md:gap-x-[12px] lg:gap-8 sm:gap-x-8 md:gap-y-[15px] ssm:gap-y-[15px] lg:gap-y-[69px]"
            >
              <div class="" v-for="data in data.scholarAchiever" :key="data.id">
                <BusinessCard2550 :data="data" />
              </div>
            </div>
          </div>
        </div>
        <!-- <swiper-slide class="flex justify-center py-12">
          <div
            class="lg:max-w-[1094px] max-w-[610px] lg:min-w-[1094px] h-[346]"
          >
            <div
              class="flex flex-wrap justify-center md:gap-x-[12px] lg:gap-8 sm:gap-x-8 gap-y-[69px]"
            >
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
            </div>
          </div>
        </swiper-slide> -->
        <!-- <swiper-slide class="flex justify-center py-12">
          <div
            class="lg:max-w-[1094px] max-w-[610px] lg:min-w-[1094px] h-[346]"
          >
            <div
              class="flex flex-wrap justify-center md:gap-x-[12px] lg:gap-8 sm:gap-x-8 gap-y-[69px]"
            >
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
              <BusinessCard />
            </div>
          </div>
        </swiper-slide> -->
        <!-- </swiper>
        <div
          class="swiper-business-card-button-prev-unique absolute sm:hidden md:block left-0 md:left-4 top-1/2 -translate-y-1/2"
        >
          <ChevronLeftIcon
            :class="{ 'opacity-50': start }"
            class="w-12 h-12 text-cus-primary cursor-pointer"
          />
        </div>
        <div
          class="swiper-business-card-button-next-unique absolute sm:hidden md:block md:right-4 right-0 top-1/2 -translate-y-1/2"
        >
          <ChevronRightIcon
            :class="{ 'opacity-50': end }"
            class="w-12 h-12 text-cus-primary cursor-pointer"
          />
        </div> -->
      </div>
      <!-- carousel end -->
    </div>
  </div>
</template>

<script setup>
import BusinessCard2550 from "../../components/Scholarship/ScholarBusineesCard/BusinessCard2550.vue";
import BusinessCard from "./BusinessCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Pagination, Navigation } from "swiper";
import SliderScho from "./SliderScho.vue";
import { onMounted, ref } from "vue";
import getData from "../../axios/getData";
const modules = [Navigation, Pagination];
const url = ref("scholarship-achievers/scholar-type/1");
const { data, fetchData } = getData();

const start = ref(true);
const end = ref(false);

// swiper start

const onSlideChange = (event) => {
  if (event.isEnd) {
    end.value = true;
  } else {
    end.value = false;
  }

  if (event.isBeginning) {
    start.value = true;
  } else {
    start.value = false;
  }
};

const swiperOptions = {
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-business-card-button-next-unique",
    prevEl: ".swiper-business-card-button-prev-unique",
  },
};
onMounted(() => {
  fetchData(url.value);
});
</script>

<style>
.shadow-title {
  text-shadow: 0px 03px 03px rgba(0, 0, 0, 0.15);
}
</style>
