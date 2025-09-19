<template>
  <main>
    <!-- <img src="@/assets/img/test/3.jpg" alt=""> -->
    <section id="our-office" class="relative z-30 overflow-hidden">
      <HeroOld />
    </section>
    <section id="our-leaders" class="relative">
      <div
        class="w-[70%] h-[500px] bg-no-repeat z-20 bg-[length:100%_100%] absolute top-0 left-0"
        alt=""
      ></div>
      <div class="container md:py-12">
        <LeaderSpeechCard />
      </div>
    </section>
    <!-- <section>
      <div class="py-20 bg-white">
        <PrincipleSpeech />
      </div>
    </section> -->
    <!-- <section>
      <div class="py-20 bg-white">
        <PresidentSpeech />
      </div>
    </section> -->
    <!-- <section>
      <div class="py-20 bg-white">
        <VicePresidentSpeech />
      </div>
    </section> -->
    <section id="strategy">
      <div class="container md:px-6 md:py-12">
        <Visions />
      </div>
    </section>
    <section id="why-msi" class="relative">
      <img
        src="../assets/img/AboutUs/MSI-Why-MSI.png"
        alt=""
        class="w-[1000px] absolute right-0 bottom-10 z-30"
      />
      <div
        class="w-[100%] h-[1800px] bg-no-repeat bg-[length:100%_100%] absolute bottom-10 right-0"
        alt=""
      ></div>
      <div class="container relative z-30" id="our-partner">
        <OurPartner />
      </div>
    </section>
    <section class="container" id="achievements">
      <div>
        <AwardTimeline />
      </div>
    </section>
    <!-- <section id="our-team">
      <div class="py-16 bg-white">
        <OurTeam />
      </div>
    </section> -->
    <!-- <section id="testimonial">
      <div class="py-16 bg-white">
        <Testimonial />
      </div>
    </section>
    <section id="why-msi">
      <div>
        <WhyMsi />
      </div>
    </section>
    <section id="roadmap">
      <div class="py-16">
        <Timelines />
      </div>
    </section> -->
    <!-- <section>
      <div>
        <Awards />
      </div>
    </section> -->
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
