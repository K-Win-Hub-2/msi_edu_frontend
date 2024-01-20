<template>
  <div class="container mx-auto lg:mt-32 md:mt-24 sm:mt-10">
    <div class="">
      <h1
        class="text-cus-primary text-md font-semibold underline sm:text-center md:text-start"
      >
        Yangon Events
      </h1>
      <div class="flex flex-wrap md:space-x-7 sm:space-y-5 md:space-y-0 mt-7">
        <div
          class="flex sm:mx-8 md:mx-0"
          v-for="event in yangonEvent"
          :key="event"
        >
          <UpcomingEventCard :event="event" />
        </div>
      </div>
    </div>

    <div class="my-5">
      <h1
        class="text-cus-primary text-md font-semibold underline sm:text-center md:text-start"
      >
        Mandalay Events
      </h1>
      <div class="flex flex-wrap space-x-7 mt-7">
        <div
          class="flex sm:mx-8 md:mx-0"
          v-for="event in mandalayEvent"
          :key="event"
        >
          <UpcomingEventCard :event="event" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import UpcomingEventCard from "../components/Events/UpcomingEventCard.vue";
const events = ref(null);
const yangon = ref(true);
const yangonEvent = ref([]);
const mandalayEvent = ref([]);
const fetchEvent = async () => {
  const res = await axios.get(
    "http://adminpanel.msieducation.edu.mm/api/latestEventList"
  );
  if (res) {
    events.value = res.data.latestEvent;
    events.value.map((event) => {
      if (event.event_location_id == 1) {
        yangonEvent.value.push(event);
      } else {
        mandalayEvent.value.push(event);
      }
    });
  }
};

onMounted(() => {
  fetchEvent();
});
</script>

<style lang="scss" scoped></style>
