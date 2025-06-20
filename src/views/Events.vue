<template>
  <div>
    <div class="bg-white lg:mt-30 md:mt-16 ssm:mt-14" v-if="oldEvents || latestEvent">
      <div class="relative overflow-hidden">
        <div
          class="bg-[url(@/assets/img/scholarship/image.png)] bg-[length:100%_100%] bottom-0 z-30 w-[100%] h-[100%] bg-no-repeat absolute top-0"
        ></div>

        <div class="container relative z-30 lg:mt-48 md:mt-16 ssm:mt-14" v-if="latestEvent.length">
          <!-- title start-->
          <div class="flex justify-between lg:mx-20 ssm:mx-5">
            <h1
              class="text-cus-primary text-shadow-lg md:text-lg ssm:text-[20px] sm:text-md font-semibold"
            >
              UpcomingEvents
            </h1>
            <Button
              @click="upcomingEventPage"
              class="md:text-[14px] lg:px-10 md:px-5 ssm:px-3 sm:py-1 sm:text-[10px] lg:py-1"
              type="gradient"
              data-te-toggle="modal"
              data-te-target="#appointmentFormModal"
              data-te-ripple-init
              data-te-ripple-color="light"
              >View All</Button
            >
          </div>
          <!-- title end -->
          <!--upcoming card start -->
          <div class="flex justify-center lg:my-24 md:my-14 ssm:my-8">
            <div
              class="lg:w-[699px] ssm:mx-5 lg:h-[598px] border-2 rounded-2xl md:px-6 ssm:px-2 ssm:py-2 md:py-4"
            >
              <img
                :src="latestEvent[0]?.imageURL"
                alt=""
                class="w-full rounded-2xl md:h-[377px] sm:h-[220px]"
              />
              <h1
                class="md:text-md sm:text-[20px] font-semibold my-1 text-cus-primary text-shadow-lg"
              >
                {{ latestEvent[0]?.title }}
              </h1>
              <h1 class="md:text-[20px] text-cus-primary">
                <i class="mr-3 font-semibold fa-solid fa-location-dot"></i
                ><span
                  class="font-semibold"
                  v-if="latestEvent[0]?.event_location_id == 1"
                  >Yangon</span
                >
                <span class="font-semibold" v-else>Yangon</span>
              </h1>
              <h1 class="md:text-[20px] text-cus-primary font-semibold">
                <i class="mr-2 fa-solid fa-calendar-days"></i>
                <span>{{ latestEvent[0]?.start_date }}</span>
              </h1>
              <hr />
              <router-link
                v-if="latestEvent[0]?.id"
                :to="{
                  name: 'event.upcomingDetail',
                  params: { id: latestEvent[0].id },
                }"
                class="flex justify-center mt-5"
              >
                <Button
                  class="md:text-[20px] sm:text-[10px] ssm:px-10 ssm:py-2 md:px-20 md:py-3"
                  type="gradient"
                  data-te-toggle="modal"
                  data-te-target="#appointmentFormModal"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  >See more</Button
                >
              </router-link>

            </div>
          </div>
          <!-- upcoming card end -->
        </div>
      </div>
      <hr class="mb-5" />
      <div class="container my-20">
        <div class="flex justify-between mb-4 lg:mx-20 sm:mx-5 ssm:mx-3">
          <h1
            class="font-semibold text-cus-primary text-shadow-lg md:text-lg ssm:text-md"
          >
            Old Events
          </h1>
          <Button
            class="md:text-[14px] lg:px-10 md:px-5 ssm:px-3 sm:py-1 sm:text-[10px] lg:py-1"
            type="gradient"
            data-te-toggle="modal"
            data-te-target="#appointmentFormModal"
            data-te-ripple-init
            data-te-ripple-color="light"
            >View All</Button
          >
        </div>
        <div class="ssm:flex ssm:mt-5 ssm:justify-center">
          <div
            class="grid gap-4 mb-5 lg:grid-cols-3 md:grid-cols-2 ssm:grid-cols-1 md:gap-y-5 lg:mt-20 md:mt-10"
          >
            <div
              class="w-[320px] h-[380px] oldEventCard "
              v-for="event in oldEvents"
              :key="event.id"
            >
              <div class="border rounded-lg">
                <img
                  :src="event.imageURL"
                  class="mx-auto mt-3 w-[300px] h-[200px] rounded-md"
                  alt=""
                />
                <p class="mt-2 ml-5">{{ event.title }}</p>
                <p class="ml-5 mt-1 text-[14px]">
                  <i class="mr-2 fa-solid fa-calendar-days"></i>
                  {{ event.start_date }}
                </p>
                <p class="text-[14px] ml-5 mb-2">
                  <i class="mr-4 fa-solid fa-location-dot"></i
                  ><span v-if="latestEvent[0]?.event_location_id == 1"
                    >Yangon</span
                  >
                  <span v-else>Yangon</span>
                </p>

                <hr />
                <div class="flex justify-center mt-3">
                  <Button
                    @click="toOldEvent(event.id)"
                    class="my-2 mx-auto ssm:py-2 ssm:px-4 lg:px-[43px] lg:py-[9px] md:px-[20px] lg:text-[15px] text-[14px] md: md:py-[14px] py-[2px] rounded-[20px] md:text-[10px]"
                    type="gradient"
                    data-te-toggle="modal"
                    data-te-target="#appointmentFormModal"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    >See More</Button
                  >
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
  </div>

</template>

<script setup>
import EventCard from "../components/general/EventCard.vue";
import Button from "../components/partials/Button.vue";
import upcomingImg from "../assets/img/events/upcomingEvent.png";
import oldEventImg1 from "../assets/img/events/event-1.jpg";
import oldEventImg2 from "../assets/img/events/event-2.jpg";
import oldEventImg3 from "../assets/img/events/event-3.jpg";

import { onMounted, ref } from "vue";
import { useEventStore } from "../stores/event";
import router from "../router";
import axios from "axios";
const latestEvent = ref(null);
const eventStore = useEventStore();

const oldEvents = ref(null);

const upcomingEventPage = () => {
  router.push({ name: "events.upcoming" });
};

const fetchData = async () => {
  const res = await eventStore.fetchEvent();
  if (res) {
    latestEvent.value = res.data.latestEvent;
    oldEvents.value = res.data.oldEvent;
  }
};

const toOldEvent = (id) => {
  router.push({ name: "events.detail", params: { id: id } });
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped></style>
