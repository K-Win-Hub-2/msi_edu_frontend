<template>
  <div class="">
    <h1
      class="text-center lg:mt-[60px] md:mt-[20px] lg:text-[40px] md:text-[32px] text-[24px] shadow-title text-cus-primary uppercase lg:font-[700] md:font-[600] font-[510]"
    >
      SCHOLARSHIP ACHIEVERS
    </h1>
    <h1
      class="md:mt-[24px] lg:mt-[20px] mt-[16px] lg:text-[32px] md:text-[24px] text-[20px] shadow-title text-[#FE005F] text-center lg:mb-[50px] md:mb-[20px] ssm:mb-[5px] uppercase font-semibold"
    >
      100 % SCHOLARSHIP ACHIEVERS
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
      </swiper>
      <div
        class="absolute left-0 -translate-y-1/2 swiper-achieve-card-button-prev-unique top-1/2"
      >
        <ChevronLeftIcon
          :class="{ 'opacity-50': start }"
          class="w-12 h-12 text-cus-primary ssm:hidden md:block"
        />
      </div>
      <div
        class="absolute right-0 -translate-y-1/2 swiper-achieve-card-button-next-unique top-1/2"
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
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import AchieverCard from "./AchieverCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import SliderScho from "./SliderScho.vue";
import { onMounted, ref } from "vue";
const modules = [Navigation, Pagination];
import MinKhantTinImg from "../../assets/img/scholarship/Min Khant Tin (Webster).jpg";
import kyiImg from "../../assets/img/scholarship/kyi.jpg";
import KhinImg from "../../assets/img/scholarship/hnin.jpg";
import HninImg from "../../assets/img/scholarship/Hnin A Kery (SIM).jpg";
import EiNgonImg from "../../assets/img/scholarship/Ei Ngon Phoo (SIM).jpg";
import ZayaImg from "../../assets/img/scholarship/Zay Ya Min Yin (SIM).jpg";
import ZawLinImg from "../../assets/img/scholarship/zinLin.jpg";
import axios from "axios";

const start = ref(true);
const end = ref(false);
const props = defineProps(["scholarships"]);
console.log("scholarships in section two ", props.scholarships);

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


const data = ref([
  {
    name: "Min Khant Tin",
    image: MinKhantTinImg,
  },
  {
    name: "Kyi Phyu Maung ",
    image: kyiImg,
  },
  {
    name: "Khin Thuzar Thant",
    image: KhinImg,
  },
  {
    name: "Hnin A Kery",
    image: HninImg,
  },
  {
    name: "Ei Ngon Phoo",
    image: EiNgonImg,
  },
  {
    name: "Zay Ya Min Yin",
    image: ZayaImg,
  },
  {
    name: "Zaw Lin Htike",
    image: ZawLinImg,
  },
]);

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
    nextEl: ".swiper-achieve-card-button-next-unique",
    prevEl: ".swiper-achieve-card-button-prev-unique",
  },
};

</script>
