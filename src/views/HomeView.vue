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
  <main class="mb-12 overflow-hidden">
    <section>
      <Hero></Hero>
    </section>
    <section class="relative">
      <div
        class="w-[100%] h-[500px] bg-no-repeat bg-[length:100%_100%] absolute top-0 left-1/2 -translate-x-1/2"
        alt=""
      ></div>
      <div class="container relative z-40 py-10">
        <Pathway />
      </div>
    </section>
    <section>
      <div class="container relative z-30">
        <Testimonials />
      </div>
    </section>
    <section>
      <div class="container relative z-30 py-12">
        <Facts />
      </div>
    </section>
    <section class="relative">
      <div
        class="w-[100%] h-[1800px] bg-no-repeat bg-[length:100%_100%] absolute bottom-[-800px] right-0"
        alt=""
      ></div>

      <div
        class="container relative z-30 px-6 md:pt-12 ssm:pt-6 md:pb-24 ssm:pb-8"
      >
        <Awards></Awards>
      </div>
    </section>
    <section class="flex justify-center w-full p-0 m-0">
      <div class="relative z-30 w-full max-w-full">
        <ScholarshipAchievers />
      </div>
    </section>

    <section class="relative md:mt-12 md:mb-24 lg:mb-36">
      <div
        class="bg-[url(../../assets/img/Home/eventUnviersityBg.png)] w-[80%] h-[650px] bg-no-repeat bg-[length:100%_100%] absolute bottom-[280px] right-0"
        alt=""
      ></div>
      <div class="container relative z-20 px-0 overflow-hidden">
        <div class="">
          <Events></Events>
        </div>
      </div>
    </section>
    <!-- <section>
      <div class="container px-6 py-24">
        <FindUniversity></FindUniversity>
      </div>
    </section> -->
    <!-- <section>
      <div class="container px-6 pb-24">
        <ChooseMsi></ChooseMsi>
      </div>
    </section> -->

    <!-- <section>
      <div class="container px-6 pt-6 pb-24">
        <Testimonials2 />
      </div>
    </section>
    <section class="mt-12 mb-24 lg:mb-36">
      <div class="container px-6">
        <div class="">
          <Events></Events>
        </div>
      </div>
    </section> -->
  </main>
</template>
