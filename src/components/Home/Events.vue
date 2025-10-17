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
import axios from "axios";

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
  console.log(filters.value);
  const filteredUniversities = universities.filter((university) => {
    if (university.country == filters.value.country.name) return true;
  });

  console.log(filteredUniversities);

  currentUniversities.value = [...filteredUniversities];
};

const handleCountriesSelect = (country) => {
  filters.value.country = { ...country };
  updateCurrentUniversities();
};

const onSearchClick = () => {
  console.log("searching");
};

// fetch data
const comingSoonEvent = ref(null);
const fetchData = async () => {
  const res = await axios.get("latestEventList");
  comingSoonEvent.value = res.data.latestEvent;
  currentActiveEvent.value = res.data.latestEvent[0];
};

const onSlideChange = (event) => {
  currentActiveEvent.value = comingSoonEvent.value[event.activeIndex];
  console.log(currentActiveEvent.value);
  console.log(currentActiveEvent.value);
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

// setInterval(displayHello, 1000);

onMounted(() => {
  fetchData();

  // currentEvents.value = [...comingSoonEvent];
  currentActiveEvent.value = comingSoonEvent[0];
  currentCountries.value = [...countries];
  // currentUniversities.value = [...universities];
  // filters.value.university = currentUniversities.value[0];
  // filters.value.country = currentCountries.value[0];
});
</script>

<template>
  <div>
    <div class="px-3">
      <h3
        class="font-semibold uppercase md:text-4xl ssm:text-md text-cus-primary"
      >
        events & seminars
      </h3>
      <h4
        class="font-semibold uppercase md:text-3xl ssm:text-md text-cus-secondary"
      >
        Coming soon
      </h4>
    </div>
    <div class="flex items-center justify-between">
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
        class="lg:w-[1300px] md:w-[800px] ssm:w-[300px]"
        v-if="comingSoonEvent"
      >
        <template v-for="event in comingSoonEvent" :key="event.id">
          <swiper-slide>
            <EventCard
              :event="event"
              class="md:ml-[200px] ssm:ml-[350px] lg:ml-0 md:w-[500px] ssm:w-[280px]"
            />
          </swiper-slide>
        </template>
      </swiper>
    </div>
    <div
      class="swiper-home-event-pagination mx-auto flex justify-center h-[10px]"
    ></div>
    <div
      v-if="currentActiveEvent"
      class="grid grid-cols-4 p-3 gap-3 md:w-[500px] md:ml-[68px] cus-glass-card cus-rounded"
    >
      <div class="col-span-1">
        <div class="flex flex-col items-center p-2">
          <div class="font-bold text-cus-primary-pale">
            {{
              new Date(currentActiveEvent.start_date).toLocaleString("en-US", {
                month: "short",
              })
            }}
            <!-- {{ getShortMonth(currentActiveEvent.start_date) }} -->
          </div>
          <div class="font-bold">
            {{
              new Date(currentActiveEvent.start_date).toLocaleString("en-US", {
                day: "2-digit",
              })
            }}
          </div>
        </div>
      </div>
      <div class="col-span-3 space-y-2">
        <h3
          class="md:text-md ssm:text-[20px] font-semibold capitalize truncate"
        >
          {{ currentActiveEvent.title }}
          <p class="text-sm font-normal truncate-two text-wrap">
            {{ currentActiveEvent.description }}
          </p>
        </h3>
      </div>
    </div>
  </div>
  <!-- <div class="w-[600px] mx-auto">
    <div class="flex flex-col gap-6 sm:flex-row">
      <div class="w-full min-w-[160px]">
        <div class="relative" data-te-dropdown-ref>
          <a
            class="w-full border cus-rounded  flex items-center justify-between px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
            href="#"
            type="button"
            id="dropdownMenuButton2"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {{ filters.country?.name ?? "Country" }}
            <span class="w-2 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
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
            class="max-h-[300px] w-full absolute cus-rounded z-[1000] float-left m-0 hidden list-none overflow-y-scroll overflow-x-hidden border-none  bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block duration-75"
            aria-labelledby="dropdownMenuButton2"
            data-te-dropdown-menu-ref
          >
            <li v-for="(country, index) in currentCountries" :key="index">
              <div
                @click="handleCountriesSelect(country)"
                class="block w-full px-4 py-2 text-sm font-normal bg-transparent text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
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
            class="w-full border cus-rounded  flex items-center justify-between px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
            href="#"
            type="button"
            id="dropdownMenuButton3"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {{ filters.university?.name ?? "University" }}
            <span class="w-2 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
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
            class="max-h-[300px] w-full absolute cus-rounded z-[1000] float-left m-0 hidden list-none overflow-y-scroll overflow-x-hidden border-none  bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block duration-75"
            aria-labelledby="dropdownMenuButton3"
            data-te-dropdown-menu-ref
          >
            <li v-for="(uni, index) in currentUniversities" :key="index">
              <div
                @click="handleUniversitySelect(uni)"
                class="block w-full px-4 py-2 text-sm font-normal bg-transparent text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
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
  </div> -->
</template>

<style>
#homeEventSwiper .swiper-wrapper {
  margin-left: -320px;
}
</style>
