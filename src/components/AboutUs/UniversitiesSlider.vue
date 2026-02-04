<template>
  <div class="bg-white bg-opacity-70 p-2 cus-rounded group max-h-[200px]">
    <div class="flex items-center justify-between">
      <div
        class="swiper-button-prev-universities-name hover:cursor-pointer w-[50px] shrink-0"
      >
        <ChevronLeftIcon
          :class="{ 'opacity-50': start }"
          class="hidden group-hover:block md:w-12 md:h-12 ssm:w-8 ssm:h-8 text-cus-primary"
        />
      </div>
      <swiper
        :autoplay="swiperOptions.autoplay"
        :space-between="50"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        :navigation="swiperOptions.navigation"
        :modules="modules"
        :loop="swiperOptions.loop"
        class="ssm:max-w-[180px] sm:max-w-[240px] md:max-w-[800px] lg:max-w-[1400px]"
      >
        <template v-for="university in currentUniversities">
          <swiper-slide class="my-3 md:!w-[200px]">
            <div class="flex justify-center w-full my-auto">
              <div class="block cus-standout overflow-hidden ssm:h-[40px] md:h-full">
                <img
                  :src="university.image"
                  class="mx-auto object-cover select-none ssm:!w-[100px] md:!w-[300px] md:h-32 ssm:h-[50px] lg:h-[100px]"
                  alt=""
                />
              </div>
            </div>
          </swiper-slide>
        </template>
      </swiper>

      <div
        class="swiper-button-next-universities-name hover:cursor-pointer w-[50px] shrink-0"
      >
        <ChevronRightIcon
          :class="{ 'opacity-50': end }"
          class="hidden group-hover:block md:w-12 md:h-12 ssm:w-8 ssm:h-8 text-cus-primary"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const currentUniversities = ref([]);
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
      slidesPerView: 4,
      spaceBetween: 25,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 5,
      spaceBetween: 30,
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
// swiper end

onMounted(() => {
  currentUniversities.value = Array.from({ length: 51 }, (_, i) => ({
    image: new URL(`../../assets/img/universities/${i + 1}.png`, import.meta.url).href,
    description: ""
  }));
});
</script>
