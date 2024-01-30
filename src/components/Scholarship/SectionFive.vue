<template>
  <div class="">
    <div class="">
      <div class="lg:pt-[15px] md:pt-[10px] ssm:py-5 md:pb-[20px] lg:pb-[40px]">
        <h1
          class="text-[#FE005F] lg:text-[40px] md:text-[32px] text-[24px] shadow-title leading-[43.5px] text-center md:font-[600] font-[700]"
        >
          20%, 80% SCHOLARSHIP ACHIEVERS
        </h1>
        <h1
          class="text-[#205887] py-8 lg:text-[32px] md:text-[24px] text-[20px] shadow-title leading-[43.5px] text-center md:font-[600] lg:font-[700] font-[530] uppercase"
        >
          UON KDU university (MALAYSIA)
        </h1>
      </div>
    </div>
    <div class="flex justify-evenly items-center">
      <div class="">
        <!-- carousel start -->
        <div
          class="relative container lg:min-w-[1350px] md:min-w-[700px] ssm:max-w-[310px] overflow-hidden"
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
              <div class="lg:max-w-[1350px] lg:min-w-[1350px] md:min-w-[700px]">
                <div
                  class="flex flex-wrap ssm:gap-y-4 justify-center md:gap-x-[12px] lg:gap-8 sm:gap-x-6 md:md:gap-[20px] lg:gap-y-[69px]"
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
            class="swiper-business-card-button-prev-25-50-unique absolute sm:hidden md:block lg:left-0 md:-left-4 top-1/2 -translate-y-1/2"
          >
            <ChevronLeftIcon
              :class="{ 'opacity-50': start }"
              class="w-12 h-12 text-cus-primary ssm:hidden md:block"
            />
          </div>
          <div
            class="swiper-business-card-button-next-25-50-unique absolute sm:hidden md:block lg:right-0 md:-right-3 top-1/2 -translate-y-1/2"
          >
            <ChevronRightIcon
              :class="{ 'opacity-50': end }"
              class="w-12 h-12 text-cus-primary ssm:hidden md:block"
            />
          </div>
        </div>
        <!-- carousel end -->
      </div>
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
const scholarships = ref([]);

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
    nextEl: ".swiper-business-card-button-next-25-50-unique",
    prevEl: ".swiper-business-card-button-prev-25-50-unique",
  },
};

const fetchData = async () => {
  try {
    const res = await axios.get(
      "http://adminpanel.msieducation.edu.mm/api/scholarship-achievers/scholar-type/2"
    );
    console.log(res);
    return res.data.scholarAchiever;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const limit = 9;
const scholarshipChunks = ref([]);

const chunkScholarships = () => {
  for (let i = 0; i < scholarships.value.length; i += limit) {
    scholarshipChunks.value.push(scholarships.value.slice(i, i + limit));
  }
};
onMounted(async () => {
  scholarships.value = await fetchData();
  chunkScholarships();
});

// const limit = 9;
// const scholarship = ref([]);

// for (let i = 0; i < scholarships.value.length; i += limit) {
//   scholarship.push(scholarships.value.slice(i, i + limit));
// }
// console.log(scholarship.value);
// onMounted(() => {
//   fetchData();
// });

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunkSize = 3;
// const chunks = [];

// for (let i = 0; i < arr.length; i += chunkSize) {
//   const chunk = arr.slice(i, i + chunkSize);
//   chunks.push(chunk);
// }

// console.log(chunks);
// [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
</script>

<style></style>
