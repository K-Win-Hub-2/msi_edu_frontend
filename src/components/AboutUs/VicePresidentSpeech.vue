<template>
  <div class="hidden xl:block container relative gap-20">
    <div class="flex">
      <img src="@/assets/img/AboutUs/principle.png" class="w-[790px] h-[480px]" alt="">
    </div>
    <div
      class="absolute transition-all duration-500 top-1/2 shadow -translate-y-1/2 text-right backdrop-blur bg-gray-50 bg-opacity-80 rounded p-8"
      :class="{ 'w-[400px] left-[60%]': !expand, 'w-[650px] left-[50%]': expand }">
      <div class="z-20 space-y-3">
        <h1 class="cus-paragraph-title">Vice President speech</h1>
        <h2 class="cus-paragraph-subTitle">
          Mr. Thet Win Naing <br>
          (Vice President)
        </h2>
        <ul class="text-left cus-paragraph">
          <li class="mb-1">
            • To achieve human and business empowerment, it is crucial to invest in human resources.
          </li>
          <li class="mb-1">
            • Our aim is to foster international investment and facilitate transformation.
          </li>
          <li class="mb-1">
            • We strive to advance educational pathways while adapting to the ever-changing global landscape.
          </li>
          <li class="mb-1">
            • Our commitment is to collaborate and contribute to the growth and enlightenment of Myanmar's exceptional
            students, guided by the principles of Dedication, Passion, and Sacrifice.
          </li>
        </ul>
        <div class="text-left">
          <Button @click="toggleExpand">
            <span v-if="!expand">Read More ...</span>
            <span v-if="expand">Less ...</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
  <div class="block xl:hidden container px-6">
    <img src="@/assets/img/AboutUs/principle.png" class="mb-3" alt="">
    <div class="z-20 space-y-3">
      <h1 class="cus-paragraph-title">principle speech</h1>
      <h2 class="cus-paragraph-subTitle">
        Su Su Hlaing<br />
        Managing Director
      </h2>
      <p class="cus-paragraph text-justify">
        I have cherished education throughout my life. Studying abroad should not merely be about obtaining a degree or
        seeking recognition from society. It also entails making sacrifices such as being away from loved ones, leaving
        the comfort of home, and taking financial risks. Therefore, it should be seen as a significant achievement. I
        sincerely hope that students in Myanmar can give their best efforts in their educational journeys, not only to
        acquire a foreign degree but also to apply the insights and opportunities gained internationally.
        Our primary objective is to provide international pathways to all prospective students in Myanmar, and we are
        fully dedicated to this mission. We have expanded the MSI Academy education center to offer services for study
        grant applications, catering to those who have achieved specific marks in their exams. Additionally, we provide
        scholarship application assistance for students who have excelled in their studies. We also offer courses in GED
        (American high school education), academic English for university entrance requirements, IT and Engineering
        courses, and study abroad preparation.
      </p>
      <div class="text-left">
        <Button @click="toggleExpand">
          <span>Read More ...</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/partials/Button.vue'
import { ref } from 'vue';

const expand = ref(false)

const toggleExpand = () => {
  expand.value = !expand.value
}
</script>

<style lang="scss" scoped></style>