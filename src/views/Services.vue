<template>
  <section>
    <Hero />
  </section>

  <section id="our-services " class="relative overflow-hidden">
    <!-- <div
      class="bg-[url(@/assets/img/scholarship/ellipse9.png)] z-30 w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute rotate-180 lg:bottom-[-150px] right-[450px] lg:left-[-1250px] md:bottom-[-80px] bottom-[-50px] md:left-[-600px]"
    ></div>
    <div
      class="bg-[url(@/assets/img/scholarship/ellipse9.png)] w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute lg:top-[-20px] md:top-[-25px] md:right-[-650px] right-[-400px] lg:right-[-1300px]"
    ></div> -->

    <div class="container px-6 md:py-20 ssm:py-8" id="our-services">
      <OurService />
      <!-- <ServiceList /> -->
    </div>
  </section>

  <section id="faqs" class="mt-10">
    <div class="container px-6 md:py-20 ssm:py-9">
      <Faq />
    </div>
  </section>
</template>

<script setup>
import OurService from "../components/StudyPathway/StudyPathway/OurService.vue";
import Faq from "../components/Services/Faq.vue";
import Hero from "../components/Services/Hero.vue";
import ServiceList from "../components/Services/ServiceList.vue";
</script>

<style lang="scss" scoped></style>
