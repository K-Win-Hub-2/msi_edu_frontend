<template>
  <section>
    <BannerMotion></BannerMotion>
  </section>
  <section class="bg-white">
    <div
      class="container md:w-[1199px] sm:w-[320px] h-[624px] bg-[#EDF7FF] mt-6 py-10 px-10"
    >
      <h1
        class="text-cus-primary lg:text-[48px] ssm:text-md md:text-lg sm:text-md shadow-title font-bold text-center"
      >
        Featured Universities
      </h1>
      <!-- <Button
        class="float-right py-4 mt-8 px-14 sm:px-8 sm:py-2 text-md"
        type="gradient"
        data-te-toggle="modal"
        data-te-target="#appointmentFormModal"
        data-te-ripple-init
        data-te-ripple-color="light"
        >See More</Button
      > -->

      <!-- carousel start -->
      <div
        class="container relative flex justify-center md:mt-20 xl:mt-14 ssm:mt-0"
      >
        <div class="">
          <swiper
            :pagination="{
              clickable: true,
            }"
            space-between="30
                  "
            :breakpoints="swiperOptions.breakpoints"
            @slideChange="onSlideChange"
            :navigation="swiperOptions.navigation"
            :modules="modules"
            class="mySwiper flex justify-center xl:w-[930px] md:w-[590px] ssm:w-[320px]"
            v-if="data"
          >
            <!-- slider one -->
            <swiper-slide
              class="flex justify-center w-full py-12"
              v-for="uni in data.university"
              :key="uni.id"
            >
              <Featureuni :uni="uni" />
            </swiper-slide>
          </swiper>
          <div
            class="absolute left-0 -translate-y-1/2 swiper-event-more-list-button-prev-unique lg:-left-14 top-1/2"
          >
            <ChevronLeftIcon
              :class="{ 'opacity-50': start }"
              class="w-12 h-12 text-cus-primary ssm:hidden md:block"
            />
          </div>
          <div
            class="absolute right-0 -translate-y-1/2 swiper-event-more-list-button-next-unique lg:-right-14 top-1/2"
          >
            <ChevronRightIcon
              :class="{ 'opacity-50': end }"
              class="w-12 h-12 text-cus-primary ssm:hidden md:block"
            />
          </div>
        </div>
      </div>
      <!-- carousel end -->
    </div>
  </section>
  <section>
    <div class="container px-6 pt-6 ssm:pb-8 lg:pb-24">
      <Countries></Countries>
    </div>
  </section>
  <section id="mission" class="bg-[#D0F1FF]">
    <div class="container px-6 ssm:py-8 md:py-16">
      <OurService />
    </div>
  </section>
  <section class="bg-[#D0F1FF] mt-2">
    <Testimonials />
  </section>
</template>

<script setup>
// import Hero from "../../components/StudyPathway/StudyPathway/Hero.vue";
import bannerImage from "../../assets/img/StudyPathway/banner.jpg";

import FeaturedUniversity from "../../components/StudyPathway/General/FeaturedUniversities.vue";
import OurService from "../../components/StudyPathway/StudyPathway/OurService.vue";
import Testimonials from "../../components/StudyPathway/StudyPathway/Testimonials.vue";
import Countries from "../../components/StudyPathway/StudyPathway/Countries.vue";
import BannerMotion from "../../components/StudyPathway/General/BannerMotion.vue";
import Featureuni from "./Featureuni.vue";
import Button from "../../components/partials/Button.vue";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
const modules = [Navigation, Pagination];
import MySwiper from "@/components/MySwiper.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import getData from "../../axios/getData";
const { fetchData, data } = getData();
const url = ref("university-lists/feature/yes");

// swiper
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
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-event-more-list-button-next-unique",
    prevEl: ".swiper-event-more-list-button-prev-unique",
  },
};

// fetch data

onMounted(() => {
  fetchData(url.value);
});
</script>

<style lang="scss" scoped></style>
