<template>
  <main>
    <section id="our-office" class="relative z-30 overflow-hidden">
      <HeroOld />
    </section>

    <!-- Curve background only -->
    <!-- Curve background only -->
    <div
      class="relative w-full bg-[url('@/assets/img/home/header.png')] bg-no-repeat bg-bottom bg-cover h-[200px] md:h-[450px]"
    ></div>

    <!-- Leader speeches start UNDER the curve -->
    <section id="our-leaders" class="relative pb-16 -mt-15 md:-mt-[18rem]">
      <div class="container md:py-8">
        <LeaderSpeechCard />
      </div>
    </section>

    <!-- rest -->
    <section id="strategy">
      <div class="container md:px-6 md:py-12">
        <Visions />
      </div>
    </section>

    <section id="why-msi" class="relative">
      <img
        src="../assets/img/AboutUs/MSI-Why-MSI.png"
        alt=""
        class="w-[1000px] absolute right-0 bottom-10 z-30 max-w-full"
      />
      <div
        class="w-full h-[1200px] bg-no-repeat bg-[length:100%_100%] absolute bottom-10 right-0"
      ></div>
      <div class="container relative z-30" id="our-partner">
        <OurPartner />
      </div>
    </section>

    <section class="container py-16" id="achievements">
      <AwardTimeline />
    </section>
  </main>
</template>


<script setup>
import About from "../components/AboutUs/About.vue";
import LeaderSpeechCard from "../components/AboutUs/LeaderSpeechCard.vue";
import Hero from "../components/AboutUs/Hero.vue";
// import Testimonial from "@/components/AboutUs/Testimonial.vue";
// import PrincipleSpeech from "../components/AboutUs/PrincipleSpeech.vue";
// import PresidentSpeech from "../components/AboutUs/PresidentSpeech.vue";
// import VicePresidentSpeech from "../components/AboutUs/VicePresidentSpeech.vue";
// import OurTeam from "../components/AboutUs/OurTeam.vue";
import OurPartner from "../components/AboutUs/OurPartner.vue";
// import Timelines from "../components/AboutUs/Timelines.vue";
// import WhyMsi from "@/components/AboutUs/WhyMsi.vue";
import Visions from "@/components/AboutUs/Visions.vue";
import AwardTimeline from "../components/AboutUs/AwardTimeline/AwardTimeline.vue";
import HeroOld from "../components/AboutUs/HeroOld.vue";
</script>

<style scoped></style>
