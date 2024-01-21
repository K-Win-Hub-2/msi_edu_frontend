<template>
  <router-link
    :to="{ name: 'event.upcomingDetail', params: { id: props.event.id } }"
    class="w-[320px] h-[380px] oldEventCard"
  >
    <div class="">
      <img
        :src="props.event.imageURL"
        class="mx-auto mt-3 w-[300px] h-[200px] rounded-md"
        alt=""
      />
      <p class="ml-3 mt-2">
        {{ props.event.title }}
      </p>
      <p class="ml-3 mt-1 text-[14px]">
        <i class="fa-solid fa-calendar-days mr-2"></i>
        {{ props.event.start_date }}
      </p>
      <p class="text-[14px] ml-3 mb-2">
        <i class="fa-solid fa-location-dot mr-4"></i>
        <span v-if="props.event.event_location_id == 1">Yangon</span>
        <span v-else>Mandalay</span>
      </p>

      <hr />
      <div class="flex justify-center mt-3">
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
