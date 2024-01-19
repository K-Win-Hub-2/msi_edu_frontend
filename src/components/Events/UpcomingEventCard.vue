<template>
  <router-link
    :to="{ name: 'event.upcomingDetail', params: { id: props.event.id } }"
    class="w-[320px] h-[350px] oldEventCard"
  >
    <div class="">
      <img
        :src="props.event.imageURL"
        class="mx-auto mt-3 w-[300px] h-[200px] rounded-md"
        alt=""
      />
      <p class="ml-3 mt-2">{{ props.event.title }}</p>
      <p class="ml-3 mt-2">{{ props.event.start_date }}</p>
      <hr />
      <div class="flex justify-center">
        <Button
          @click="toRegisterForm()"
          class="mt-4 mx-auto sm:py-2 sm:px-2 lg:px-[43px] lg:py-[9px] md:px-[20px] lg:text-[15px] text-[10px] md: md:py-[14px] py-[2px] rounded-[20px] md:text-[10px]"
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

<style lang="scss" scoped></style>
