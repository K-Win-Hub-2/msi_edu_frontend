<template>
  <div class="">
    <h1
      class="lg:mt-[110px] md:mt-[20px] lg:text-[40px] md:text-[32px] text-[24px] shadow-title text-[#FE005F] text-center lg:mb-[133px] mb-[40px] md:mb-[40px] uppercase md:font-[600] font-[530] lg:font-[700]"
    >
      50% SCHOLARSHIP ACHIEVERS
    </h1>
    <div
      class="flex justify-between items-center lg:min-w-[1300px] md:min-w-[700px] ssm:max-w-[320px] sm:w-auto overflow-hidden container relative"
    >
      <swiper
        v-if="scholarships"
        :pagination="{
          clickable: true,
        }"
        space-between="30
                  "
        :breakpoints="swiperOptions.breakpoints"
        @slideChange="onSlideChange"
        :navigation="swiperOptions.navigation"
        :modules="modules"
        class="mySwiper flex justify-center lg:min-w-[1100px] md:min-w-[600px] ssm:max-w-[320px]"
      >
        <!-- slider one -->

        <swiper-slide
          class="flex justify-center py-12"
          v-for="d in scholarships"
          :key="d"
        >
          <AchieverCard :data="d" />
        </swiper-slide>

        <!-- slider two  -->
        <!-- <swiper-slide class="flex justify-center py">
          <AchieverCard />
        </swiper-slide> -->

        <!-- slider three  -->
        <!-- <swiper-slide class="flex justify-center">
          <AchieverCard />
        </swiper-slide> -->
      </swiper>
      <div
        class="swiper-achieve-card-50-button-prev-unique absolute left-0 top-1/2 -translate-y-1/2"
      >
        <ChevronLeftIcon
          :class="{ 'opacity-50': start }"
          class="w-12 h-12 text-cus-primary ssm:hidden md:block"
        />
      </div>
      <div
        class="swiper-achieve-card-50-button-next-unique absolute right-0 top-1/2 -translate-y-1/2"
      >
        <ChevronRightIcon
          :class="{ 'opacity-50': end }"
          class="w-12 h-12 text-cus-primary ssm:hidden md:block"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
const modules = [Navigation, Pagination];
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import Button from "../partials/Button.vue";
import AchieverCard from "./AchieverCard.vue";
import axios from "axios";
const scholarships = ref();
const start = ref(true);
const end = ref(false);
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
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-achieve-card-50-button-next-unique",
    prevEl: ".swiper-achieve-card-50-button-prev-unique",
  },
};
const fetchData = async () => {
  // http://adminpanel.msieducation.edu.mm/api/scholarship-achievers/scholar-type/11
  const res = await axios.get("scholarship-achievers/scholar-type/12");
  scholarships.value = res.data.scholarAchiever;
  // console.log("scholar", res.data.scholarAchiever);
  // scholarships.value = res.data.scholarAchiever.filter((p) => {
  //   return p.scholarship_type == 12;
  // });
};
onMounted(() => {
  fetchData();
});
</script>

<style>
.shadow-title {
  text-shadow: 0px 04px 04px rgba(0, 0, 0, 0.15);
}
</style>
