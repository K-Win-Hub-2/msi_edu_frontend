<template>
  <section>
    <Banner :bannerImage="bannerImage"></Banner>
  </section>
  <section class="container py-24">
    <div class="text-center space-y-6">
      <p>
        A study abroad experience in Singapore will make you stand out from the
        crowd. Once you’ve arrived in Southeast Asia, you’ll realize you have
        much in common with others who journey to this exotic destination: a
        sense of adventure and open-minded nature, a healthy dose of
        adaptability, and most importantly, the curiosity to learn about another
        culture and way of life.
      </p>
      <Button
        data-te-toggle="modal"
        data-te-target="#consultationFormModal"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <template #buttonText> Inquiry Now </template>
      </Button>
    </div>
  </section>
  <section class="bg-white">
    <div class="container px-6 pt-6 pb-24">
      <h1 class="cus-heading text-cus-primary text-center capitalize mb-12">
        Universities
      </h1>
      <Universities country="italy"></Universities>
    </div>
  </section>
  <section class="bg-white">
    <div class="container px-6 pt-6 pb-24">
      <h1 class="cus-heading text-cus-primary text-center capitalize mb-12">
        Test section
      </h1>
      <TestSection country="italy" />
    </div>
  </section>
  <section>
    <div class="container px-6 pt-6 pb-24">
      <h1 class="cus-heading text-cus-primary text-center capitalize mb-12">
        Frequently Asked Questions
      </h1>
      <Faq />
    </div>
  </section>
  <section>
    <div class="container px-6 pt-6 pb-24">
      <Programs country="singapore" />
    </div>
  </section>
  <section class="bg-white">
    <div class="container px-6 pt-6 pb-24">
      <h1 class="cus-heading text-cus-primary text-center capitalize mb-12">
        Testimonials
      </h1>
      <div class="grid grid-cols-2">
        <div v-html="videoOne"></div>
        <div v-html="videoTwo"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bannerImage from "../../assets/img/countries/banner/italy.jpg";
import Banner from "../../components/StudyPathway/General/Banner.vue";
import Faq from "../../components/StudyPathway/General/Faq.vue";
import Universities from "../../components/StudyPathway/General/Universities.vue";
import TestSection from "../../components/StudyPathway/General/TestSection.vue";
import Programs from "../../components/StudyPathway/General/Programs.vue";
import Button from "../../components/partials/Button.vue";

const videoOne = `<iframe width="500" height="250" src="https://www.youtube.com/embed/xtUR0szH0Zw" title="Myanmar Search International (MSI)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

const videoTwo = `<iframe width="500" height="250" src="https://www.youtube.com/embed/P3XLi-j5zac" title="Myanmar Search International (MSI) Head Office" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
</script>

<style lang="scss" scoped></style>
