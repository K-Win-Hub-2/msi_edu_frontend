<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import UniversitiesSlider from "../Home/UniversitiesSlider.vue";
</script>

<template>
  <!-- <div class="bg-[url('@/assets/img/AboutUs/hero.jpg')] bg-[length:100%_120%] h-[700px] mt-[44px]">
    <div class="container px-3 h-[600px]">
      <div class="flex items-center justify-end h-full">
        <div
          class="p-3 xl:p-12 xl:w-[500px] bg-white bg-opacity-80 text-left space-y-6 mt-[56px] z-10 rounded-sm xl:rounded-xl">
          <h1 class="cus-heading !text-5xl text-cus-secondary uppercase mb-8">
            who we are...
          </h1>
          <p class="cus-paragraph">
            Welcome to Myanmar Search International, a leading education consultancy firm that assists students in
            pursuing their dream of studying abroad. At Myanmar Search International, we understand that choosing a
            university or college in a foreign country can be an overwhelming experience. That's why our team of ex-
            perienced consultants is dedicated to guiding students through the entire process, from selecting the right
            program to applying for a visa.</p>
          <Button>
            <span>Read More ...</span>
          </Button>
        </div>
      </div>
    </div>
  </div> -->
  <div class="overflow-hidden h-[650px] relative">
    <video
      autoplay
      loop
      muted
      plays-inline
      class="absolute right-0 w-full bottom-0"
    >
      <source src="../../assets/videos/brief.mp4" type="video/mp4" />
    </video>

    <!-- <div class="absolute left-20 bottom-20">
      <a href="https://youtu.be/P3XLi-j5zac?si=5QgI0TbLXNAs63SW" target="_blank"
        class="text-white uppercase font-bold p-6 text-3xl border-2 w-[100px] lg:w-[400px] z-[10] flex justify-between items-center hover:bg-cus-primary transition hover:border-cus-primary delay-75 cursor-pointer"
      >
        <span class="">Visit Our Office</span>
        <span><ChevronRightIcon class="w-10 h-10 font-bold"  /></span>
      </a>
    </div> -->
    <div class="absolute w-[1300px] h-[200px] bottom-5 left-1/2 -translate-x-1/2">
    <UniversitiesSlider class=""/>
  </div>
  </div>
  <!-- <div class="justify-center p-5 pt-0 capitalize text-center flex flex-col items-center">
    <img src="@/assets/img/logo.png" class="w-[500px] pb-12" alt="">
    <div class="flex items-center gap-3">
      <span class="text-base"></span>
      <a href="https://youtu.be/P3XLi-j5zac" target="_blank"
        class="p-3 text-sm rounded-2xl bg-cus-primary text-white">Visit our school</a>
       
      <span>
        Visit Our School
      </span>
      <button type="button" data-te-toggle="modal" data-te-target="#exampleModal"
        class="text-3xl text-gray-400 bg-white shadow  p-1 rounded-full w-[40px] h-[40px] flex items-center justify-center"
        data-te-ripple-init data-te-ripple-color="light">
        <i class="fa-regular fa-circle-play"></i>
      </button>
    </div>
  </div>

  <HeroVideoModal /> -->
</template>

<style lang="scss" scoped></style>
