<script setup>
import Hero from "../components/Home/Hero.vue";
import FindUniversity from "../components/Home/FindUniversity.vue";
import ChooseMsi from "../components/Home/ChooseMsi.vue";
import ScholarshipAchievers from "../components/Home/ScholarshipAchievers.vue";
import Events from "../components/Home/Events.vue";
import Awards from "../components/Home/Awards.vue";
import Testimonials from "../components/Home/Testimonials.vue";
import Testimonials2 from "../components/Home/Testimonials2.vue";
import Pathway from "../components/Home/Pathway.vue";
import Facts from "../components/Home/Facts.vue";
</script>

<template>
  <main class="overflow-hidden">
    <section>
      <Hero></Hero>
    </section>

    <!-- Background wrapper for everything under Hero -->
    <div
      class="relative bg-[url('@/assets/img/home/header.png')] bg-contain bg-no-repeat"
    >
      <!-- Pathway Section -->
      <section class="relative">
        <div
          class="w-[100%] h-[500px] bg-no-repeat bg-[length:100%_100%] absolute top-0 left-1/2 -translate-x-1/2"
          alt=""
        ></div>
        <div class="container relative z-40 py-10">
          <Pathway />
        </div>
      </section>

      <!-- Testimonials Section -->
      <section>
        <div class="container relative z-30">
          <Testimonials />
        </div>
      </section>

      <!-- Facts Section -->
      <section>
        <div class="container relative z-30 md:py-12">
          <Facts />
        </div>
      </section>

      <!-- Awards Section -->
      <section class="relative">
        <div
          class="w-[100%] h-[1800px] absolute bottom-[-800px] right-0"
          alt=""
        ></div>
        <div
          class="container relative z-30 px-6 md:pt-12 ssm:pt-6 md:pb-24 ssm:pb-8"
        >
          <Awards></Awards>
        </div>
      </section>

      <!-- Scholarship Section -->
      <section class="relative flex justify-center w-full p-0 m-0">
        <!-- <div
          class="bg-[url(../../assets/img/Home/eventUnviersityBg.png)] w-[100%] h-[650px] bg-no-repeat bg-[length:100%_100%] absolute top-[-300px] left-1/2 -translate-x-1/2"
          alt=""
        ></div> -->

        <div class="relative z-30 w-full max-w-full">
          <ScholarshipAchievers />
        </div>
      </section>

      <!-- Events Section -->
      <section class="relative md:mt-12">
        <div class="container relative z-20 px-0 overflow-hidden">
          <div class="mb-5">
            <Events></Events>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
