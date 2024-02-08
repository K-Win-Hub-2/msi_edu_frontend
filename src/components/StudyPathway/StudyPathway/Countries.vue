<template>
  <h3 class="cus-heading text-cus-secondary text-center capitalize mb-12">
    Countries
  </h3>
  <div
    class="flex flex-wrap items-center gap-6 justify-center max-w-[1068px]"
    v-if="data"
  >
    <div class="" v-for="data in data.countries" :key="data.id">
      <Country :data="data" />
    </div>
    <div class="mb-[40px]">
      <a
        class="text-center flex justify-center bg-blue-200 country-more-bg items-center w-[140px] h-[140px] rounded-[50%]"
      >
        <p class="country-more">+ MANY MORE COUNTRIES</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import Country from "./Country.vue";
import { onMounted, ref } from "vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
const url = ref("country-lists");
const { fetchData, data } = getData();

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import getData from "../../../axios/getData";
import CountryVue from "./Country.vue";

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

onMounted(() => {
  fetchData(url.value);
});
// swiper end
</script>
