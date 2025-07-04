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
import axios from "axios";
import { onBeforeRouteUpdate } from "vue-router";
import { universities } from "../../../mocks/universities";
import UniversityCard from "./UniversityCard.vue";
import { watch } from "vue";
const modules = [Navigation, Pagination];

const start = ref(true);
const list = ref([]);
const end = ref(false);
const appStore = useAppStore();
const { scholarshipDetail, scholar } = storeToRefs(appStore);
const props = defineProps(["id"]);
const university = ref([]);

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

const fetchData = async (countryId) => {
  const res = await axios.get("/university-lists/country/" + countryId);
  university.value = res.data.university;
};
watch(
  () => props.id, (newId) => {
    fetchData(newId);
  }
);
onMounted(() => {
  fetchData(props.id);
});

</script>
<template>
  <div
    v-if="university"
    class="w-full text-2xl text-cus-primary uppercase mt-10 font-semibold ssm:mb-10 md:mb-10 bg-[#FFFFFF]"
  >
    <h1
      class="text-center lg:text-[48px] md:text-[32px] shadow-title lg:mb-[40px] md:mb-[20px]"
    >
      Partner University
    </h1>
    <div v-if="university.length > 0">
      <UniversityCard :data="university" />
    </div>
    <div v-else class="flex justify-center">
      <div class="text-xl text-center text-gray-500 py-28">
        There is no data
      </div>
    </div>
  </div>
  <div
    v-if="scholarshipDetail"
    class="fixed top-0 modal-background w-[100%] h-[100%] z-[99999]"
  >
    <div
      class="mt-[100px] mx-auto bg-white rounded-lg lg:w-[1000px] md:w-[800px] animate__animated animate__fadeIn"
    >
      <div class="flex justify-between py-4 border-b-2 px-14">
        <h1>Scholarship Detail</h1>
        <div class="">
          <i
            class="fa-regular fa-circle-xmark text-md"
            @click="scholarshipDetail = false"
          ></i>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="relative lg:w-[800px]" v-if="scholar.length">
          <swiper
            :pagination="{
              clickable: true,
            }"
            @slideChange="onSlideChange"
            :breakpoints="swiperOptions.breakpoints"
            :navigation="swiperOptions.navigation"
            :modules="modules"
            class="mySwiper md:max-w-[700px] ssm:max-w-[320px]"
          >
            <swiper-slide
              class="flex justify-center md:py-12 ssm:py-3"
              v-for="item in scholar"
              :key="item.id"
            >
              <div
                class="px-3 py-14 gap-x-7 items-center md:px-5 md:w-full bg-[#F5FBFC]"
              >
                <div class="md:space-y-8 lg:space-y-12 ssm:space-y-4">
                  <div class="ssm:ml-14 md:ml-0">
                    <div class="ssm:flex md:text-md">
                      <div class="text-[#205887] md:flex lg:font-semibold">
                        <p class="md:min-w-[260px]">Scholarship Name</p>
                        <div class="text-[#FE005F] flex md:space-x-2">
                          <p class="text-gray-500">-</p>
                          <p>{{ item.scholar_name }}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ssm:ml-14 md:ml-0">
                    <div class="flex md:text-md">
                      <div class="text-[#205887] md:flex lg:font-semibold">
                        <p class="md:min-w-[260px] ssm:min-w-[130px]">
                          Descriptions
                        </p>
                        <div
                          class="text-[#FE005F] flex md:space-x-2 text-wrap ssm:max-w-[280px] md:max-w-[1000px]"
                        >
                          <p class="text-gray-500">-</p>
                          <p>{{ item.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ssm:ml-14 md:ml-0">
                    <div class="flex md:text-md">
                      <div class="text-[#205887] md:flex lg:font-semibold">
                        <p class="md:min-w-[260px] ssm:min-w-[130px]">
                          Requirements
                        </p>
                        <div
                          class="text-[#FE005F] flex md:space-x-2 ssm:max-w-[280px] md:max-w-[1000px] text-wrap"
                        >
                          <p class="text-gray-500">-</p>
                          <p>{{ item.requirement }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ssm:ml-14 md:ml-0">
                    <div class="flex md:text-md">
                      <div class="text-[#205887] md:flex lg:font-semibold">
                        <p class="md:min-w-[260px] ssm:min-w-[130px]">
                          Year and Intake
                        </p>
                        <div
                          class="text-[#FE005F] flex md:space-x-2 ssm:max-w-[280px] md:max-w-[1000px] text-wrap"
                        >
                          <p>-</p>
                          <p>{{ item.year_intake }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="md:flex md:space-x-20 ssm:ml-14 md:ml-0">
                    <div class="">
                      <div class="flex md:text-md">
                        <p class="text-[#205887] lg:font-semibold mr-2">
                          Start Date
                        </p>
                        <div
                          class="text-[#FE005F] flex md:space-x-2 lg:font-semibold"
                        >
                          <p>-</p>
                          <p>{{ item.start_date }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="">
                      <div class="flex md:text-md">
                        <p class="text-[#205887] lg:font-semibold mr-2">
                          End Date
                        </p>
                        <div
                          class="text-[#FE005F] flex md:space-x-2 lg:font-semibold"
                        >
                          <p>-</p>
                          <p>{{ item.end_date }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div
            class="absolute -translate-y-1/2 cursor-pointer swiper-scholarship-school-lists-button-prev-unique md:-left-12 lg:-left-20 top-1/2"
          >
            <ChevronLeftIcon
              :class="{ 'opacity-50': start }"
              class="w-12 h-12 text-cus-primary ssm:hidden md:block"
            />
          </div>
          <div
            class="absolute -translate-y-1/2 cursor-pointer swiper-scholarship-school-lists-button-next-unique lg:-right-20 md:-right-12 top-1/2"
          >
            <ChevronRightIcon
              :class="{ 'opacity-50': end }"
              class="w-12 h-12 text-cus-primary ssm:hidden md:block"
            />
          </div>
        </div>
        <div class="text-xl text-center text-gray-500 py-28" v-else>
          There is no data
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
