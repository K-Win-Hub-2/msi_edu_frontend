<template>
  <div class="">
    <div class="">
      <div class="flex justify-center relative">
        <div
          class="absolute bottom-1 lg:left-[180px] md:left-[60px] sm:left-10"
        >
          <Button
            @click="toRegisterForm"
            class="lg:px-[82px] md:px-[30px] md:text-[25px] sm:px-[20px] sm:py-[6px] sm:mr-6 lg:text-[30px] px-[17px] lg:py-[16px] md:py-[14px] py-[2px] rounded-[20px] md:mr-[35px] mr-[2px]"
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
          class="lg:w-[1440px] xl:w-full md:w-[768px] sm:w-full md:h-[450px] xl:h-[674px] xl:mt-40 md:mt-20"
        />
      </div>
      <div class="w-full relative overflow-hidden pb-10">
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
          <div class="flex justify-center sm:mx-5 relative z-40">
            <div class="xl:w-[1158px] md:w-[800px] sm:w-[600px] md:px-5">
              <p
                class="xl:text-md md:text-[20px] sm:mb-5 font-[500] mt-10 text-[#FE015E]"
              >
                {{ currentEvent.start_date }}
                <!-- {{ yangon ? "Date:Sat Feb 24 2024" : "Date:Sun Feb 25 2024" }} -->
              </p>
              <h1
                class="xl:text-lg md:text-md sm:text-[20px] text-[#215887] sm:mb-6 xl:mt-16 xl:mb-20 md:mt-12 md:mb-16 font-[600]"
              >
                {{ currentEvent.title }}
                <!-- 15th MSI Global Education Exhibition -->
              </h1>
              <p class="xl:text-md md:text-sm">
                {{ currentEvent.description }}
                <!-- Discover a world of opportunities at our exhibition, where you can
              explore a diverse range of educational programs from around the
              globe. Whether you're a student looking for the perfect
              university, a professional seeking to enhance your skills, or an
              educator interested in collaboration, this event is your gateway
              to international education excellence. This exhibition is
              organized by 22 Awards-Wining Education Consultancy, Myanmar
              Search International (MSI). The top-ranking universities,
              colleges, and institutions all over the world will participate. -->
              </p>

              <p
                class="xl:text-md md:text-sm xl:mt-32 md:mt-24 sm:mt-14 mb-32 text-[#215887] font-[500]"
              >
                Participant Universities <br />
                • University of Northampton, UK <br />
                • Orange Coast College, U.S.A. <br />
                • Green River College, U.S.A. <br />
                • Swiss Education Group, Switzerland <br />
                • University of Canada West, Canada <br />
                • Taylor’s University,Malaysia <br />
                • Monash University, Malaysia <br />
                •SEGi University, Malaysia <br />
                • Sunway University, Malaysia <br />
                • Asia Pacific University of Technology & Innovation <br />
                • James Cook University, Singapore <br />
                • SIM Global Education, Singapore <br />
                • PSB Academy, Singapore <br />
                • Raffles, Singapore and Thailand <br />
                • NIM Nanyang Institute of Management <br />
                • MDIS-Management Development Institute of Singapore <br />
                <br />
                The university representative will explain the education pathway
                to study abroad and offer scholarships and other career
                opportunities.
              </p>
            </div>
          </div>
        </div>
        <!-- card start -->
        <div class="flex justify-center relative z-30">
          <div
            class="xl:w-[1236px] md:w-[730px] sm:w-[600px] xl:h-[424px] sm:h-[300px] md:h-[310px] bg-[#EDF7FF] rounded-[16px] md:px-10 md:py-10 xl:px-16 sm:px-10 sm:py-10 xl:py-24"
          >
            <ul>
              <li class="xl:text-md md:text-sm flex items-center">
                <p class="md:min-w-60 sm:min-w-32">Event Date</p>
                <p>
                  : {{ currentEvent.start_date }}
                  <!-- : 24. 2. 2024 (Saturday) : 25. 2. 2024 (Sunday) -->
                </p>
              </li>
              <li
                class="xl:text-md md:text-sm flex items-center md:my-9 sm:my-4"
              >
                <p class="md:min-w-60 sm:min-w-32">Event Time</p>
                <p>
                  : {{ currentEvent.start_time }} - {{ currentEvent.end_time }}
                </p>
              </li>

              <li class="xl:text-md md:text-sm flex">
                <p class="md:min-w-60 sm:min-w-32">Venue</p>
                <p>: {{ currentEvent.venue }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-center relative z-30 mt-3">
          <div class="xl:w-[1280px] md:w-[730px] sm:w-[600px] flex justify-end">
            <Button
              @click="toRegisterForm"
              class="lg:px-[82px] md:px-[20px] sm:px-[18px] sm:py-[10px] md:text-md sm:mr-6 lg:text-[30px] px-[17px] lg:py-[16px] md:py-[14px] py-[2px] rounded-[20px] mr-[2px]"
              type="gradient"
              data-te-toggle="modal"
              data-te-target="#appointmentFormModal"
              data-te-ripple-init
              data-te-ripple-color="light"
              >Register</Button
            >
          </div>
        </div>
        <!-- card end -->
      </div>

      <div class="flex justify-center items-center xl:my-44 sm:my-8 md:my-28">
        <div class="w-[1236px] mt-3 flex items-center justify-between">
          <div class="">
            <h1
              class="xl:text-lg text-cus-primary sm:text-md sm:ml-4 md:text-lg md:ml-10 font-[700]"
            >
              More Events
            </h1>
            <!-- swiper -->
            <div class="container mt-16 relative">
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
                  class="mySwiper flex justify-center lg:min-w-[1050px] md:min-w-[700px] sm:min-w-[370px]"
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
                          name: 'event.upcomingDetail',
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

              <!-- <div
                    class="w-[313px] h-[254px] oldEventCard"
                    v-for="event in moreEvents"
                    :key="event.id"
                  >
                    <router-link
                      :to="{ name: 'events.detail', params: { id: event.id } }"
                    >
                      <div class="flex justify-center">
                        <div class="mt-2">
                          <img
                            :src="event.image"
                            class="h-[151px] w-100"
                            alt=""
                          />
                          <div class="py-[24px] flex justify-center">
                            <Button class="px-6 py-2" type="gradient"
                              >view All</Button
                            >
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div> -->
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

// fetch each product

const fetchData = async () => {
  const res = await eventStore.fetchEvent();
  events.value = res.data.latestEvent;
  events.value.map((event) => {
    if (props.id == event.id) {
      currentEvent.value = event;
    } else {
      moreEvents.value = [];
      setInterval(moreEvents.value.push(event), 120);
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
  fetchData();
});

onBeforeRouteUpdate(() => {
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
