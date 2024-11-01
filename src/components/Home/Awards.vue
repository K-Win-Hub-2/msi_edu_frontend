<script setup>
import { onMounted, ref } from "vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import AwardCard from "../../components/Home/AwardCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, EffectCoverflow } from "swiper";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { awards } from "../../mocks/awards";

const start = ref(true);
const end = ref(false);
const currentAwards = ref([]);
const currentActiveAward = ref({});

// swiper start
const modules = [Navigation, Autoplay, EffectCoverflow];

const onSlideChange = (event) => {
  currentActiveAward.value = awards[event.activeIndex];

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
  navigation: {
    nextEl: ".swiper-home-award-button-next-unique",
    prevEl: ".swiper-home-award-button-prev-unique",
  },
  coverflowEffect: {
    rotate: 0,
    stretch: -5,
    depth: 100,
    modifier: 3,
    slideShadows: false,
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
};
// swiper end

onMounted(() => {
  currentAwards.value = [...awards];
  currentActiveAward.value = awards[4];
});
</script>

<template>
  <div>
    <h1
      class="cus-heading text-center uppercase md:mb-12 text-shadow cus-shadow-color"
    >
      <span
        class="text-cus-primary md:text-[40px] ssm:text-md text-shadow-sm cus-shadow-color"
        >22 awards</span
      >
      <span
        class="text-cus-secondary md:text-4xl ssm:text-md text-shadow-sm cus-shadow-color"
      >
        Showcase of Excellence
      </span>
    </h1>
    <div class="relative flex justify-between items-center mb-3">
      <div
        class="absolute cus-glass-card cus-rounded shadow w-full h-[60%]"
      ></div>
      <div
        class="swiper-home-award-button-prev-unique hover:cursor-pointer z-[20]"
      >
        <ChevronLeftIcon
          :class="{ 'opacity-50': start }"
          class="w-12 h-12 text-cus-primary"
        />
      </div>
      <swiper
        :effect="'coverflow'"
        :autoplay="swiperOptions.autoplay"
        :space-between="10"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        :navigation="swiperOptions.navigation"
        :modules="modules"
        :coverflowEffect="swiperOptions.coverflowEffect"
        :grabCursor="true"
        :centeredSlides="true"
        initialSlide="4"
      >
        <template v-for="award in currentAwards">
          <swiper-slide class="my-3 shrink-0">
            <AwardCard :image="award.photo" class="select-none" />
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
    <div class="flex flex-col justify-center items-center capitalize space-y-3">
      <h4 class="text-cus-primary text-xl select-none">
        <!-- {{ currentActiveAward.country }} ({{ currentActiveAward.university }}) -->
        {{ currentActiveAward.description }}
      </h4>
      <h3 class="text-cus-primary text-2xl select-none font-semibold">
        {{ currentActiveAward.title }}
      </h3>
      <h4 class="text-cus-primary text-xl select-none">
        {{ currentActiveAward.year }}
      </h4>
    </div>
  </div>
</template>

<style></style>
