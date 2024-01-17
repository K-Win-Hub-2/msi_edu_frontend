<template>
  <div class="my-40">
    <div class="flex justify-center">
      <div class="container">
        <h1
          class="xl:text-xl lg:text-lg md:text-md sm:text-md sm:ml-5 text-[#205887] font-[700] mb-20"
        >
          Upcoming Events
        </h1>
        <div class="sm:flex sm:justify-center">
          <div
            v-for="event in events"
            :key="event.id"
            class="grid md:grid-cols-2 md:gap-y-10 sm:gap-y-6 md:gap-x-8 sm:gap-x-1 sm:grid-cols-1 lg:grid-cols-3"
          >
            <UpcomingEventCard :event="event" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import UpcomingEventCard from "../components/Events/UpcomingEventCard.vue";
const events = ref(null);
const fetchEvent = async () => {
  const res = await axios.get(
    "http://adminpanel.msieducation.edu.mm/api/latestEventList"
  );
  events.value = res.data.latestEvent;
  console.log(events.value);
};
onMounted(() => {
  fetchEvent();
});
</script>

<style lang="scss" scoped></style>
