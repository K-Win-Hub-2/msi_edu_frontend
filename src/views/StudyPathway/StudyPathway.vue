<template>
  <section>
    <BannerMotion></BannerMotion>
  </section>
  <section class="bg-white">
    <div class="container w-[1199px] h-[624px] bg-[#EDF7FF] mt-6 py-10 px-10">
      <h1
        class="text-cus-primary lg:text-[48px] md:text-lg sm:text-md shadow-title font-bold text-center sm:"
      >
        Featured Universities
      </h1>
      <Button
        class="px-14 sm:px-8 sm:py-2 py-4 text-md float-right mt-8"
        type="gradient"
        data-te-toggle="modal"
        data-te-target="#appointmentFormModal"
        data-te-ripple-init
        data-te-ripple-color="light"
        >See More</Button
      >

      <!-- carousel start -->
      <div
        class="container flex justify-center md:mt-20 xl:mt-14 sm:mt-10 relative"
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
            class="mySwiper flex justify-center xl:w-[930px] md:w-[590px]"
          >
            <!-- slider one -->
            <swiper-slide class="flex justify-center py-12 w-full">
              <div
                class="w-[315px] h-[337px] px-3 py-2 rounded-lg shadow-lg bg-white"
              >
                <img
                  class="rounded-lg"
                  src="https://img.freepik.com/free-photo/harvard-university-cambridge-usa_1268-14363.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705276800&semt=sph"
                  alt=""
                />
                <h1 class="text-[16px] font-semibold mt-3">
                  Carnegie Mellon University
                </h1>
                <p class="mt-2">This is intro</p>
                <div class="flex justify-center mt-3">
                  <Button
                    class="px-[26px] py-[6px] text-[16px] float-right"
                    type="gradient"
                    data-te-toggle="modal"
                    data-te-target="#appointmentFormModal"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    >See More</Button
                  >
                </div>
              </div>
            </swiper-slide>
            <!-- slider two -->
            <swiper-slide class="flex justify-center py-12 w-full">
              <div
                class="w-[315px] h-[337px] px-3 py-2 rounded-lg shadow-lg bg-white"
              >
                <img
                  class="rounded-lg"
                  src="https://img.freepik.com/free-photo/harvard-university-cambridge-usa_1268-14363.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705276800&semt=sph"
                  alt=""
                />
                <h1 class="text-[16px] font-semibold mt-3">
                  Carnegie Mellon University
                </h1>
                <p class="mt-2">This is intro</p>
                <div class="flex justify-center mt-3">
                  <Button
                    class="px-[26px] py-[6px] text-[16px] float-right"
                    type="gradient"
                    data-te-toggle="modal"
                    data-te-target="#appointmentFormModal"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    >See More</Button
                  >
                </div>
              </div>
            </swiper-slide>
            <!-- slider -->
            <swiper-slide class="flex justify-center py-12 w-full">
              <div
                class="w-[315px] h-[337px] px-3 py-2 rounded-lg shadow-lg bg-white"
              >
                <img
                  class="rounded-lg"
                  src="https://img.freepik.com/free-photo/harvard-university-cambridge-usa_1268-14363.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705276800&semt=sph"
                  alt=""
                />
                <h1 class="text-[16px] font-semibold mt-3">
                  Carnegie Mellon University
                </h1>
                <p class="mt-2">This is intro</p>
                <div class="flex justify-center mt-3">
                  <Button
                    class="px-[26px] py-[6px] text-[16px] float-right"
                    type="gradient"
                    data-te-toggle="modal"
                    data-te-target="#appointmentFormModal"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    >See More</Button
                  >
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div
            class="swiper-event-more-list-button-prev-unique absolute left-0 top-1/2 -translate-y-1/2"
          >
            <ChevronLeftIcon
              :class="{ 'opacity-50': start }"
              class="w-12 h-12 text-cus-primary"
            />
          </div>
          <div
            class="swiper-event-more-list-button-next-unique absolute right-0 top-1/2 -translate-y-1/2"
          >
            <ChevronRightIcon
              :class="{ 'opacity-50': end }"
              class="w-12 h-12 text-cus-primary"
            />
          </div>
        </div>
      </div>
      <!-- carousel end -->
    </div>
  </section>
  <section>
    <div class="container px-6 pt-6 pb-24">
      <Countries></Countries>
    </div>
  </section>
  <section id="mission" class="bg-white">
    <div class="container px-6 py-16">
      <OurService />
    </div>
  </section>
  <section class="bg-white">
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
import Button from "../../components/partials/Button.vue";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
const modules = [Navigation, Pagination];
import MySwiper from "@/components/MySwiper.vue";
import { ref } from "vue";

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
</script>

<style lang="scss" scoped></style>
