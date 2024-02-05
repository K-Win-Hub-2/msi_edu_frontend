<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import VisionCard from "../../components/AboutUs/VisionCard.vue";
import { Pagination, Autoplay, EffectCoverflow } from "swiper";
import { getShortMonth, getDay } from "@/utils/date.js";
import { universities } from "../../mocks/universities";
import { events } from "../../mocks/events";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

const visions = [
  {
    title: "vision",
    description: "Investing in People",
  },
  {
    title: "Mission",
    description: "Development of Population Quality",
  },
  {
    title: "Strategy",
    description: "Knowledge, Career and Family",
  },
];

const start = ref(true);
const end = ref(false);

// swiper start
const modules = [Autoplay, EffectCoverflow];

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
      spaceBetween: 40,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3.7,
      spaceBetween: 50,
    },
  },
  // pagination: {
  //   el: ".swiper-home-event-pagination",
  //   clickable: true,
  // },
  coverflowEffect: {
    rotate: 0,
    stretch: 18,
    depth: 90,
    modifier: 5,
    slideShadows: false,
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
};
// swiper end
</script>

<template>
  <div>
    <swiper
      :effect="'coverflow'"
      :autoplay="swiperOptions.autoplay"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :breakpoints="swiperOptions.breakpoints"
      :modules="modules"
      :coverflowEffect="swiperOptions.coverflowEffect"
      :grabCursor="false"
      :centeredSlides="true"
      class="flex justify-center ml-[10%]"
      id="homeEventSwiper"
    >
      <template v-for="vision in visions">
        <swiper-slide class="my-3">
          <VisionCard :vision="vision" class="lg:w-[500px]" />
        </swiper-slide>
      </template>
    </swiper>
    <div
      class="swiper-home-event-pagination mx-auto flex justify-center h-[50px]"
    ></div>
  </div>
</template>
