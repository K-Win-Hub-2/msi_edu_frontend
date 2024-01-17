<script setup>
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination } from "swiper";
import { useUniversityStore } from "../../../stores/universities";
import { onMounted, ref } from "vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import UniversityCard from "./UniversityCard.vue";
import { featuredUniversities } from "../../../mocks/universities";
const universities = ref();
const universityStore = useUniversityStore();

const fetchData = async () => {
  const res = await universityStore.fetchUniversities();

  const { university } = res.data;
  universities.value = university;
  console.log("universities", data);

  return { data, error, fetchData };
};

onMounted(() => {
  fetchData();
});
const start = ref(true);
const end = ref(false);

// swiper start
const modules = [Navigation, Autoplay, Pagination];

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
    // // when window width is >= 640px
    // 1280: {
    //   slidesPerView: 4,
    //   spaceBetween: 50,
    // },
  },
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};
// swiper end
</script>

<template>
  <div>
    <div class="relative">
      <swiper
        :autoplay="swiperOptions.autoplay"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        :navigation="swiperOptions.navigation"
        :pagination="swiperOptions.pagination"
        :modules="modules"
      >
        <template v-for="uni in universities" :key="uni">
          <swiper-slide>
            <UniversityCard :university="uni" />
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
