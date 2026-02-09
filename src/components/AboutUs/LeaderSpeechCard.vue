<template>
  <div class="relative z-30">
    <div class="text-3xl text-center mb-11">
      <h1
        class="font-bold uppercase text-cus-secondary md:cus-heading text-shadow-sm cus-shadow-color"
      >
        Leaders' Speeches
      </h1>
    </div>

    <div
      class="flex gap-8 md:flex-row ssm:flex-col md:items-start ssm:items-center justify-center"
    >
      <div class="flex flex-col items-center">
        <div
          class="relative flex items-center justify-center px-2 py-2 shadow-xl rounded-xl bg-black/40 backdrop-blur-sm"
        >
          <button
            class="absolute left-0 flex items-center justify-center text-xl transition-colors -translate-x-1/2 rounded-full shadow-lg cursor-pointer w-11 h-11 bg-white/90 hover:bg-cus-primary hover:text-white z-10"
            @click="prevCard"
            aria-label="Previous speech"
          >
            ‹
          </button>

          <div class="bg-gray-200/10 rounded-lg overflow-hidden aspect-square w-[300px] md:w-[400px]">
            <img
              :src="currentCard.image"
              alt="Leader Image"
              class="w-full h-full object-cover"
            />
          </div>

          <button
            class="absolute right-0 flex items-center justify-center text-xl transition-colors translate-x-1/2 rounded-full shadow-lg cursor-pointer w-11 h-11 bg-white/90 hover:bg-cus-primary hover:text-white z-10"
            @click="nextCard"
            aria-label="Next speech"
          >
            ›
          </button>
        </div>

        <div class="flex justify-center gap-3 mt-4">
          <template v-for="(card, index) in cards" :key="index">
            <button
              type="button"
              @click="updateCurrentCard(index)"
              class="focus:outline-none"
            >
              <img
                :src="card.image"
                :class="[
                  'object-cover overflow-hidden rounded-lg shadow-md cursor-pointer w-14 h-14 md:w-16 md:h-16 border border-transparent transition-all',
                  index === currentIndex
                    ? 'ring-2 ring-cus-primary border-cus-primary scale-105'
                    : 'hover:ring-1 hover:ring-cus-primary/60',
                ]"
                alt="Thumbnail"
              />
            </button>
          </template>
        </div>
      </div>

      <div class="ssm:max-w-[320px] ssm:px-3 md:px-0 md:max-w-[520px]">
        <h1
          class="mb-3 text-white cus-paragraph-title text-shadow-sm cus-shadow-color uppercase font-bold"
        >
          {{ currentCard.title }}
        </h1>

        <h2 
          class="mb-3 font-bold text-cus-primary" 
          style="font-size: 1.2rem !important;"
        >
          <template v-for="(eachLine, idx) in currentCard.subTitle" :key="idx">
            {{ eachLine }} <br />
          </template>
        </h2>

        <p class="text-justify mb-3 font-semibold leading-relaxed">
          <template v-for="(eachPara, idx) in currentCard.para" :key="idx">
            {{ eachPara }}
            <template v-if="idx !== currentCard.para.length - 1">
              <br /><br />
            </template>
          </template>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import tas from "@/assets/img/leaders/tas2.png";
import twn from "@/assets/img/leaders/twn2.png";
import ssh from "@/assets/img/leaders/ssh2.png";

const currentIndex = ref(0);

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
    title: "VICE-PRESIDENT SPEECH",
    subTitle: ["Mr. Thet Win Naing (Vice-President)"],
    para: [
      "• To achieve human and business empowerment, it is crucial to invest in human resources.",
      "• Our aim is to foster international investment and facilitate transformation.",
      "• We strive to advance educational pathways while adapting to the ever-changing global landscape.",
      "• Our commitment is to collaborate and contribute to the growth and enlightenment of Myanmar's exceptional students, guided by the principles of Dedication, Passion, and Sacrifice.",
    ],
    image: twn,
  },
  {
    title: "PRINCIPLE SPEECH",
    subTitle: ["Su Su Hlaing", "Managing Director"],
    para: [
      "I have cherished education throughout my life. Studying abroad should not merely be about obtaining a degree or seeking recognition from society. It also entails making sacrifices such as being away from loved ones, leaving the comfort of home, and taking financial risks. Therefore, it should be seen as a significant achievement. I sincerely hope that students in Myanmar can give their best efforts in their educational journeys, not only to acquire a foreign degree but also to apply the insights and opportunities gained internationally.",
      "Our primary objective is to provide international pathways to all prospective students in Myanmar, and we are fully dedicated to this mission. We have expanded the MSI Academy education center to offer services for study grant applications, catering to those who have achieved specific marks in their exams. Additionally, we provide scholarship application assistance for students who have excelled in their studies. We also offer courses in GED (American high school education), academic English for university entrance requirements, IT and Engineering courses, and study abroad preparation.",
    ],
    image: ssh,
  },
]);

const currentCard = computed(() => cards.value[currentIndex.value]);

const updateCurrentCard = (cardIndex) => {
  currentIndex.value = cardIndex;
};

const prevCard = () => {
  currentIndex.value = (currentIndex.value - 1 + cards.value.length) % cards.value.length;
};

const nextCard = () => {
  currentIndex.value = (currentIndex.value + 1) % cards.value.length;
};
</script>



<style lang="scss" scoped>
</style>
