<template>
  <div class="xl:py-28 lg:py-20 md:py-14" v-if="latestEvent">
    <section class="">
      <div class="overflow-hidden relative w-full">
        <div
          class="bg-[url(@/assets/img/scholarship/image.png)] bg-[length:100%_100%] bottom-0 z-30 w-[100%] h-[100%] bg-no-repeat absolute top-0"
        ></div>
        <div class="z-40 relative xl:mb-56 md:mb-40 sm:mb-36">
          <div class="container">
            <div
              class="flex justify-between items-center mx-10 xl:my-16 md:my-12 sm:my-10"
            >
              <h1
                class="xl:text-xl md:text-md sm:text-md text-cus-primary font-extrabold text-left mb-6"
              >
                Upcoming Events
              </h1>
              <Button
                @click="upcomingEventPage"
                class="px-6 py-2"
                type="gradient"
                >See More</Button
              >
            </div>
            <div class="flex justify-center">
              <router-link
                :to="{
                  name: 'event.upcomingDetail',
                  params: { id: latestEvent[0].id },
                }"
                class="w-[782px] sm:w-[600px] flex justify-center p-[15px] h-[598px] sm:h-[500px] py-5 px-5 border-2 border-[#9F9F9F] rounded-[23px]"
              >
                <div class="">
                  <img
                    :src="latestEvent[0].imageURL"
                    class="h-[378px] sm:h-[300px] w-[699px] rounded-xl"
                    alt=""
                  />
                  <h1
                    class="text-md font-semibold shadow-title text-cus-primary mt-2"
                  >
                    {{ latestEvent[0].title }}
                  </h1>
                  <h1 class="text-sm text-cus-primary">
                    {{ latestEvent[0].start_date }}
                  </h1>
                  <hr />
                  <div class="flex justify-center pt-[14px] lg:py-[14px]">
                    <Button
                      class="w-[283px] sm:w-[200px] flex justify-center h-[89px] sm:h-[80px] items-center text-[35px] sm:text-[20px] font-[700]"
                      type="gradient"
                      >See More</Button
                    >
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <!-- latest event -->
        <!-- <div class="" v-for="event in latestEvent" :key="event">
              <div class="shrink-0">
                <router-link
                  :to="{ name: 'events.detail', params: { id: event.id } }"
                >
                  <div
                    class="bg-white p-3 border cus-standout overflow-hidden hover:border-black transition"
                  >
                    <div class="flex justify-evenly items-center">
                      <div class="w-[50%]">
                        <img :src="event.imageURL" alt="" class="w-24 h-24" />
                      </div>
                      <div class="w-[50%] mr-5">
                        <h1 class="uppercase text-[27px] font-[600] leading-6">
                          <span class="text-[31px] font-[600]">{{
                            event.title
                          }}</span>
                          University
                        </h1>
                        <p class="uppercase text-[12px] font-[300]">
                          The Creative University
                        </p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div> -->
      </div>
      <hr />

      <div class="relative w-full mb-10">
        <div class="container relative z-40">
          <div class="flex justify-between items-center my-16 sm:mx-3">
            <h1
              class="xl:text-xl md:text-lg sm:text-md text-cus-primary font-extrabold text-left xl:mb-6"
            >
              Old Events
            </h1>
            <Button class="px-6 py-2" type="gradient">view All</Button>
          </div>
          <div>
            <div
              class="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 z-20"
            >
              <div
                class="w-[313px] h-[280px] shadow-md oldEventCard"
                v-for="oldEvent in oldEvents"
                :key="oldEvent.id"
              >
                <router-link
                  :to="{ name: 'events.detail', params: { id: oldEvent.id } }"
                >
                  <div class="flex justify-center">
                    <div class="mt-2">
                      <img
                        :src="oldEvent.imageURL"
                        class="w-[284px] rounded-t-lg h-[160px]"
                        alt=""
                      />
                      <h1 class="text-sm mt-2">{{ oldEvent.title }}</h1>
                      <h1>
                        {{ oldEvent.start_date }}
                      </h1>
                      <hr />
                      <div class="py-[10px] flex justify-center">
                        <Button class="px-6 py-1" type="gradient"
                          >See More</Button
                        >
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>

            <!-- <div class="flex justify-center mt-[50px]">
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 mr-3 text-base font-medium text-white bg-gray-500 border border-gray-300 rounded-lg"
            >
              <svg
                class="w-3.5 h-3.5 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Previous
            </a>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-500 border border-gray-300 rounded-lg"
            >
              Next
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div> -->
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="flex justify-center items-center mt-52" v-else>
    <div role="status flex-justify-center">
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
// const fetchData = async () => {
//   const res = await axios.get(
//     "http://adminpanel.msieducation.edu.mm/api/latestEventList"
//   );
//   console.log(res);
// };

const fetchData = async () => {
  const res = await eventStore.fetchEvent();
  if (res) {
    latestEvent.value = res.data.latestEvent;
    oldEvents.value = res.data.oldEvent;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped></style>
