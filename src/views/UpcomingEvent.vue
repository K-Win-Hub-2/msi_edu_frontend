<template>
  <div class="my-32">
    <div class="">
      <div class="container mx-auto">
        <!-- yangon event -->
        <div class="">
          <h1
            class="xl:text-md mb-8 underline lg:text-lg md:text-md sm:text-md sm:ml-5 text-[#205887] font-[700]"
          >
            Yangon Events
          </h1>

          <div class="sm:flex sm:justify-center">
            <div
              v-for="ygnEvent in yangonEvent"
              :key="ygnEvent.id"
              class="grid md:grid-cols-2 md:gap-y-10 sm:gap-y-6 md:gap-x-8 sm:gap-x-1 sm:grid-cols-1 lg:grid-cols-3"
            >
              <UpcomingEventCard :event="ygnEvent" />
            </div>
          </div>
        </div>
        <hr class="mt-5" />
        <!-- mandalay event -->
        <div class="mt-20">
          <h1
            class="mt-11 xl:text-md mb-8 underline lg:text-lg md:text-md sm:text-md sm:ml-5 text-[#205887] font-[700]"
          >
            Mandalay Events
          </h1>

          <div class="sm:flex sm:justify-center">
            <div
              v-for="mdyEvent in mandalayEvent"
              :key="mdyEvent.id"
              class="grid md:grid-cols-2 md:gap-y-10 sm:gap-y-6 md:gap-x-8 sm:gap-x-1 sm:grid-cols-1 lg:grid-cols-3"
            >
              <UpcomingEventCard :event="mdyEvent" />
            </div>
          </div>
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
