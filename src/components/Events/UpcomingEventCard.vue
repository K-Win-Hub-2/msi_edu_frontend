<template>
  <router-link
    :to="{ name: 'event.upcomingDetail', params: { id: props.event.id } }"
    class="sm:w-[320px] ssm:w-[300px] sm:h-[380px] oldEventCard"
  >
    <div class="">
      <img
        :src="props.event.imageURL"
        class="mx-2 mt-3 ssm:w-[280px] sm:w-[300px] h-[200px] rounded-md"
        alt=""
      />
      <p class="mt-2 ml-3">
        {{ props.event.title }}
      </p>
      <p class="ml-3 mt-1 text-[14px]">
        <i class="mr-2 fa-solid fa-calendar-days"></i>
        {{ props.event.start_date }}
      </p>
      <p class="text-[14px] ml-3 mb-2">
        <i class="mr-4 fa-solid fa-location-dot"></i>
        <span v-if="props.event.event_location_id == 1">Yangon</span>
        <span v-else>Mandalay</span>
      </p>

      <hr />
      <div class="flex justify-center ssm:my-2">
        <Button
          @click="toRegisterForm()"
          class="mt-1 mx-auto ssm:py-2 ssm:px-4 lg:px-[43px] lg:py-[9px] md:px-[20px] lg:text-[15px] text-[14px] md: md:py-[14px] py-[2px] rounded-[20px] md:text-[10px]"
          type="gradient"
          data-te-toggle="modal"
          data-te-target="#appointmentFormModal"
          data-te-ripple-init
          data-te-ripple-color="light"
          >See More</Button
        >
      </div>
    </div>
  </router-link>
</template>

<script setup>
import router from "../../router";
import Button from "../partials/Button.vue";
const props = defineProps(["event"]);

const toRegisterForm = () => {
  router.push({ name: "event-register-form", params: { id: props.event.id } });
};
</script>

<style></style>
