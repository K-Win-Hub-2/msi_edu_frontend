<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
import { useRouter } from "vue-router"; // [CHANGE 1] Added useRouter for navigation
import EventCard from "../../components/general/EventCard.vue";
// These utils and mocks are assumed to exist in your local project setup
import { getShortMonth, getDay } from "@/utils/date.js";
import { universities } from "../../mocks/universities";
import { countries } from "../../mocks/countries";
import { events } from "../../mocks/events";
import Button from "../partials/Button.vue";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const router = useRouter(); // [CHANGE 2] Initialize router instance

const currentEvents = ref([]);
const start = ref(true);
const end = ref(false);
const comingSoonEvent = ref(null);
const currentActiveEvent = ref({});
const currentUniversities = ref([]);
const currentCountries = ref([]);
const filters = ref({});

// Swiper setup (EffectCoverflow is removed for a cleaner look)
const modules = [Pagination, Autoplay];

const onSwiper = (swiper) => {
  console.log(swiper);
};

const swiperOptions = {
  loop: true,
  breakpoints: {
    // Mobile (0px and up)
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // Tablet (768px and up)
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // Desktop (1024px and up)
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // Wide Desktop (1280px and up)
    1280: {
      slidesPerView: 3.5, // Slightly less than 4 to keep focus on the center slide
      spaceBetween: 50,
    },
  },
  pagination: {
    el: ".swiper-home-event-pagination",
    clickable: true,
  },
  autoplay: {
    // Autoplay is enabled
    delay: 3000,
    disableOnInteraction: false,
  },
};
// swiper end

const handleUniversitySelect = (university) => {
  filters.value.university = { ...university };
};

const updateCurrentUniversities = () => {
  console.log(filters.value);
  const filteredUniversities = universities.filter((university) => {
    if (
      filters.value.country &&
      university.country == filters.value.country.name
    )
      return true;
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

// [CHANGE 3] Function to handle navigation to the event details page
const goToEventDetails = (eventId) => {
  if (eventId) {
    router.push({ name: "event.upcomingDetail", params: { id: eventId } });
    console.log(`Navigating to event details for ID: ${eventId}`);
  } else {
    console.warn("Event ID is missing. Cannot navigate.");
  }
};

// fetch data
const fetchData = async () => {
  try {
    const res = await axios.get("latestEventList");
    comingSoonEvent.value = res.data.latestEvent;
    currentActiveEvent.value = res.data.latestEvent[0];
  } catch (error) {
    console.error("Failed to fetch event data:", error);
    // Fallback/Mock data initialization if API fails
    comingSoonEvent.value = events;
    currentActiveEvent.value = events[0];
  }
};

const onSlideChange = (event) => {
  // Swiper's realIndex or activeIndex should be used carefully with loop
  const eventIndex =
    event.realIndex !== undefined ? event.realIndex : event.activeIndex;
  if (comingSoonEvent.value && comingSoonEvent.value.length > 0) {
    currentActiveEvent.value = comingSoonEvent.value[eventIndex];
  }

  // Update navigation state
  start.value = event.isBeginning;
  end.value = event.isEnd;
};

onMounted(() => {
  fetchData();
  currentCountries.value = [...countries];
});
</script>

<template>
  <!-- Main container with vertical spacing -->
  <div class="mt-12 overflow-hidden">
    <div class="px-4 mx-auto sm:px-6 max-w-7xl">
      <h3 class="text-2xl font-semibold uppercase md:text-4xl text-cus-primary">
        events & seminars
      </h3>
      <h4
        class="mb-8 text-xl font-semibold uppercase md:text-3xl text-cus-secondary"
      >
        Coming soon
      </h4>
    </div>

    <!-- Swiper Carousel -->
    <div class="flex items-center justify-center">
      <swiper
        :autoplay="swiperOptions.autoplay"
        :space-between="swiperOptions.spaceBetween"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        :pagination="swiperOptions.pagination"
        :modules="modules"
        :grabCursor="true"
        :centeredSlides="true"
        id="homeEventSwiper"
        class="w-full py-6"
        v-if="comingSoonEvent && comingSoonEvent.length > 0"
      >
        <template v-for="event in comingSoonEvent" :key="event.id">
          <swiper-slide>
            <EventCard :event="event" class="w-full h-auto" />
          </swiper-slide>
        </template>
      </swiper>
      <div v-else class="py-20 text-center text-gray-500">
        Loading events...
      </div>
    </div>

    <!-- Custom Pagination Dots -->
    <div
      class="flex justify-center h-4 mx-auto mt-4 swiper-home-event-pagination"
    ></div>

    <!-- Active Event Highlight Card (Structured and Clear Layout) -->
    <div
      v-if="currentActiveEvent.id"
      class="max-w-xl p-4 mx-auto mt-12 transition-all duration-300 ease-in-out bg-white border border-gray-100 shadow-xl sm:p-6 rounded-xl hover:shadow-2xl"
    >
      <div class="flex items-center space-x-4 sm:space-x-6">
        <!-- Date Block (Visually Prominent) -->
        <div
          class="flex flex-col items-center flex-shrink-0 w-16 p-3 text-white rounded-lg shadow-md sm:p-4 sm:w-20 bg-cus-primary"
        >
          <div class="text-xs font-bold tracking-wider uppercase">
            {{
              new Date(currentActiveEvent.start_date).toLocaleString("en-US", {
                month: "short",
              })
            }}
          </div>
          <div class="text-xl sm:text-2xl font-extrabold leading-none mt-0.5">
            {{
              new Date(currentActiveEvent.start_date).toLocaleString("en-US", {
                day: "2-digit",
              })
            }}
          </div>
        </div>

        <!-- Event Info Block -->
        <div class="min-w-0 space-y-1">
          <h3
            class="text-lg font-bold capitalize truncate sm:text-xl text-cus-primary-dark"
          >
            {{ currentActiveEvent.title }}
          </h3>
          <p class="text-sm font-normal text-gray-600 line-clamp-2">
            {{ currentActiveEvent.description }}
          </p>
          <Button
            class="mt-2 text-xs"
            variant="secondary"
            @click="goToEventDetails(currentActiveEvent.id)"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Custom styles for Swiper pagination dots to make them visible and match theme */
.swiper-home-event-pagination.swiper-pagination-bullets
  .swiper-pagination-bullet {
  background: #cbd5e1; /* Light gray */
  opacity: 1;
  transition: all 0.3s ease;
}
.swiper-home-event-pagination.swiper-pagination-bullets
  .swiper-pagination-bullet-active {
  background: #0f2948; /* cus-primary color placeholder */
  width: 1rem;
  border-radius: 9999px;
}
</style>