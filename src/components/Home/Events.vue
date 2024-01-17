<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import EventCard from "../../components/general/EventCard.vue";
import { Pagination, Autoplay, EffectCoverflow } from "swiper";
import { getShortMonth, getDay } from "@/utils/date.js";
import { universities } from "../../mocks/universities";
import { countries } from "../../mocks/countries";

const currentEvents = ref([]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { events } from "../../mocks/events";
import Button from "../partials/Button.vue";

const start = ref(true);
const end = ref(false);
const currentActiveEvent = ref({});
const currentUniversities = ref([]);
const currentCountries = ref([]);
const filters = ref({
  // university: {
  //   name: "test",
  // },
  // country: {
  //   title: "test",
  // },
});

// swiper start
const modules = [Pagination, Autoplay, EffectCoverflow];

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = (event) => {
  currentActiveEvent.value = events[event.activeIndex];

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
  pagination: {
    el: ".swiper-home-event-pagination",
    clickable: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 18,
    depth: 90,
    modifier: 2,
    slideShadows: false,
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
};
// swiper end

const handleUniversitySelect = (university) => {
  filters.value.university = { ...university };
};

const updateCurrentUniversities = () => {
  console.log(filters.value)
  const filteredUniversities = universities.filter(university => {
    if(university.country == filters.value.country.name) return true
  })

  console.log(filteredUniversities)

  currentUniversities.value = [...filteredUniversities]
}

const handleCountriesSelect = (country) => {
  filters.value.country = { ...country };
  updateCurrentUniversities()
};

const onSearchClick = () => {
  console.log("searching");
};

onMounted(() => {
  currentEvents.value = [...events];
  currentActiveEvent.value = events[0];
  currentCountries.value = [...countries];
  // currentUniversities.value = [...universities];
  // filters.value.university = currentUniversities.value[0];
  // filters.value.country = currentCountries.value[0];
});
</script>

<template>
  <div>
    <div class="ml-[50px]">
      <h3 class="text-4xl font-semibold text-cus-primary uppercase">
        events & seminars
      </h3>
      <h4 class="text-3xl font-semibold text-cus-secondary uppercase">
        Coming soon
      </h4>
    </div>
    <div class="flex items-center justify-between mb-3">
      <swiper
        :effect="'coverflow'"
        :autoplay="swiperOptions.autoplay"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        :pagination="swiperOptions.pagination"
        :modules="modules"
        :coverflowEffect="swiperOptions.coverflowEffect"
        :grabCursor="false"
        :centeredSlides="true"
        id="homeEventSwiper"
      >
        <template v-for="event in currentEvents">
          <swiper-slide class="my-3">
            <EventCard :event="event" class="w-[500px]" />
          </swiper-slide>
        </template>
      </swiper>
    </div>
    <div
      class="swiper-home-event-pagination mx-auto flex justify-center h-[50px]"
    ></div>
    <div
      class="grid grid-cols-4 p-3 gap-3 w-[500px] ml-[68px] cus-glass-card cus-rounded mb-6"
    >
      <div class="col-span-1">
        <div class="p-2 flex flex-col items-center">
          <div class="font-bold text-cus-primary-pale">
            {{ getShortMonth(currentActiveEvent.date) }}
          </div>
          <div class="font-bold">{{ getDay(currentActiveEvent.date) }}</div>
        </div>
      </div>
      <div class="col-span-3 space-y-2">
        <h3 class="text-md font-semibold capitalize truncate">
          {{ currentActiveEvent.title }}
        </h3>

        <p class="text-sm truncate-two" v-html="currentActiveEvent.brief"></p>
        <!-- <div class="flex justify-end">
            <router-link
              class="inline-block p-2 border border-black"
              :to="{ name: 'events.detail', params: { id: props.event.id } }"
              >See More ...</router-link
            >
          </div> -->
      </div>
    </div>
  </div>
  <div class="w-[600px] mx-auto">
    <div class="flex flex-col sm:flex-row gap-6">
      <div class="w-full min-w-[160px]">
        <div class="relative" data-te-dropdown-ref>
          <a
            class="w-full border cus-rounded bg-white flex items-center justify-between px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
            href="#"
            type="button"
            id="dropdownMenuButton2"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {{ filters.country?.name ?? "Country" }}
            <span class="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </a>
          <ul
            class="max-h-[300px] w-full absolute cus-rounded z-[1000] float-left m-0 hidden list-none overflow-y-scroll overflow-x-hidden border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block duration-75"
            aria-labelledby="dropdownMenuButton2"
            data-te-dropdown-menu-ref
          >
            <li v-for="(country, index) in currentCountries" :key="index">
              <div
                @click="handleCountriesSelect(country)"
                class="block w-full bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                data-te-dropdown-item-ref
              >
                {{ country.name }}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full min-w-[160px]">
        <div class="relative" data-te-dropdown-ref>
          <a
            class="w-full border cus-rounded bg-white flex items-center justify-between px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
            href="#"
            type="button"
            id="dropdownMenuButton3"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {{ filters.university?.name ?? "University" }}
            <span class="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </a>
          <ul
            class="max-h-[300px] w-full absolute cus-rounded z-[1000] float-left m-0 hidden list-none overflow-y-scroll overflow-x-hidden border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block duration-75"
            aria-labelledby="dropdownMenuButton3"
            data-te-dropdown-menu-ref
          >
            <li v-for="(uni, index) in currentUniversities" :key="index">
              <div
                @click="handleUniversitySelect(uni)"
                class="block w-full bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                data-te-dropdown-item-ref
              >
                {{ uni.name }}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex items-center">
        <Button class="px-6" type="gradient" @click="onSearchClick"
          >Search</Button
        >
      </div>
    </div>
  </div>
</template>

<style>
#homeEventSwiper .swiper-wrapper {
  margin-left: -350px;
}
</style>
