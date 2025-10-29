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
  <div class="mt-12 overflow-hidden">
    <div class="px-4 sm:px-6">
      <h3 class="text-2xl font-semibold uppercase md:text-4xl text-cus-primary">
        events & seminars
      </h3>
      <h4
        class="mb-8 text-xl font-semibold uppercase md:text-3xl text-cus-secondary"
      >
        Coming soon
      </h4>
    </div>

    <div class="flex items-center justify-center">
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
        :grabCursor="true"
        :centeredSlides="true"
        id="homeEventSwiper"
        class="w-full"
        v-if="comingSoonEvent"
      >
        <template v-for="event in comingSoonEvent" :key="event.id">
          <swiper-slide>
            <EventCard :event="event" class="w-full" />
          </swiper-slide>
        </template>
      </swiper>
    </div>

    <div
      class="swiper-home-event-pagination mx-auto flex justify-center h-[10px] mt-4"
    ></div>

    <div
      v-if="currentActiveEvent"
      class="grid max-w-lg grid-cols-4 gap-3 p-3 px-4 mx-auto mt-8 cus-glass-card cus-rounded sm:px-6"
    >
      <div class="col-span-1">
        <div class="flex flex-col items-center p-2">
          <div class="text-sm font-bold text-cus-primary-pale">
            {{
              new Date(currentActiveEvent.start_date).toLocaleString("en-US", {
                month: "short",
              })
            }}
          </div>
          <div class="text-xl font-bold">
            {{
              new Date(currentActiveEvent.start_date).toLocaleString("en-US", {
                day: "2-digit",
              })
            }}
          </div>
        </div>
      </div>

      <div class="col-span-3 space-y-1">
        <h3 class="text-lg font-semibold capitalize">
          {{ currentActiveEvent.title }}
        </h3>
        <p class="text-sm font-normal text-wrap line-clamp-2">
          {{ currentActiveEvent.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
#homeEventSwiper .swiper-wrapper {
  margin-left: -320px;
}
</style>
