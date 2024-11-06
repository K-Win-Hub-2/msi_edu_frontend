<script setup>
// import bannerImage from "../../assets/img/countries/banner/singapore.jpg";
import Banner from "../../components/StudyPathway/General/Banner.vue";
import Faq from "../../components/Services/Faq.vue";
import Universities from "../../components/StudyPathway/General/Universities.vue";
import TestSection from "../../components/StudyPathway/General/TestSection.vue";
import Programs from "../../components/StudyPathway/General/Programs.vue";
import Button from "../../components/partials/Button.vue";
import UniversityCarousel from "../../components/StudyPathway/StudyPathway/UniversityCarousel.vue";
import getData from "../../axios/getData";
import { onMounted, ref } from "vue";
import axios from "axios";
import { onBeforeRouteUpdate } from "vue-router";

const videoOne = `<iframe width="500" height="250" src="https://www.youtube.com/embed/xtUR0szH0Zw" title="Myanmar Search International (MSI)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

const videoTwo = `<iframe width="500" height="250" src="https://www.youtube.com/embed/P3XLi-j5zac" title="Myanmar Search International (MSI) Head Office" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
const props = defineProps(["id"]);
const url = ref("country-lists");
const currentCountry = ref();
const bannerImage = ref();
const countryData = ref([])

const fetchData = async () => {
  
  const res = await axios("country-lists");
  countryData.value=res.data.countries.filter(el=>el.id == props.id)[0].youtube_video

  if (res.data.countries) {
    res.data.countries.map((c) => {
      if (c.id == props.id) {
        currentCountry.value = c;
        bannerImage.value =
          "http://adminpanel.msieducation.edu.mm/postImage/" + c.banner_image;
      }
    });
  }
};
  // if(props.id === window.location.pathname.split('/')[3]){
  //   window.location.reload()
  // }
console.log(countryData,'countryData')
onMounted(() => {

  fetchData();
});

const videoLink = (val) => {
  return "https://www.youtube.com/embed/"+val?.split("/")[3]
}
</script>
<template>
  <section>
    <div class="relative lg:mt-36 ssm:mt-4" v-if="bannerImage">
      <img :src="bannerImage" class="object-cover w-full lg:h-[800px]" alt="" />
    </div>
  </section>
  <section class="container lg:py-24 ssm:py-5 md:py-14" v-if="currentCountry">
    <div class="font-[400] md:text-md ssm:text-[15px] ssm:mx-2">
      <p>{{ currentCountry.introduction }}</p>
      <div class="text-center md:mt-20 ssm:mt-5">
        <router-link :to="{ name: 'inquiry' }">
          <Button
            class="lg:px-[45px] md:px-[30px] ssm:px-[20px] ssm:py-[10px] md:py-[24px] lg:py-[10px]"
            type="gradient"
            data-te-toggle="modal"
            data-te-target="#appointmentFormModal"
            data-te-ripple-init
            data-te-ripple-color="light"
            >INQUIRY NOW</Button
          >
        </router-link>
      </div>
    </div>
  </section>
  <UniversityCarousel :id="props.id" />

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
          <TestSection v-if="currentCountry" :country="currentCountry" />
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
      <Programs v-if="currentCountry" :country="currentCountry" />
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
        <Faq :id="props.id" />
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
          class=" rounded-lg h-[294px] overflow-hidden"  v-for="data in countryData"
        >
          <iframe
            class="w-full"
            height="206"
            :src="videoLink(data.url)"
            title="Myanmar Search International (MSI)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
     
        </div>
     
      </div>
    </div>
  </section>
</template>
