<template>
  <div class="mb-[110px]">
    <div class="">
      <div class="py-[90px]">
        <h1
          class="text-[#FE005F] lg:text-[40px] md:text-[32px] text-[24px] shadow-title leading-[43.5px] text-center font-[700]"
        >
          STUDY GRANT SGD (1,500-1,400)
        </h1>
        <h1
          class="text-[#205887] text-2xl shadow-title lg:text-[32px] md:text-[24px] text-[20px] my-8 leading-[43.5px] text-center font-[700] uppercase"
        >
          MANAGEMENT DEVELOPMENT INSTITUTE OF SINGAPORE (MDIS)
        </h1>
      </div>
    </div>
    <div class="flex justify-evenly items-center">
      <!-- carousel start -->
      <div class="relative container min-w-[1350px]">
        <swiper
          :pagination="{
            clickable: true,
          }"
          @slideChange="onSlideChange"
          :breakpoints="swiperOptions.breakpoints"
          :navigation="swiperOptions.navigation"
          :modules="modules"
          class="mySwiper"
        >
          <!-- slider one -->
          <swiper-slide class="flex justify-center py-12">
            <div class="max-w-[1350px] min-w-[1350px] h-[346]">
              <div
                class="flex flex-wrap justify-center md:gap-x-[12px] lg:gap-8 gap-y-[69px]"
              >
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="flex justify-center py-12">
            <div class="max-w-[1094px] min-w-[1094px] h-[346]">
              <div
                class="flex flex-wrap justify-center md:gap-x-[12px] lg:gap-8 gap-y-[69px]"
              >
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="flex justify-center py-12">
            <div class="max-w-[1094px] min-w-[1094px] h-[346]">
              <div
                class="flex flex-wrap justify-center md:gap-x-[12px] lg:gap-8 gap-y-[69px]"
              >
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div
          class="swiper-business-card-1500-button-prev-unique absolute left-0 top-1/2 -translate-y-1/2"
        >
          <ChevronLeftIcon
            :class="{ 'opacity-50': start }"
            class="w-12 h-12 text-cus-primary cursor-pointer"
          />
        </div>
        <div
          class="swiper-business-card-1500-button-next-unique absolute right-0 top-1/2 -translate-y-1/2"
        >
          <ChevronRightIcon
            :class="{ 'opacity-50': end }"
            class="w-12 h-12 text-cus-primary cursor-pointer"
          />
        </div>
      </div>
      <!-- carousel end -->
    </div>
  </div>
</template>

<script setup>
import BusinessCard from "./BusinessCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Pagination, Navigation } from "swiper";
import SliderScho from "./SliderScho.vue";
import { ref } from "vue";
const modules = [Navigation, Pagination];

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
    nextEl: ".swiper-business-card-1500-button-next-unique",
    prevEl: ".swiper-business-card-1500-button-prev-unique",
  },
};
</script>

<style></style>
