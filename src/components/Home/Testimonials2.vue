<script setup>
import { onMounted, ref } from "vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import TestimonialCard2 from "@/components/Home/TestimonialCard2.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";

const currentTestimonials = ref([])

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { scholarTestimonials } from "../../mocks/testimonials";

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
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
};
// swiper end

onMounted(() => {
  currentTestimonials.value = [...scholarTestimonials]
})
</script>

<template>
  <div>
    <h1 class="cus-heading text-cus-primary text-center capitalize mb-12">
      Testimonials
    </h1>
    <div class="relative">
      <swiper
        :autoplay="swiperOptions.autoplay"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        :navigation="swiperOptions.navigation"
        :modules="modules"
      >
        <template v-for="testimonial in currentTestimonials">
          <swiper-slide class="my-3">
            <TestimonialCard2 :info="testimonial" />
          </swiper-slide>
        </template>
      </swiper>
      <div
        class="absolute top-1/2 -translate-y-1/2 -left-6 sm:left-12 md:-left-10 lg:-left-24 z-20 swiper-button-prev-unique hover:cursor-pointer"
      >
        <ChevronLeftIcon
          :class="{ 'opacity-50': start }"
          class="w-12 h-12 text-cus-primary"
        />
      </div>
      <div
        class="absolute top-1/2 -translate-y-1/2 -right-6 sm:right-12 md:-right-10 lg:-right-24 z-20 swiper-button-next-unique hover:cursor-pointer"
      >
        <ChevronRightIcon
          :class="{ 'opacity-50': end }"
          class="w-12 h-12 text-cus-primary"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
