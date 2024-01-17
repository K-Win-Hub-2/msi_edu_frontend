<template>
  <div class="relative">
    <swiper
      :space-between="50"
      @slideChange="onSlideChange"
      :autoplay="swiperOptions.autoplay"
      :breakpoints="swiperOptions.breakpoints"
      :navigation="swiperOptions.navigation"
      :modules="modules"
    >
      <template v-for="image in universitiesImages">
        <swiper-slide>
          <img :src="image.image" />
        </swiper-slide>
      </template>
    </swiper>
    <div
      class="absolute top-1/2 -translate-y-1/2 -left-12 md:-left-14 lg:-left-14 z-20 swiper-button-prev-universities-name hover:cursor-pointer"
    >
      <ChevronLeftIcon
        :class="{ 'opacity-50': start }"
        class="w-12 h-12 text-cus-primary"
      />
    </div>
    <div
      class="absolute top-1/2 -translate-y-1/2 -right-12 md:-right-14 lg:-right-14 z-20 swiper-button-next-universities-name hover:cursor-pointer"
    >
      <ChevronRightIcon
        :class="{ 'opacity-50': end }"
        class="w-12 h-12 text-cus-primary"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import { universitiesImages } from "../../mocks/universities";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const start = ref(true);
const end = ref(false);

// swiper start
const modules = [Navigation, Autoplay];

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
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-universities-name",
    prevEl: ".swiper-button-prev-universities-name",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};
// swiper end
</script>
