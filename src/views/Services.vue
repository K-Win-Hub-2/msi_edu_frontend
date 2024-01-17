<template>
  <section>
    <Hero />
  </section>

  <section id="our-services">
    <div class="container px-6 py-24">
      <ServiceList />
    </div>
  </section>

  <section id="faq" class="bg-white">
    <div class="container px-6 py-24">
      <Faq />
    </div>
  </section>
</template>

<script setup>
import Faq from "../components/Services/Faq.vue";
import Hero from "../components/Services/Hero.vue";
import ServiceList from "../components/Services/ServiceList.vue";
</script>

<style lang="scss" scoped></style>
