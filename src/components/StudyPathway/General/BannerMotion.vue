<script setup>
import Button from "../../partials/Button.vue";
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
      <source
        src="../../../assets/img/StudyPathway/banner.mp4"
        type="video/mp4"
      />
    </video>

    <div class="absolute bottom-2 left-11">
      <a
        href="https://youtu.be/P3XLi-j5zac?si=5QgI0TbLXNAs63SW"
        target="_blank"
      >
        <Button type="gradient" class="md:p-3 ssm:px-3 md:px-8"
          >Get Free Counselling</Button
        >
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
