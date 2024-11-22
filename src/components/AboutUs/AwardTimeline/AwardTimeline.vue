<script setup>
import { onMounted, ref } from "vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

const currentAwards = ref([]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { awards } from "../../../mocks/awards";
import AwardTimelineCard from "./AwardTimelineCard.vue";

const start = ref(true);
const end = ref(false);

// swiper start
const modules = [Navigation];

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
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-home-award-button-next-unique",
    prevEl: ".swiper-home-award-button-prev-unique",
  },
};
// swiper end

onMounted(() => {
  currentAwards.value = [...awards];
});
</script>

<template>
  <div>
    <h1 class="cus-heading text-center uppercase mb-12">
      <!-- <span class="text-cus-primary text-7xl">22 awards</span> -->
      <span class="text-cus-secondary text-4xl"> Showcase of Excellence </span>
    </h1>
    <div class="relative flex justify-between items-center mb-3">
      <div
        class="swiper-home-award-button-prev-unique hover:cursor-pointer z-[20]"
      >
        <ChevronLeftIcon
          :class="{ 'opacity-50': start }"
          class="w-12 h-12 text-cus-primary"
        />
      </div>
      <swiper
        :autoplay="swiperOptions.autoplay"
        :space-between="10"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        :navigation="swiperOptions.navigation"
        :modules="modules"
        :grabCursor="true"
        :centeredSlides="false"
        initialSlide="4"
      >
        <template v-for="(award, index) in currentAwards" :key="index">
          <swiper-slide class="my-3">
            <AwardTimelineCard
              :image="award.photo"
              :content="award.title"
              :year="award.year"
              :description="award.description"
              :reverse="index % 2 === 0 ? false : true"
            />
          </swiper-slide>
        </template>
      </swiper>

      <div
        class="swiper-home-award-button-next-unique hover:cursor-pointer z-[20]"
      >
        <ChevronRightIcon
          :class="{ 'opacity-50': end }"
          class="w-12 h-12 text-cus-primary"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
