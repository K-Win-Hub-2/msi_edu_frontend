<template>
  <div
    class="w-full text-2xl text-cus-primary uppercase mt-10 font-semibold ssm:mb-10 md:mb-10 bg-[#FFFFFF]"
  >
    <h1
      class="text-center lg:text-[48px] md:text-[32px] shadow-title lg:mb-[40px] md:mb-[20px]"
    >
      Partner University
    </h1>
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
        v-if="data"
      >
        <!-- slider one -->
        <swiper-slide
          class="flex justify-center py-12"
          v-for="data in data.university"
          :key="data.id"
        >
          <UniversityData :data="data" />
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
  </div>
  <div
    v-if="scholarshipDetail"
    class="fixed top-0 modal-background w-[100%] h-[100%] z-[99999]"
  >
    <div
      class="mt-[100px] mx-auto bg-white lg:w-[1000px] md:w-[800px] animate__animated animate__fadeIn"
    >
      <div class="flex justify-between border-b-2 py-4 px-14">
        <h1>Scholarship Detail</h1>
        <div class="">
          <i
            class="fa-regular fa-circle-xmark text-md"
            @click="scholarshipDetail = false"
          ></i>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="relative lg:w-[900px]">
          <swiper
            :pagination="{
              clickable: true,
            }"
            @slideChange="onSlideChange"
            :breakpoints="swiperOptions.breakpoints"
            :navigation="swiperOptions.navigation"
            :modules="modules"
            class="mySwiper w-full"
          >
            <!-- slider one -->
            <swiper-slide class="flex justify-center md:py-12 ssm:py-3">
              <div
                class="px-3 py-14 gap-x-7 items-center md:w-full bg-[#F5FBFC]"
              >
                <div class="md:space-y-12 ssm:space-y-4">
                  <div class="ssm:ml-14 md:ml-0">
                    <div class="ssm:flex md:text-md">
                      <div class="text-[#205887] md:flex font-semibold">
                        <p class="md:min-w-[260px]">
                          Scholarship Name <span>-</span>
                        </p>
                        <p class="text-[#FE005F]">Something</p>
                      </div>
                    </div>
                  </div>

                  <div class="ssm:ml-14 md:ml-0">
                    <div class="flex md:text-md">
                      <div class="text-[#205887] md:flex font-semibold">
                        <p class="md:min-w-[260px] ssm:min-w-[130px]">
                          Descriptions -
                        </p>
                        <p
                          class="text-[#FE005F] text-wrap ssm:max-w-[280px] md:max-w-[1000px]"
                        >
                          Something
                        </p>
                      </div>
                      <!-- <p class="text-[#205887] font-semibold">
            Descriptions<span class="lg:ml-[103px] md:ml-[80px] mr-8">-</span>
          </p>
          <p class="text-[#FE005F] font-semibold">
            {{ props.university.scholar_description }}
          </p> -->
                    </div>
                  </div>
                  <div class="ssm:ml-14 md:ml-0">
                    <div class="flex md:text-md">
                      <div class="text-[#205887] md:flex font-semibold">
                        <p class="md:min-w-[260px] ssm:min-w-[130px]">
                          Requirements -
                        </p>
                        <p
                          class="text-[#FE005F] ssm:max-w-[280px] md:max-w-[1000px] text-wrap"
                        >
                          Something
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="ssm:ml-14 md:ml-0">
                    <div class="flex md:text-md">
                      <div class="text-[#205887] md:flex font-semibold">
                        <p class="md:min-w-[260px] ssm:min-w-[130px]">
                          Year and Intake -
                        </p>
                        <p
                          class="text-[#FE005F] ssm:max-w-[280px] md:max-w-[1000px] text-wrap"
                        >
                          Something
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="md:flex md:space-x-20 ssm:ml-14 md:ml-0">
                    <div class="">
                      <div class="flex md:text-md">
                        <p class="text-[#205887] font-semibold">
                          End Date<span class="lg:mr-8 md:mr-2">-</span>
                        </p>
                        <p class="text-[#FE005F] font-semibold">2019</p>
                      </div>
                    </div>
                    <div class="">
                      <div class="flex md:text-md">
                        <p class="text-[#205887] font-semibold">
                          End Date<span class="lg:mr-8 md:mr-2">-</span>
                        </p>
                        <p class="text-[#FE005F] font-semibold">2019</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <ScholarshipOfferCard :university="university" /> -->
            </swiper-slide>

            <!-- slider two  -->
            <!-- <swiper-slide class="flex justify-center">
                    <ScholarshipOfferCard />
                  </swiper-slide> -->

            <!-- slider three  -->
            <!-- <swiper-slide class="flex justify-center">
                    <ScholarshipOfferCard />
                  </swiper-slide> -->
          </swiper>
          <div
            class="swiper-scholarship-school-lists-button-prev-unique absolute left-20 top-1/2 -translate-y-1/2"
          >
            <ChevronLeftIcon
              :class="{ 'opacity-50': start }"
              class="w-12 h-12 text-cus-primary ssm:hidden md:block"
            />
          </div>
          <div
            class="swiper-scholarship-school-lists-button-next-unique absolute right-20 top-1/2 -translate-y-1/2"
          >
            <ChevronRightIcon
              :class="{ 'opacity-50': end }"
              class="w-12 h-12 text-cus-primary ssm:hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- position: fixed;
  top: 0;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 9999;
  width: 600px;
  margin: 100px auto;
  background-color: white;
  border-radius: 20px;
  z-index: 9999;
   -->
  </div>
</template>

<script setup>
import ScholarshipOfferCard from "../../Scholarship/ScholarshipOfferCard.vue";
import UniversityData from "../StudyPathway/UniversityData.vue";
import Button from "../../../components/partials/Button.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Pagination, Navigation } from "swiper";
import { onMounted, ref } from "vue";
import getData from "../../../axios/getData";
import { useAppStore } from "../../../stores/app";
import { storeToRefs } from "pinia";
const modules = [Navigation, Pagination];
const { data, fetchData } = getData();
const url = ref("university-lists/partner/yes");
const start = ref(true);
const end = ref(false);
const appStore = useAppStore();
const { scholarshipDetail } = storeToRefs(appStore);

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

onMounted(() => {
  fetchData(url.value);
});
</script>
