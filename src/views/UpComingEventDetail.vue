<template>
  <div class="" v-if="currentEvent">
    <div class="">
      <div class="relative flex justify-center">
        <div
          class="absolute bottom-1 lg:left-[180px] md:left-[60px] sm:left-10"
        >
          <Button
            @click="toRegisterForm"
            class="lg:px-[82px] md:px-[30px] md:text-[25px] ssm:px-[20px] ssm:py-[6px] sm:mr-6 ssm:mr-48 lg:text-[30px] px-[17px] lg:py-[16px] md:py-[14px] py-[2px] rounded-[20px] md:mr-[35px] mr-[2px]"
            type="gradient"
            data-te-toggle="modal"
            data-te-target="#appointmentFormModal"
            data-te-ripple-init
            data-te-ripple-color="light"
            >Register</Button
          >
        </div>
        <img
          :src="currentEvent.imageURL"
          alt=""
          class="xl:w-full md:w-full sm:w-full md:h-[500px] xl:h-[800px] xl:mt-40 md:mt-20"
        />
      </div>
      <div class="relative w-full pb-10 overflow-hidden">
        <div class="">
          <div
            class="bg-[url(@/assets/img/scholarship/image.png)] bg-[length:100%_100%] bottom-0 z-30 w-[100%] h-[100%] bg-no-repeat absolute top-0"
          ></div>
          <div
            class="bg-[url(../../assets/img/scholarship/ellipse9.png)] z-40 w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute rotate-180 lg:bottom-[-150px] right-[450px] lg:left-[-1100px] md:bottom-[-80px] bottom-[-50px] md:left-[-550px]"
          ></div>
          <div
            class="bg-[url(@/assets/img/scholarship/ellipse9.png)] z-30 w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute lg:top-[-7px] xl:top-[-40px] md:top-[-18px] md:right-[-550px] xl:right-[-1050px] right-[-400px] top-[-8px] lg:right-[-1200px]"
          ></div>
          <!-- event detail start -->
          <div class="container md:mx-auto h-[600px] relative z-40 ssm:mx-5">
            <div class="">
              <h1
                class="sm:text-md ssm:text-[20px] md:mt-14 ssm:mt-5 text-red-500"
              >
                <i class="mr-2 fa-solid fa-calendar-days"></i
                >{{ currentEvent.start_date }}
                <span v-if="currentEvent.event_location_id == 1">(Yangon)</span>
                <span v-else>(Mandalay)</span>
              </h1>
              <h1
                class="md:text-lg sm:text-md ssm:text-[20px] ms:text-[20px] text-[#205887] md:my-14 ssm:my-7 text-shadow-lg font-bold"
              >
                {{ currentEvent.title }}
              </h1>
              <h1
                class="md:text-md ssm:text-sm ssm:mr-5"
                v-html="currentEvent.description.replace(/\n/g, '<br>')"
              ></h1>
            </div>
          </div>
          <!-- event detail end -->
          <!-- event card start -->
          <div class="container relative z-30">
            <div
              class="bg-[#EDF7FF] rounded-2xl flex items-center md:h-[436px] md:mt-14"
            >
              <div class="md:ml-20 ssm:mx-5 ssm:py-5">
                <h1 class="md:text-md ssm:text-[16px] sm:text-[18px] flex">
                  <p class="md:min-w-[230px] ssm:min-w-[110px]">Event Date</p>
                  <p>: {{ currentEvent.start_date }}</p>
                </h1>
                <h1
                  class="md:text-md ssm:text-[16px] sm:text-[18px] flex md:my-7 ssm:my-4"
                >
                  <p class="md:min-w-[230px] ssm:min-w-[110px]">Event Time</p>
                  <p>
                    : {{ currentEvent.start_time }} to
                    {{ currentEvent.end_time }}
                  </p>
                </h1>
                <h1
                  class="md:text-md ssm:text-[16px] sm:text-[18px] flex md:my-7"
                >
                  <span class="md:min-w-[230px] ssm:min-w-[110px]">Venue</span>
                  <span>: {{ currentEvent.venue }}</span>
                </h1>
              </div>
            </div>
            <Button
              @click="toRegisterForm"
              class="lg:px-[82px] ssm:px-10 ssm:py-2 ssm:mr-2 md:px-[30px] float-right mt-5 md:text-[25px] sm:px-[20px] sm:py-[6px] lg:text-[30px] px-[17px] lg:py-[16px] md:py-[14px] py-[2px] rounded-[20px]"
              type="gradient"
              data-te-toggle="modal"
              data-te-target="#appointmentFormModal"
              data-te-ripple-init
              data-te-ripple-color="light"
              >Register</Button
            >
          </div>
        </div>
      </div>
      <div class="container md:mt-14 ssm:mt-8">
        <h1
          class="font-semibold md:text-lg ssm:mx-5 ssm:text-md text-cus-primary text-shadow-lg"
        >
          More Events
        </h1>
        <!-- event card end -->
        <div class="flex justify-center w-full">
          <div class="relative">
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
                class="mySwiper flex lg:min-w-[1050px] md:min-w-[800px] ssm:max-w-[300px] sm:max-w-[320px] lg:max-w-[1050px]"
              >
                <swiper-slide
                  class="flex justify-center w-full py-12"
                  v-for="event in moreEvents"
                  :key="event.id"
                >
                  <div
                    class="sm:min-w-[313px] ssm:min-w-[270px] min-h-[254px] oldEventCard"
                  >
                    <router-link
                      :to="{
                        name: 'event.upcomingDetail',
                        params: { id: event.id },
                      }"
                    >
                      <div class="flex justify-center">
                        <div class="mt-2">
                          <img
                            :src="event.imageURL"
                            class="sm:w-[300px] ssm:w-[290px] rounded-md sm:mx-0 h-[200px]"
                            alt=""
                          />
                          <h1 class="mt-2 text-sm ssm:ml-4 sm:mx-0">
                            {{ event.title }}
                          </h1>
                          <h1 class="ssm:ml-4 sm:mx-0">
                            <i class="mr-2 fa-solid fa-calendar-days"></i>
                            {{ event.start_date }}
                          </h1>
                          <p class="mb-2 text-sm ssm:ml-4 sm:mx-0">
                            <i class="mr-2 fa-solid fa-location-dot"></i>
                            <span v-if="event.event_location_id == 1"
                              >Yangon</span
                            >
                            <span v-else>Mandalay</span>
                          </p>
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
                class="absolute left-0 -translate-y-1/2 swiper-event-more-list-button-prev-unique top-1/2"
              >
                <ChevronLeftIcon
                  :class="{ 'opacity-50': start }"
                  class="w-12 h-12 text-cus-primary ssm:hidden md:block"
                />
              </div>
              <div
                class="absolute right-0 -translate-y-1/2 swiper-event-more-list-button-next-unique top-1/2"
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

  <div class="flex justify-center items-center my-[300px]" v-else>
    <div role="status flex-justify-center items-center w-full h-[600px]">
      <div class="">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
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
// swiper end
import Button from "../components/partials/Button.vue";
import Link from "@/components/partials/Link.vue";
import MySwiper from "@/components/MySwiper.vue";
import EventSwiper from "@/components/Events/EventSwiper.vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import EventCard from "../components/general/EventCard.vue";
import axios from "axios";
import { useEventStore } from "../stores/event";
const yangon = ref(true);
const events = ref(null);
const eventStore = useEventStore();
import upcomingImg from "../assets/img/events/upcomingEvent.png";
const props = defineProps(["id"]);

const router = useRouter();
const currentEvent = ref({});
const moreEvents = ref([]);

const fetchData = async () => {
  const res = await eventStore.fetchEvent();
  events.value = res.data.latestEvent;
  res.data.latestEvent.map((event) => {
    if (props.id == event.id) {
      currentEvent.value = event;
    } else {
      const existingEvent = moreEvents.value.find(
        (existingEvent) => existingEvent.id === event.id
      );
      if (!existingEvent) {
        moreEvents.value.push(event);
      }
    }
  });
};

// const fetchData = async () => {
//   const res = await eventStore.fetchEvent();
//   events.value = res.data.latestEvent;
//   res.data.latestEvent.map((event) => {
//     if (props.id == event.id) {
//       currentEvent.value = event;
//     } else {
//       moreEvents.value.push(event);
//       // setInterval(moreEvents.value.push(event), 40);
//     }
//   });
// };

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
  fetchData();
});

// router.push({ name: 'user', params: { userId: '123' } })
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
    375: {
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
