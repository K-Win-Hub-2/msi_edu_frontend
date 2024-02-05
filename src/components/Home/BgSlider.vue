<template>
  <div class="group">
    <swiper
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :breakpoints="swiperOptions.breakpoints"
      :navigation="swiperOptions.navigation"
      :modules="modules"
      :autoplay="true"
    >
      <swiper-slide>
        <div
          class="bg-[url('@/assets/img/home/hero.jpg')] w-full ssm:h-[230px] md:h-[600px] lg:h-[800px] no-repeat bg-cover bg-center"
        ></div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="bg-[url('@/assets/img/home/4.png')] w-full ssm:h-[230px] md:h-[600px] lg:h-[800px] no-repeat bg-cover"
        ></div>
      </swiper-slide>
      <!-- <swiper-slide>
        <div
          class="bg-[url('@/assets/img/test/1.jpg')] w-full h-[800px] no-repeat bg-cover"
        ></div>
      </swiper-slide> -->
    </swiper>
    <div
      class="absolute top-1/2 -translate-y-1/2 left-3 z-20 swiper-button-prev-unique cursor-pointer opacity-0 group-hover:opacity-100"
    >
      <ChevronLeftIcon
        :class="{ 'opacity-50': start }"
        class="w-12 h-12 text-cus-primary"
      />
    </div>
    <div
      class="absolute top-1/2 -translate-y-1/2 right-3 z-20 swiper-button-next-unique cursor-pointer opacity-0 group-hover:opacity-100"
    >
      <ChevronRightIcon
        :class="{ 'opacity-50': start }"
        class="w-12 h-12 text-cus-primary"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const start = ref(true);
const end = ref(false);

// swiper start
const modules = [Navigation, Autoplay];

const onSwiper = (swiper) => {
  console.log(swiper);
};

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
  autoplay: {
    delay: 7000,
  },
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};
// swiper end
</script>

<style scoped></style>
