<template>
  <div>
    <div
      class="relative bg-[length:100%_120%] bg-no-repeat z-10 h-[700px]"
      :style="{ 'background-image': 'url(' + currentCard.image + ')' }"
    >
      <div class="container flex h-full">
        <div
          class="w-[500px] flex flex-col rounded-tr-[100px] justify-between bg-cus-primary-pale bg-opacity-80 text-white p-6"
        >
          <div>
            <h1 class="cus-paragraph-title !text-white mb-3">
              {{ currentCard.title }}
            </h1>
            <h2 class="cus-paragraph-subTitle mb-3 !text-white">
              <template v-for="eachLine in currentCard.subTitle">
                {{ eachLine }} <br />
              </template>
            </h2>
            <p class="cus-paragraph text-justify mb-3">
              <template v-for="eachPara in currentCard.para">
                {{ eachPara }}
                <template v-if="currentCard.para.length > 1">
                  <br />
                  <br />
                </template>
              </template>
            </p>
          </div>
          <div class="flex gap-3">
            <template v-for="(card, index) in cards">
              <div @click="updateCurrentCard(index)">
                <img
                  :src="card.image"
                  class="w-16 h-16 rounded overflow-hidden object-cover cursor-pointer"
                  alt="Avatar"
                />
              </div>
            </template>
          </div>
        </div>
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
