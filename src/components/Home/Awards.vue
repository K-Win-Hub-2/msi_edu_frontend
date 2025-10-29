<script setup>
import { onMounted, ref } from "vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import AwardCard from "../../components/Home/AwardCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { awards } from "../../mocks/awards";

const start = ref(true);
const end = ref(false);
const currentAwards = ref([]);
const currentActiveAward = ref({});
const totalAward = ref();

const modules = [Navigation, Autoplay];

const onSlideChange = (event) => {
  // Use a null check or default index in case awards is not fully loaded or smaller than expected
  currentActiveAward.value = currentAwards.value[event.activeIndex] || {};
  start.value = event.isBeginning;
  end.value = event.isEnd;
};

const swiperOptions = {
  // initialSlide should be calculated dynamically if possible, but fixed for now
  initialSlide: 1, // Adjusted to 1 for better center start on small screens
  loop: false,
  centeredSlides: true,
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

onMounted(async () => {
  try {
    const response = await axios.get("award-total");
    totalAward.value = response.data.data.awards;
  } catch (error) {
    console.error("Failed to fetch award:", error);
  }
  currentAwards.value = [...awards];
  currentActiveAward.value = awards[swiperOptions.initialSlide] || awards[0];
});
</script>

<template>
  <div class="mt-5 w-full max-w-[1600px] mx-auto px-0 sm:px-6">
    <h1
      class="px-4 mb-6 text-center uppercase cus-heading sm:mb-10 text-shadow cus-shadow-color"
    >
      <span class="block font-bold text-cus-primary xs:text-3xl sm:text-5xl">
        <span class="text-7xl md:text-7xl xs:text-5xl sm:text-6xl lg:text-7xl">
          {{ totalAward }}
        </span>
        <span class="text-xl text-cus-primary xs:text-2xl sm:text-4xl">
          awards
        </span>
      </span>
      <span class="block text-base text-cus-secondary sm:text-lg md:text-2xl">
        Showcase of Excellence
      </span>
    </h1>

    <div class="relative flex items-center justify-center mt-5 mb-3">
      <div
        class="absolute left-0 z-20 pl-2 swiper-home-award-button-prev-unique hover:cursor-pointer sm:relative sm:pl-0 sm:order-first"
      >
        <ChevronLeftIcon
          :class="{ 'opacity-50': start }"
          class="w-8 h-8 transition sm:w-10 sm:h-10 text-cus-primary"
        />
      </div>

      <swiper
        :modules="modules"
        :centeredSlides="true"
        :initial-slide="swiperOptions.initialSlide"
        :navigation="swiperOptions.navigation"
        :autoplay="swiperOptions.autoplay"
        :loop="swiperOptions.loop"
        :effect="swiperOptions.effect"
        @slideChange="onSlideChange"
        :breakpoints="{
          320: { slidesPerView: 1.3, spaceBetween: 15 },
          480: { slidesPerView: 1.5, spaceBetween: 20 },
          640: { slidesPerView: 2.2, spaceBetween: 20 },
          768: { slidesPerView: 2.5, spaceBetween: 25 },
          1024: { slidesPerView: 3.5, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }"
        class="z-10 w-full px-10 sm:px-0"
      >
        <template v-for="(award, index) in currentAwards" :key="index">
          <swiper-slide class="my-3 transition-transform duration-300 shrink-0">
            <div
              class="flex justify-center w-full award-card h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] mb-5"
            >
              <AwardCard
                :image="award.photo"
                class="w-full max-w-[150px] sm:max-w-xs md:max-w-sm select-none"
              />
            </div>
          </swiper-slide>
        </template>
      </swiper>

      <div
        class="absolute right-0 z-20 pr-2 swiper-home-award-button-next-unique hover:cursor-pointer sm:relative sm:pr-0 sm:order-last"
      >
        <ChevronRightIcon
          :class="{ 'opacity-50': end }"
          class="w-8 h-8 transition sm:w-10 sm:h-10 text-cus-primary"
        />
      </div>
    </div>

    <div
      class="flex flex-col items-center justify-center px-4 space-y-1 text-center capitalize sm:space-y-2"
    >
      <h4 class="text-sm select-none sm:text-base md:text-xl text-cus-primary">
        {{ currentActiveAward.description }}
      </h4>
      <h3
        class="text-base font-semibold select-none sm:text-xl md:text-2xl text-cus-primary"
      >
        {{ currentActiveAward.title }}
      </h3>
      <h4 class="text-sm select-none sm:text-base md:text-xl text-cus-primary">
        {{ currentActiveAward.year }}
      </h4>
    </div>
  </div>
</template>

<style scoped>
/* Mobile adjustments for slide scaling */
.swiper-slide {
  transform: scale(0.9); /* Slightly increased scale for better visibility */
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.swiper-slide-active {
  transform: scale(
    1.1
  ); /* Reduced active scale for less aggressive jump on mobile */
  z-index: 10;
}

/* Tablet and larger adjustments */
@media (min-width: 640px) {
  .swiper-slide {
    transform: scale(0.9);
  }
  .swiper-slide-active {
    transform: scale(
      1.3
    ); /* Restored original or slightly reduced scale for tablet/desktop */
  }
}

/* Original rule set for desktop (768px and up) is removed as 640px handles it well */
/* @media (min-width: 768px) {
    .swiper-slide {
        transform: scale(0.9);
    }
    .swiper-slide-active {
        transform: scale(1.6);
    }
} */
</style>