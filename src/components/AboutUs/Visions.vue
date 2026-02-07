<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import VisionCard from "../../components/AboutUs/VisionCard.vue";
import { Autoplay, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

const originalVisions = [
  { title: "Vision", description: "Investing in People" },
  { title: "Mission", description: "Development of Population Quality" },
  { title: "Strategy", description: "Knowledge, Career and Family" },
];

// 1. Double the array to ensure Swiper has enough slides to loop infinitely
const visions = computed(() => [...originalVisions, ...originalVisions]);

const modules = [Autoplay, EffectCoverflow];

const swiperOptions = {
  watchSlidesProgress: true, 
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  
  // 2. Modern Swiper property to handle cloning for small datasets
  loopedSlides: 3, 
  loopAdditionalSlides: 3,

  slidesPerView: "auto", 
  
  coverflowEffect: {
    rotate: 0,
    stretch: -40, // Pulled closer for a tighter stack
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },

  speed: 800, // Slightly slower for a smoother '360' transition

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: { spaceBetween: 20 },
    768: { spaceBetween: 30 },
    1024: { spaceBetween: 40 },
  },
};
</script>

<template>
  <div class="w-full py-10 overflow-hidden">
    <swiper
      v-bind="swiperOptions"
      :effect="'coverflow'"
      :modules="modules"
      class="vision-swiper"
    >
      <swiper-slide 
        v-for="(vision, index) in visions" 
        :key="index" 
        class="flex justify-center my-5"
        style="width: auto;" 
      >
        <VisionCard
          :vision="vision"
          class="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] bg-gradient-to-r from-cus-primary to-cus-secondary text-white rounded-3xl shadow-2xl transition-transform duration-500"
        />
      </swiper-slide>
    </swiper>
    
    <div class="swiper-home-event-pagination flex justify-center mt-8"></div>
  </div>
</template>

<style scoped>
.vision-swiper {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 50px;
}

/* Forces the coverflow calculation to look correct on load */
.swiper-slide-active {
  z-index: 10;
}
</style>