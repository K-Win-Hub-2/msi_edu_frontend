<script setup>
import { onMounted, ref } from "vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import AwardCard from "../../components/Home/AwardCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { awards } from "../../mocks/awards";

const start = ref(true);
const end = ref(false);
const currentAwards = ref([]);
const currentActiveAward = ref({});

const modules = [Navigation, Autoplay];

const onSlideChange = (event) => {
  currentActiveAward.value = awards[event.activeIndex];
  start.value = event.isBeginning;
  end.value = event.isEnd;
};

const swiperOptions = {
  initialSlide: 2, 
  loop: false,
  centeredSlides: true,
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-home-award-button-next-unique",
    prevEl: ".swiper-home-award-button-prev-unique",
  },
  effect: "slide",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};

onMounted(() => {
  currentAwards.value = [...awards];
  currentActiveAward.value = awards[1];
});
</script>

<template>
  <div class="w-full max-w-[1600px] mx-auto px-2">
    <!-- Title -->
    <h1 class="text-center uppercase cus-heading md:mb-12 text-shadow cus-shadow-color">
      <span class="text-cus-primary md:text-[40px] ssm:text-md text-shadow-sm">
        24 awards
      </span>
      <span class="text-cus-secondary md:text-4xl ssm:text-md text-shadow-sm">
        Showcase of Excellence
      </span>
    </h1>

    <!-- Navigation + Swiper -->
    <div class="relative flex items-center justify-between mb-3">
      <div class="absolute cus-glass-card cus-rounded shadow w-full h-[90%]"></div>

      <!-- Prev Button -->
      <div class="swiper-home-award-button-prev-unique hover:cursor-pointer z-[20]">
        <ChevronLeftIcon :class="{ 'opacity-50': start }" class="w-12 h-12 text-cus-primary" />
      </div>

      <!-- Swiper -->
      <swiper
        :modules="modules"
        :slides-per-view="swiperOptions.slidesPerView"
        :centeredSlides="swiperOptions.centeredSlides"
        :initial-slide="swiperOptions.initialSlide"
        :space-between="swiperOptions.spaceBetween"
        :navigation="swiperOptions.navigation"
        :autoplay="swiperOptions.autoplay"
        :loop="swiperOptions.loop"
        :effect="swiperOptions.effect"
        @slideChange="onSlideChange"
        class="z-10"
      >
        <template v-for="(award, index) in currentAwards" :key="index">
          <swiper-slide class="my-3 transition-transform duration-300 shrink-0">
            <div class="flex justify-center w-full award-card">
              <AwardCard :image="award.photo" class="w-full max-w-xs select-none" />
            </div>
          </swiper-slide>
        </template>
      </swiper>

      <!-- Next Button -->
      <div class="swiper-home-award-button-next-unique hover:cursor-pointer z-[20]">
        <ChevronRightIcon :class="{ 'opacity-50': end }" class="w-12 h-12 text-cus-primary" />
      </div>
    </div>

    <!-- Award Info -->
    <div class="flex flex-col items-center justify-center space-y-3 capitalize">
      <h4 class="text-xl select-none text-cus-primary">
        {{ currentActiveAward.description }}
      </h4>
      <h3 class="text-2xl font-semibold select-none text-cus-primary">
        {{ currentActiveAward.title }}
      </h3>
      <h4 class="text-xl select-none text-cus-primary">
        {{ currentActiveAward.year }}
      </h4>
    </div>
  </div>
</template>

<style scoped>
.swiper-slide {
  transform: scale(0.9);
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.swiper-slide-active {
  transform: scale(1.6);
  z-index: 10;
}
</style>
