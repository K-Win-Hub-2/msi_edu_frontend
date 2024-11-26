<script setup>
import Button from '../../components/partials/Button.vue';
import ScholarshipOfferCard from '../../components/Scholarship/ScholarshipOfferCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { onBeforeRouteUpdate } from 'vue-router';
import AwardCard from '../../components/Home/AwardCard.vue';
const modules = [Navigation, Pagination, Autoplay, EffectCoverflow];
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import PrizeCard from '../../components/Home/PrizeCard.vue';
const start = ref(true);
const end = ref(false);
const scholarshipOffer = ref();
// scholarship-type-list/university/1
const award = ref([]);
const currentAwards = ref([]);
const currentActiveAward = ref({});
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faFontAwesomeFlag,
  faGlobe,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

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
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.swiper-scholarship-school-lists-button-next-unique',
    prevEl: '.swiper-scholarship-school-lists-button-prev-unique',
  },
};
const onPrizeSlideChange = (event) => {
  // currentActiveAward.value = 4;

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

const swiperPrizeOptions = {
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3.7,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: '.swiper-home-award-button-next-unique',
    prevEl: '.swiper-home-award-button-prev-unique',
  },
  coverflowEffect: {
    rotate: 0,
    stretch: -5,
    depth: 100,
    modifier: 3,
    slideShadows: false,
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
};
// university data
const props = defineProps(['id']);
const university = ref();
const bannerImage = ref('');
const prizeImage = ref('');
const program = ref();
const fetchData = async () => {
  const res = await axios.get('university-details/' + props.id);
  console.log(res.data.university, 'data');
  university.value = res.data.university;
  award.value = res.data.university.onPrizeSlideChange;
  if (res.data.university) {
    if (res.data.university.id == props.id) {
      bannerImage.value =
        'http://adminpanel.msieducation.edu.mm/postImage/' +
        res.data.university.uni_banner_image;
      prizeImage.value =
        'http://adminpanel.msieducation.edu.mm/postImage/' +
        res.data.university.prize_image;
    }
  }
};

// onMounted(() => {
//   currentAwards.value = [...award];
//   currentActiveAward.value = award[4];
// });
const scholarship = async () => {
  const res = await axios.get(`scholarship-type-list/university/${props.id}`);
  scholarshipOffer.value = res.data.scholarshipTypeLists;
};

onBeforeRouteUpdate(() => {
  fetchData();
  scholarship();
});

onMounted(() => {
  fetchData();
  scholarship();
});
</script>
<template>
  <div>
    <div class="lg:mt-28 ssm:mt-4" v-if="university">
      <img
        class="w-full lg:h-[693px] md:h-[500px] object-cover"
        :src="bannerImage"
        :alt="university.university_name"
      />
      <div class="flex justify-center lg:py-10 py-7">
        <div class="md:w-[1290px] ssm:w-[320px]">
          <div
            class="flex justify-between lg:flex-row lg:items-end sm:flex-col sm:items-start sm:gap-4"
          >
            <ul
              class="flex flex-col gap-3 p-2 lg:items-start items-center grow text-[#205887]"
            >
              <li class="flex gap-6 w-full items-center justify-start">
                <p
                  class="text-[12px] md:text-[18px] lg:text-[20px] uppercase lg:min-w-[145px] sm:min-w-[80px] font-bold"
                >
                  <font-awesome-icon
                    :icon="faGlobe"
                    class="text-[#FE005F]"
                  />&nbsp; COUNTRY:
                </p>
                <p
                  class="font-[510] text-[12px] md:text-[16px] lg:text-[18px] text-[#0E314E]"
                >
                  {{ university.country?.name }}
                </p>
              </li>
              <li class="flex gap-6 w-full items-start justify-start">
                <p
                  class="text-[12px] md:text-[18px] lg:text-[20px] uppercase lg:min-w-[145px] sm:min-w-[80px] font-bold"
                >
                  <font-awesome-icon
                    :icon="faMapMarkerAlt"
                    class="text-[#FE005F]"
                  />&nbsp; LOCATION:
                </p>
                <p
                  class="font-[510] text-[12px] md:text-[16px] lg:text-[18px] text-[#0E314E]"
                >
                  {{ university.location }}
                </p>
              </li>
              <li class="flex gap-6 w-full items-center justify-start">
                <p
                  class="text-[12px] md:text-[18px] lg:text-[20px] uppercase lg:min-w-[145px] sm:min-w-[80px] font-bold"
                >
                  <font-awesome-icon
                    :icon="faFontAwesomeFlag"
                    class="text-[#FE005F]"
                  />&nbsp; FOUNDED:
                </p>
                <p
                  class="font-[510] text-[12px] md:text-[16px] lg:text-[18px] text-[#0E314E]"
                >
                  {{ university.founded_year }}
                </p>
              </li>
            </ul>
            <div class="flex items-end">
              <Button
                class="lg:px-[50px] lg:py-[16px] lg:text-[15px] md:px-[40px] md:py-[8px] md:text-[10px] px-[30px] py-[8px] rounded-[20px] text-[10px]"
                type="gradient"
                data-te-ripple-color="light"
                >Get Free Counselling</Button
              >
            </div>
          </div>
          <h1
            class="md:text-md md:text-center ssm:text-start ssm:text-[16px] font-[480] lg:mt-12 ssm:mt-6 md:px-10 ssm:px-2"
          >
            {{ university.introduction }}
          </h1>

          <hr class="mt-6" />

          <!-- prize award -->
          <div
            v-if="university.prizes.length > 0"
            class="md:mt-20 ssm:mt-8 md:px-10 ssm:px-2"
          >
            <div class="flex justify-between items-center">
              <div class="">
                <h1 class="md:text-lg ssm:text-md">Prize Award</h1>
                <p class="text-[20px] mb-7 font-semibold text-primary-600">
                  Our MSI Award
                </p>
              </div>
              <div class="">
                <img
                  src="../../assets/img/StudyPathway/prize.png"
                  class="w-60 h-60 ssm:hidden md:block"
                  alt=""
                />
              </div>
            </div>

            <div
              class="relative flex justify-between items-center mb-3 h-[600px]"
            >
              <div class="absolute w-full h-[60%]"></div>
              <!-- <div
        class="swiper-home-award-button-prev-unique hover:cursor-pointer z-[20]"
      >
        <ChevronLeftIcon
          :class="{ 'opacity-50': start }"
          class="w-12 h-12 text-cus-primary"
        />
      </div> -->
              <swiper
                :navigation="true"
                :modules="modules"
                class="mySwiper"
                @slideChange="onPrizeSlideChange"
                :autoplay="{
                  delay: 2500,
                  disableOnInteraction: false,
                }"
                :pagination="{
                  dynamicBullets: true,
                }"
                :spaceBetween="30"
                :centeredSlides="true"
              >
                <swiper-slide
                  class="my-3 shrink-0"
                  v-for="(prize, index) in university.prizes"
                  :key="index"
                >
                  <PrizeCard :image="prize.imageURL" class="select-none" />
                </swiper-slide>
              </swiper>

              <!-- <div
        class="swiper-home-award-button-next-unique hover:cursor-pointer z-[20]"
      >
        <ChevronRightIcon
          :class="{ 'opacity-50': end }"
          class="w-12 h-12 text-cus-primary"
        />
      </div> -->
            </div>
          </div>

          <!-- program -->
          <div class="mt-9 md:px-10 ssm:px-2" v-if="university.program_course">
            <h1 class="my-5 md:text-lg ssm:text-md font-semibold">
              Available Programs
            </h1>
            <div
              class="flex justify-between lg:flex-row lg:items-end sm:flex-col sm:items-start sm:gap-4"
            >
              <div class="grow pb-8">
                <div
                  class="flex"
                  v-for="p in university.program_course"
                  :key="p.id"
                >
                  <div class="">
                    <h1 class="text-md text-primary-600 my-8 font-[600]">
                      {{ p.name }}
                    </h1>
                    <ul
                      class="md:text-[24px] smm:text-[18px] space-y-2 mt-5 font-[500]"
                    >
                      <li
                        v-for="(course, index) in p.pivot.course_name
                          .split(',')
                          .filter((c) => c.trim())"
                        :key="index"
                      >
                        - {{ course.trim() }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="flex items-end">
                <img
                  src="../../assets/img/StudyPathway/program.png"
                  class="w-96 h-96 ssm:hidden md:block"
                  :alt="university.university_name + ' Program'"
                />
              </div>
            </div>
          </div>

          <!-- <div class="bg-[#F4FAFF] md:px-10 smm:px-8 md:py-7 ssm:py-4">
            <h1
              class="text-[24px] smm:px-3 md:px-0 text-primary-600 font-[600]"
            >
              Master Degree Program
            </h1>
            <div class="flex justify-between">
              <ul
                class="md:text-[24px] smm:text-[20px] space-y-2 mt-5 font-[500]"
              >
                <li>-Software Engineering</li>
                <li>-Artificial Intelligence</li>
                <li>-Artificial Intelligence (ODL)</li>
                <li>-Cyber Security</li>
                <li>-Data Science & Business Analytics (ODL)</li>
                <li>-Information Technology management</li>
                <li>-Technology Management</li>
                <li>-Digital Transformation</li>
                <li>-Business Administration</li>
                <li>
                  -Business administration with a specialism in Digital
                  Leadership(ODL)
                </li>
                <li>-Business administration (Euro Asia Business)</li>
                <li>-International Business Communications</li>
                <li>-Global Marketing Management</li>
                <li>-Project management</li>
                <li>-Accounting</li>
                <li>-Accounting in Forensic Analysis</li>
                <li>-Finance</li>
                <li>-Finance with a specialism in fintech</li>
                <li>-Design Innovation Management</li>
                <li>-Engineering</li>
                <li>-Management</li>
                <li>-Computing</li>
              </ul>
              <div class="mt-[500px]">
                <img
                  src="../../assets/img/StudyPathway/degree.png"
                  class="w-[347px] h-[347px] ssm:hidden md:block"
                  alt=""
                />
              </div>
            </div>
          </div> -->

          <div class="relative mt-14" v-if="scholarshipOffer?.length > 0">
            <h1
              class="md:my-10 md:ml-14 lg:ml-0 ssm:my-3 md:text-lg ssm:text-md font-semibold"
            >
              Scholarship offers
            </h1>
            <!-- <div
              v-if="scholarshipOffer"
              class="bg-[url(../../assets/img/StudyPathway/offer.png)] ssm:hidden md:hidden lg:block w-[320px] h-[320px] bg-no-repeat bg-[length:100%_100%] absolute lg:top-[-7px] md:top-[-12px] md:right-[-550px] right-[-400px] top-[-8px] lg:right-[-20px]"
            ></div> -->

            <div class="flex justify-center">
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
                  <swiper-slide
                    v-for="item in scholarshipOffer"
                    :key="item.id"
                    class="flex justify-center px-4 py-12"
                  >
                    <ScholarshipOfferCard :item="item" />
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
