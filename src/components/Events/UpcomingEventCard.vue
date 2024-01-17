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

      <Button
        @click="toRegisterForm()"
        class="ml-16 mt-4 mx-auto lg:px-[43px] lg:py-[9px] md:px-[20px] lg:text-[15px] md:py-[18px] py-[2px] rounded-[20px] md:text-[10px]"
        type="gradient"
        data-te-toggle="modal"
        data-te-target="#appointmentFormModal"
        data-te-ripple-init
        data-te-ripple-color="light"
        >Register</Button
      >
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
