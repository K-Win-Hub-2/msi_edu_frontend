<script setup>
import { onMounted, ref } from "vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import UniversityCard from "@/components/Home/UniversityCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import { universitiesImages } from "../../mocks/universities";

const currentUniversities = ref([]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    873: {
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
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-hero-university-next-unique",
    prevEl: ".swiper-hero-university-prev-unique",
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
};
// swiper end

onMounted(() => {
  currentUniversities.value = [...universitiesImages];
  console.log(currentUniversities.value);
});
</script>

<template>
  <div class="bg-white bg-opacity-70 p-2 cus-rounded group max-h-[200px]">
    <div class="flex items-center justify-between">
      <div
        class="swiper-hero-university-prev-unique hover:cursor-pointer w-[50px] shrink-0"
      >
        <ChevronLeftIcon
          :class="{ 'opacity-50': start }"
          class="hidden group-hover:block md:w-12 md:h-12 ssm:w-8 ssm:h-8 text-cus-primary"
        />
      </div>
      <swiper
        :autoplay="swiperOptions.autoplay"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        :navigation="swiperOptions.navigation"
        :modules="modules"
        class="ssm:max-w-[180px] sm:max-w-[240px] md:max-w-[700px] lg:max-w-[1200px]"
      >
        <template v-for="university in currentUniversities">
          <swiper-slide class="my-3">
            <UniversityCard
              :image="university.image"
              :description="university.description"
            />
          </swiper-slide>
        </template>
      </swiper>

      <div
        class="swiper-hero-university-next-unique hover:cursor-pointer w-[50px] shrink-0"
      >
        <ChevronRightIcon
          :class="{ 'opacity-50': end }"
          class="hidden group-hover:block md:w-12 md:h-12 ssm:w-8 ssm:h-8 text-cus-primary"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
