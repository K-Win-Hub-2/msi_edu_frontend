<template>
  <div class="relative z-30">
    <!-- <div class="flex justify-around items-center mb-11 mx-11">
      <div class="">
        <h1 class="text-cus-secondary font-bold text-[20px] uppercase text-shadow-sm cus-shadow-color">Our Services</h1>
        <p class="text-cus-secondary text-[20px]  font-bold text-xl uppercase text-shadow-sm cus-shadow-color">FOr your education</p>
      </div>
      <div class="">
        <a class="w-[300px] bg-gray-200 border cus-rounded  flex items-center justify-between whitespace-nowrap px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-cus-primary transition duration-75 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
          href="#" type="button" id="dropdownMenuButton2" data-te-dropdown-toggle-ref aria-expanded="false"
          data-te-ripple-init data-te-ripple-color="light">
          <p class="pr-11 text-black font-bold text-[15px]">Service</p>
          <span class="ml-2 w-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
              <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </a>
      </div>
      <div class="">
        <Button class="px-6" type="gradient">Search</Button>
      </div>
    </div> -->
    <div class="text-center text-3xl mb-11">
      <h1 class="text-cus-secondary cus-heading font-bold text-shadow-sm cus-shadow-color uppercase">Leader Speeches</h1>
    </div>
    <div class=" flex justify-between items-center gap-6">
      <div class="">
        <img :src="currentCard.image" alt="" class="h-[400px] w-[700px] rounded-lg mb-3 object-cover" />
        <div class="flex justify-center gap-3">
          <template v-for="(card, index) in cards">
            <div @click="updateCurrentCard(index)">
              <img :src="card.image" class="w-16 h-16 rounded overflow-hidden object-cover cursor-pointer shadow-2xl" alt="Avatar" />
            </div>
          </template>
        </div>
      </div>

      <div class="">
        <h1 class="cus-paragraph-title text-shadow-sm cus-shadow-color  mb-3">
          {{ currentCard.title }}
        </h1>
        <h2 class="cus-paragraph-subTitle mb-3 ">
          <template v-for="eachLine in currentCard.subTitle">
            {{ eachLine }} <br />
          </template>
        </h2>
        <p class="cus-paragraph text-justify mb-3 w-[500px] ">
          <template v-for="eachPara in currentCard.para">
            {{ eachPara }}
            <template v-if="currentCard.para.length > 1">
              <br />
              <br />
            </template>
          </template>
        <!-- <div class="text-right">
          <Button class="px-6 " type="gradient">Next</Button>
        </div> -->
        </p>
      </div>
    </div>
  </div>
</template>
  
<script setup>
// import phyuphyuThant from "@/assets/img/AboutUs/OurTeam/23.jpg";

import tas from "@/assets/img/leaders/tas.jpg";
import twn from "@/assets/img/leaders/twn.jpg";
import ssh from "@/assets/img/leaders/ssh.jpg";
import { ref } from "vue";

import Button from "../partials/Button.vue";

const updateCurrentCard = (cardIndex) => {
  console.log("updating card");
  currentCard.value = cards.value.filter(
    (card, index) => index === cardIndex
  )[0];
};

const cards = ref([
  {
    title: "PRESIDENT SPEECH",
    subTitle: [
      "Mr. Tin Aung Soe (President)",
      "B. A, B.Ed.",
      "(Former Principal at Institute of Foreign Language)",
    ],
    para: [
      "I firmly believe that parents face a challenging decision when contemplating sending their children abroad for education due to the financial considerations involved.",
      "Here at MSI, the acronym ‘ECG’ represents Education Counselling Guidance. Our primary goal is to cultivate a generation of talented individuals who genuinely appreciate the value of education. As part of the MSI education service family, we strive to provide support in shaping students’ goals and nurturing their interest.",
    ],
    image: tas,
  },
  {
    title: "VICE PRESIDENT SPEECH",
    subTitle: ["Mr. Thet Win Naing (Vice President)"],
    para: [
      "• To achieve human and business empowerment, it is crucial to invest in human resources.",
      "• Our aim is to foster international investment and facilitate transformation.",
      "• We strive to advance educational pathways while adapting to the ever-changing global landscape.",
      `• Our commitment is to collaborate and contribute to the growth and enlightenment of Myanmar's exceptional students, guided by the principles of Dedication, Passion, and Sacrifice.`,
    ],
    image: twn,
  },
  {
    title: "principle speech",
    subTitle: ["Su Su Hlaing", "Managing Director"],
    para: [
      "I have cherished education throughout my life. Studying abroad should not merely be about obtaining a degree or seeking recognition from society.It also entails making sacrifices such as being away from loved ones, leaving the comfort of home, and taking financial risks.Therefore, it should be seen as a significant achievement.I sincerely hope that students in Myanmar can give their best efforts in their educational journeys, not only to acquire a foreign degree but also to apply the insights and opportunities gained internationally.",

      "Our primary objective is to provide international pathways to all prospective students in Myanmar, and we are fully dedicated to this mission.We have expanded the MSI Academy education center to offer services for study grant applications, catering to those who have achieved specific marks in their exams.Additionally, we provide scholarship application assistance for students who have excelled in their studies.We also offer courses in GED(American high school education), academic English for university entrance requirements, IT and Engineering courses, and study abroad preparation.",
    ],
    image: ssh,
  },
]);

const currentCard = ref(
  {
    ...cards.value[0]
  }
);
</script>
  
<style lang="scss" scoped></style>
  