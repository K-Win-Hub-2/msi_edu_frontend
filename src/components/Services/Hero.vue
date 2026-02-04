<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";
import Button from "../partials/Button.vue";
const router = useRouter();
const toGetAppointment = () => {
  router.push({ name: "appointment-form" });
};
</script>

<template>
  <div class="relative overflow-hidden">
    <video autoplay loop muted plays-inline class="bottom-0 right-0 w-full">
      <source src="@/assets/videos/services.mp4" type="video/mp4" />
    </video>

    <div class="absolute bottom-2 left-11">
      <Button
        @click="toGetAppointment"
        type="gradient"
        class="md:p-5 ssm:px-3 md:px-16 text-md"
        >Get Free Counselling</Button
      >
    </div>
  </div>
</template>
