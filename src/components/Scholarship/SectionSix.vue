<template>
  <div class="md:mb-[90px] ssm:mb-3">
    <div class="">
      <div class="lg:py-[70px] md:py-[20px]">
        <h1
          class="text-[#FE005F] lg:text-[40px] md:text-[28px] text-[20px] shadow-text leading-[43.5px] text-center md:font-[600] font-[530] lg:font-[700]"
        >
          30%, 50% UNDERGRADUATE SCHOLARSHIP ACHIEVERS
        </h1>
        <h1
          class="text-[#205887] lg:text-[32px] md:text-[24px] text-[20px] py-8 shadow-text leading-[43.5px] text-center md:font-[600] font-[520] lg:font-[700] uppercase"
        >
          WEBSTER university (THAILAND CAMPUS)
        </h1>
      </div>
    </div>
    <div class="flex justify-evenly items-center">
      <!-- carousel start -->
      <div
        class="relative container lg:min-w-[1350px] md:min-w-[700px] ssm:max-w-[310px]"
      >
        <swiper
          :pagination="{
            clickable: true,
          }"
          @slideChange="onSlideChange"
          :breakpoints="swiperOptions.breakpoints"
          :navigation="swiperOptions.navigation"
          :modules="modules"
          class="mySwiper -mx-10"
          v-if="scholarshipChunks"
        >
          <!-- slider one -->
          <swiper-slide
            class="flex justify-center py-12"
            v-for="schlorships in scholarshipChunks"
            :key="schlorships.id"
          >
            <div
              class="lg:max-w-[1350px] md:min-w-[700px] lg:min-w-[1350px] ssm:max-w-[310px]"
            >
              <div
                class="flex flex-wrap justify-center md:gap-x-[12px] sm:gap-x-6 lg:gap-8 md:gap-y-[15px] ssm:gap-y-4 lg:gap-y-[69px]"
              >
                <div
                  class=""
                  v-for="scholarship in schlorships"
                  :key="scholarship.id"
                >
                  <BusinessCard :data="scholarship" />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div
          class="swiper-business-card-30-50-button-prev-unique sm:hidden md:block absolute lg:left-0 md:-left-10 top-1/2 -translate-y-1/2"
        >
          <ChevronLeftIcon
            :class="{ 'opacity-50': start }"
            class="w-12 h-12 text-cus-primary cursor-pointer md:block ssm:hidden"
          />
        </div>
        <div
          class="swiper-business-card-30-50-button-next-unique absolute sm:hidden md:block lg:right-0 md:-right-10 top-1/2 -translate-y-1/2"
        >
          <ChevronRightIcon
            :class="{ 'opacity-50': end }"
            class="w-12 h-12 text-cus-primary cursor-pointer ssm:hidden md:block"
          />
        </div>
      </div>
      <!-- carousel end -->
    </div>
  </div>
</template>

<script setup>
import BusinessCard from "./BusinessCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Pagination, Navigation } from "swiper";
import SliderScho from "./SliderScho.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
const modules = [Navigation, Pagination];

const start = ref(true);
const end = ref(false);

// swiper start

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
      slidesPerView: 1,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-business-card-30-50-button-next-unique",
    prevEl: ".swiper-business-card-30-50-button-prev-unique",
  },
};

const fetchData = async () => {
  try {
    const res = await axios.get(
      "http://adminpanel.msieducation.edu.mm/api/scholarship-achievers/scholar-type/3"
    );
    console.log(res);
    return res.data.scholarAchiever;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const limit = 7;
const scholarshipChunks = ref([]);
const scholarships = ref([]);

const chunkScholarships = () => {
  for (let i = 0; i < scholarships.value.length; i += limit) {
    scholarshipChunks.value.push(scholarships.value.slice(i, i + limit));
  }
};
onMounted(async () => {
  scholarships.value = await fetchData();
  chunkScholarships();
});
</script>

<style></style>
