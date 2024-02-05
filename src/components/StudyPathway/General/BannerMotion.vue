<script setup>
import { useRouter } from "vue-router";
import Button from "../../partials/Button.vue";
const router = useRouter();
const toGetAppointment = () => {
  router.push({ name: "appointment-form" });
};
</script>

<template>
  <!-- <div class="overflow-hidden ">
    <video
      autoplay
      loop
      muted
      plays-inline
      class="right-0 w-full bottom-0"
    >
      <source
        src="../../../assets/img/StudyPathway/banner.mp4"
        type="video/mp4"
      />
    </video>
  </div> -->
  <div class="overflow-hidden relative">
    <video autoplay loop muted plays-inline class="right-0 w-full bottom-0">
      <source src="@/assets/videos/studyPath.mp4" type="video/mp4" />
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
