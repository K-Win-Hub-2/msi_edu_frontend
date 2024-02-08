<template>
  <div class="">
    <div class="">
      <div class="flex justify-center">
        <img
          :src="currentEvent.imageURL"
          alt=""
          class="lg:w-[1440px] sm:w-[641px] sm:h-[320px] xl:w-full md:w-[768px] md:h-[500px] xl:h-[800px] xl:mt-40 md:mt-20"
        />
      </div>
      <div class="w-full relative overflow-hidden ssm:px-3 md:px-0">
        <div
          class="bg-[url(@/assets/img/scholarship/image.png)] bg-[length:100%_100%] bottom-0 z-30 w-[100%] h-[100%] bg-no-repeat absolute top-0"
        ></div>
        <div
          class="bg-[url(../../assets/img/scholarship/ellipse9.png)] z-30 w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute rotate-180 lg:bottom-[-150px] right-[450px] lg:left-[-1200px] md:bottom-[-80px] bottom-[-50px] md:left-[-550px]"
        ></div>
        <div
          class="bg-[url(@/assets/img/scholarship/ellipse9.png)] z-30 w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute lg:top-[-7px] xl:top-[-14px] md:top-[-12px] md:right-[-550px] xl:right-[-950px] right-[-400px] top-[-8px] lg:right-[-1200px]"
        ></div>
        <div class="flex justify-center md:mx-5 relative z-40">
          <div
            class="xl:w-[1158px] lg:w-[1000px] md:w-[768px] sm:w-[600] md:px-5"
          >
            <p
              class="xl:text-md md:text-[20px] sm:mb-5 font-[500] mt-10 text-[#FE015E]"
            >
              Date : {{ currentEvent.start_date }}
            </p>
            <h1
              class="xl:text-lg md:text-md text-[#215887] sm:mb-6 xl:mt-16 xl:mb-24 md:mt-12 md:mb-16 font-[600]"
            >
              {{ currentEvent.title }}
            </h1>
            <p class="xl:text-md md:text-sm">{{ currentEvent.description }}</p>

            <h1 class="txl:text-lg md:text-md text-[#215887] my-12 font-[600]">
              {{ currentEvent.sub_title ? currentEvent.sub_title : "" }}
            </h1>
            <p
              class="xl:text-md md:text-sm mb-5 text-[#215887] font-[500]"
              v-html="[
                currentEvent.sec_description
                  ? currentEvent.sec_description
                  : '',
              ]"
            ></p>
          </div>
        </div>
      </div>

      <div class="flex justify-center xl:mt-36 md:mt-34 sm:mt-14">
        <div
          class="xl:w-[1236px] md:w-[730px] sm:w-[600px] xl:h-[424px] sm:h-[250px] md:h-[310px] bg-[#EDF7FF] rounded-[16px] md:px-10 md:py-10 xl:px-16 sm:px-10 sm:py-10 xl:py-16"
        >
          <ul>
            <li class="xl:text-md ssm:text-sm flex items-center">
              <p class="md:min-w-60 ssm:min-w-28">Event Date</p>
              <p>: {{ currentEvent.start_date }}</p>
            </li>
            <li class="xl:text-md ssm:text-sm flex items-center my-9">
              <p class="md:min-w-60 ssm:min-w-28">Event Time</p>
              <p>: {{ currentEvent.start_time }}</p>
            </li>
            <li class="xl:text-md ssm:text-sm flex">
              <p class="md:min-w-60 ssm:min-w-28">Venue</p>
              <p>: {{ currentEvent.venue }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex justify-center items-center xl:my-44 md:my-28">
        <div class="w-[1236px] mt-3 flex items-center justify-between">
          <div class="">
            <h1
              class="text-[#205887] xl:text-lg md:text-lg sm:text-[24px] sm:ml-5 md:ml-10 font-[700]"
            >
              More Events
            </h1>
            <!-- swiper -->
            <div class="container md:mt-20 xl:mt-20 sm:mt-10 relative">
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
                  class="mySwiper flex justify-center"
                >
                  <!-- slider one -->
                  <swiper-slide
                    class="flex justify-center py-12 w-full"
                    v-for="event in moreEvents"
                    :key="event.id"
                  >
                    <div class="min-w-[313px] min-h-[254px] oldEventCard">
                      <router-link
                        :to="{
                          name: 'events.detail',
                          params: { id: event.id },
                        }"
                      >
                        <div class="flex justify-center">
                          <div class="mt-2">
                            <img
                              :src="event.imageURL"
                              class="w-[300px] h-[200px]"
                              alt=""
                            />
                            <h1 class="text-sm mt-2">{{ event.title }}</h1>
                            <h1>
                              {{ event.start_date }}
                            </h1>
                            <hr />
                            <div class="py-[10px] flex justify-center">
                              <Button class="px-6 py-2" type="gradient"
                                >Visit</Button
                              >
                            </div>
                          </div>
                        </div>
                      </router-link>
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
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <EventRegisterForm ></EventRegisterForm>
  <EventRegisterFormSEG></EventRegisterFormSEG>
  <BookAppointmentForm></BookAppointmentForm>
  <ConsultationForm></ConsultationForm> -->
  <!-- <EventSwiper /> -->
  <!-- <MySwiper /> -->
</template>

<script setup>
// swiper
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import SliderScho from "../components/Scholarship/SliderScho.vue";
const modules = [Navigation, Pagination];
import MySwiper from "@/components/MySwiper.vue";
// swiper end
import Button from "../components/partials/Button.vue";
import Link from "@/components/partials/Link.vue";
import EventSwiper from "@/components/Events/EventSwiper.vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import EventCard from "../components/general/EventCard.vue";
import axios from "axios";
import { useEventStore } from "../stores/event";
const yangon = ref(true);
const events = ref(null);
const eventStore = useEventStore();

const props = defineProps(["id"]);

const router = useRouter();
const currentEvent = ref({});
const moreEvents = ref([]);

// fetch each event

// const fetchData = async () => {
//   const res = await eventStore.fetchEvent();
//   events.value = res.data.oldEvent;
//   events.value.map((event) => {
//     if (props.id == event.id) {
//       currentEvent.value = event;
//     } else {
//       moreEvents.value.push(event);
//     }
//   });
// };

const fetchData = async () => {
  const res = await eventStore.fetchEvent();
  console.log(res.data);
  events.value = res.data.oldEvent;

  events.value.forEach((event) => {
    if (props.id == event.id) {
      currentEvent.value = event;
    } else {
      const isEventAlreadyAdded = moreEvents.value.some(
        (existingEvent) => existingEvent.id === event.id
      );
      if (!isEventAlreadyAdded) {
        moreEvents.value.push(event);
      }
    }
  });
};

// const fetchEvents = ({ id }) => {
//   moreEvents.value = [];
//   events.map((event) => {
//     if (id == event.id) {
//       currentEvent.value = event;
//     } else {
//       moreEvents.value.push(event);
//     }
//   });
// };

onMounted(() => {
  console.log("here");
  fetchData();
});

onBeforeRouteUpdate(() => {
  console.log("update");
  fetchData();
});

// onBeforeRouteUpdate((to, from, next) => {
//   fetchEvents({ id: to.params.id });
//   next();
// });

const toRegisterForm = () => {
  router.push({
    name: "event-register-form",
  });
};

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
      slidesPerView: 3,
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
