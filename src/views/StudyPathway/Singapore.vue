<script setup>
import bannerImage from "../../assets/img/countries/banner/singapore.jpg";
import Banner from "../../components/StudyPathway/General/Banner.vue";
import Faq from "../../components/Services/Faq.vue";
import Universities from "../../components/StudyPathway/General/Universities.vue";
import TestSection from "../../components/StudyPathway/General/TestSection.vue";
import Programs from "../../components/StudyPathway/General/Programs.vue";
import Button from "../../components/partials/Button.vue";
import UniversityCarousel from "../../components/StudyPathway/StudyPathway/UniversityCarousel.vue";

const videoOne = `<iframe width="500" height="250" src="https://www.youtube.com/embed/xtUR0szH0Zw" title="Myanmar Search International (MSI)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

const videoTwo = `<iframe width="500" height="250" src="https://www.youtube.com/embed/P3XLi-j5zac" title="Myanmar Search International (MSI) Head Office" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
</script>
<template>
  <section>
    <Banner :bannerImage="bannerImage"></Banner>
  </section>
  <section class="container lg:py-24 ssm:py-5 md:py-14">
    <div class="font-[400] md:text-md ssm:text-[15px] ssm:mx-2">
      <p>
        Malaysia is a Southeast Asian country known for its diverse culture,
        vibrant cities, and stunning landscapes. It's divided into Peninsular
        Malaysia and East Malaysia on Borneo. Kuala Lumpur is the capital, and
        major cities include George Town and Johor Bahru. The population is
        culturally diverse, with Malays, Chinese, Indians, and indigenous
        groups. Islam is the official religion. Malaysia has a robust economy
        with key sectors like manufacturing and services. English is widely
        spoken, and the country is a popular tourist destination, offering
        beautiful beaches, rainforests, and cultural attractions. It gained
        independence from British rule in 1957 and operates as a constitutional
        monarchy with a parliamentary democracy.
      </p>
      <div class="text-center md:mt-20 ssm:mt-5">
        <Button
          class="lg:px-[45px] md:px-[30px] ssm:px-[20px] ssm:py-[10px] md:py-[24px] lg:py-[10px]"
          type="gradient"
          data-te-toggle="modal"
          data-te-target="#appointmentFormModal"
          data-te-ripple-init
          data-te-ripple-color="light"
          >INQUIRY NOW</Button
        >
      </div>
    </div>
  </section>
  <!-- university carousel start -->
  <!-- <router-link :to="{ name: 'universities.detail' }"> -->
  <UniversityCarousel />
  <!-- </router-link> -->
  <!-- university carousel end -->
  <!-- <section>
    <div class="container px-6 pt-6 pb-24">
      <h1
        class="cus-heading text-cus-primary uppercase text-center mb-12 shadow-title"
      >
        University
      </h1>
      <Universities></Universities>
    </div>
  </section> -->
  <section>
    <div class="relative">
      <div
        class="bg-[url(@/assets/img/scholarship/image.png)] w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute rotate-180 top-0"
      ></div>

      <div class="absolute top-0 right-0">
        <img
          src="@/assets/img/universities/curvedwire.png"
          class="relative z-40 lg:w-[300px] md:w-[200px] ssm:w-[100px]"
          alt=""
        />
      </div>
      <div class="container md:pt-32 ssm:pt-10 relative z-40">
        <div class="flex justify-center">
          <TestSection />
        </div>
      </div>
    </div>
  </section>
  <!-- program start -->
  <section>
    <div class="px-6 pb-24 relative overflow-hidden md:mt-10">
      <div
        class="bg-[url(@/assets/img/scholarship/ellipse9.png)] z-30 w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute rotate-180 lg:bottom-[-150px] right-[450px] lg:left-[-1180px] md:bottom-[-80px] bottom-[-50px] md:left-[-600px]"
      ></div>
      <div
        class="bg-[url(@/assets/img/scholarship/ellipse9.png)] w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute lg:top-[-7px] md:top-[-12px] md:right-[-600px] right-[-400px] top-[-8px] lg:right-[-1200px]"
      ></div>
      <Programs />
      <img
        src="../../assets/img/universities/curvedwire2.png"
        class="absolute md:top-0 ssm:top-24 lg:w-[200px] md:w-[150px] ssm:w-[80px] md:h-[150px] lg:h-[200px] left-0"
        alt=""
      />
    </div>
  </section>
  <!-- program end -->
  <section class="relative">
    <div
      class="bg-[url(@/assets/img/scholarship/image.png)] w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute top-0"
    ></div>
    <div class="">
      <div class="container relative z-40 px-6 pt-6 pb-24">
        <Faq />
        <!-- <h1 class="cus-heading text-cus-primary text-center capitalize mb-12">
        Frequently Asked Questions
      </h1>
      <Faq country="singapore" /> -->
      </div>
    </div>
  </section>
  <section>
    <div class="container px-6 pt-6 pb-24">
      <h1 class="cus-heading text-cus-primary text-center capitalize mb-12">
        Testimonials
      </h1>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 ssm:grid-col-1 gap-x-10">
        <div
          class="border border-[#C4A9A9] rounded-lg h-[294px] overflow-hidden bg-[#F1F1F1]"
        >
          <iframe
            class="w-full"
            height="156"
            src="https://www.youtube.com/embed/xtUR0szH0Zw"
            title="Myanmar Search International (MSI)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div class="p-3">
            <p>MSI Education Service’s students</p>
            <p>This is intro</p>
          </div>
        </div>
        <div
          class="border rounded-lg h-[294px] overflow-hidden border-[#C4A9A9] bg-[#F1F1F1]"
        >
          <iframe
            class="w-full"
            height="156"
            src="https://www.youtube.com/embed/xtUR0szH0Zw"
            title="Myanmar Search International (MSI)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div class="p-3">
            <p>MSI Education Service’s students</p>
            <p>This is intro</p>
          </div>
        </div>
        <div
          class="border rounded-lg h-[294px] overflow-hidden border-[#C4A9A9] bg-[#F1F1F1]"
        >
          <iframe
            class="w-full"
            height="156"
            src="https://www.youtube.com/embed/xtUR0szH0Zw"
            title="Myanmar Search International (MSI)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div class="p-3">
            <p>MSI Education Service’s students</p>
            <p>This is intro</p>
          </div>
        </div>
        <!-- <div v-html="videoOne"></div>
        <div v-html="videoTwo"></div> -->
      </div>
    </div>
  </section>
</template>
