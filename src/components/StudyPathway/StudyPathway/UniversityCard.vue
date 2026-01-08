<template>
  <div class="relative container">
    <swiper
      :pagination="{
        clickable: true,
      }"
      @slideChange="onSlideChange"
      :breakpoints="swiperOptions.breakpoints"
      :navigation="swiperOptions.navigation"
      :modules="modules"
      class="mySwiper"
    >
      <!-- slider one -->
      <swiper-slide
        v-for="data in props.data"
        :key="data.id"
        class="flex justify-center py-12"
      >
        <SliderScho :data="data" />
      </swiper-slide>
    </swiper>
    <div
      class="swiper-scholarship-school-lists-button-prev-unique absolute left-0 top-1/2 -translate-y-1/2"
    >
      <ChevronLeftIcon
        :class="{ 'opacity-50': start }"
        class="w-12 h-12 text-cus-primary ssm:hidden md:block"
      />
    </div>
    <div
      class="swiper-scholarship-school-lists-button-next-unique absolute right-0 top-1/2 -translate-y-1/2"
    >
      <ChevronRightIcon
        :class="{ 'opacity-50': end }"
        class="w-12 h-12 text-cus-primary ssm:hidden md:block"
      />
    </div>
  </div>
</template>


<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Pagination, Navigation } from "swiper";
import SliderScho from "../../Scholarship/SliderScho.vue";
import { ref } from "vue";
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
    nextEl: ".swiper-scholarship-school-lists-button-next-unique",
    prevEl: ".swiper-scholarship-school-lists-button-prev-unique",
  },
};
const props = defineProps(["data"]);
console.log(props.data, "props data cor par");
</script>

<style lang="scss" scoped></style>


