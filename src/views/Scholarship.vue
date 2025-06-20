<template>
  <div class="w-full">
    <div class="h-auto">
      <div class="relative overflow-hidden">
        <video autoplay loop muted plays-inline class="bottom-0 right-0 w-full">
          <source src="@/assets/videos/banner.mp4" type="video/mp4" />
        </video>

        <div class="absolute bottom-2 left-11">
          <Button
            @click="toGetAppointment"
            type="gradient"
            class="md:p-5 ssm:px-3 md:px-16 text-md"
            >Get Free Counselling</Button
          >
        </div>
      </div>
    </div>
   
    <SectionOne />
    <!-- carousel start -->
    <!-- <CarouselSch /> -->
    <!-- carousel end -->

    <!-- achiever -->
    <SectionTwo />
     
    <SectionThree
      v-for="section in types"
      :key="section.id"
      :type="section.id"
      :scholar="section.scholar_name"
    />
    
  </div>
</template>

<script setup>
import CarouselSch from "../components/Scholarship/CarouselSch.vue";
import SectionOne from "../components/Scholarship/SectionOne.vue";
import SectionTwo from "../components/Scholarship/SectionTwo.vue";
import SectionThree from "../components/Scholarship/SectionThree.vue";
import SectionFour from "../components/Scholarship/SectionFour.vue";
import SectionFive from "../components/Scholarship/SectionFive.vue";
import SectionSix from "../components/Scholarship/SectionSix.vue";
import SectionSeven from "../components/Scholarship/SectionSeven.vue";
import SectionEight from "../components/Scholarship/SectionEight.vue";
import SectionNine from "../components/Scholarship/SectionNine.vue";
import Button from "../components/partials/Button.vue";
import { onMounted, ref } from "vue";
import MBAScholarShip from "../components/Scholarship/MBAScholarShip.vue";
import { useRouter } from "vue-router";
const router = useRouter();
import axios from "axios";

const toGetAppointment = () => {
  router.push({ name: "appointment-form" });
};

const types = ref();
const achievers = ref();

const fetchTypes = async () => {
    // http://adminpanel.msieducation.edu.mm/api/scholarship-achievers/scholar-type/11
    const res = await axios.get(`/scholarship-types`);
   types.value = res.data.types;
    console.log("types ", res.data.types);
    // scholarships.value = res.data.scholarAchiever.filter((p) => {
    //   return p.scholarship_type == 12;
    // });
};


onMounted(() => {
  fetchTypes();
});

  
</script>

<style>
.card {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.btn-apply {
  background: var(
    --BUTTON-COLOR,
    linear-gradient(101deg, #fcf85f 4.12%, rgba(255, 28, 67, 0.33) 119.56%)
  );
}
.card-achiever {
  border-radius: 27.468px;
  background: #fff;
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.12);
}
.card-pp {
  box-shadow: 0px 2px 14px 0px #00000040;
}
</style>
