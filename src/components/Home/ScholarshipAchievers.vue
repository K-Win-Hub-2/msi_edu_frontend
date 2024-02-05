<script setup>
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";

import KhinThuzarThant from "@/assets/img/students/KhinThuzarThant.jpg";
import KyiPhyuMaung from "@/assets/img/students/KyiPhyuMaung.jpg";
import LinWaiPhyo from "@/assets/img/students/LinWaiPhyo.jpg";
import MinKhantTin from "@/assets/img/students/MinKhantTin.jpg";
// import AgKhitPaing from '@/assets/img/students/AgKhitPaing.png';
// import MyoMyintZaw from '@/assets/img/students/MyoMyintZaw.png';
// import MyoMyintZaw from '@/assets/img/students/MyoMyintZaw.png';

import { ref } from "vue";
import ScholarshipAchieverCard from "./ScholarshipAchieverCard.vue";
// swiper end

const nextScholarshipAchiever = () => {
  let currentIndex = currentScholarshipAchieverIndex.value;
  if (currentIndex + 1 >= scholarshipAchievers.value.length) {
    currentScholarshipAchieverIndex.value = 0;
  } else {
    currentScholarshipAchieverIndex.value += 1;
  }
  updateCurrentScholarshipAchiever();
};

const previousScholarshipAchiever = () => {
  let currentIndex = currentScholarshipAchieverIndex.value;
  if (currentIndex - 1 < 0) {
    currentScholarshipAchieverIndex.value =
      scholarshipAchievers.value.length - 1;
  } else {
    currentScholarshipAchieverIndex.value -= 1;
  }
  updateCurrentScholarshipAchiever();
};

const updateCurrentScholarshipAchiever = () => {
  currentScholarshipAchiever.value =
    scholarshipAchievers.value[currentScholarshipAchieverIndex.value];
};

const scholarshipAchievers = ref([
  {
    image: KhinThuzarThant,
    content:
      "Hello to anyone out there looking forward to studying abroad especially US, I highly recommend MSI as your first choice because speaking from someone with actual experience like myself ever since I began my study abroad journey with MSI despite through all the difficult circumstances. To the point of safely landing at your destination as they dealt with everything necessary beginning from getting admission of your choice of school to all the complication steps of VISA process that can make you very stressful but MSI will never leave you alone.....",
    title: "100% scholarship achiever",
    rating: 5,
    student: {
      name: "Khin Thuzar Thant",
      university: "Webster University (U.S.A., Thailand Campus)",
      degree: "BS In Management",
      country: "U.S.A",
    },
  },
  {
    image: KyiPhyuMaung,
    content:
      "I dare to say MSI is one of the best agencies for student in Myanmar. I haven't really got any regrets working with them. They have been providing great services since we started. However, I would say there is always a room for improvement even you are already good enough. Keep moving! Keep growing!",
    title: "100% scholarship achiever",
    rating: 5,
    student: {
      name: "Kyi Phyu Maung",
      university: "Webster University (U.S.A., Thailand Campus)",
      degree: "BA Psychology",
      country: "U.S.A",
    },
  },
  {
    image: LinWaiPhyo,
    content:
      "Finding a university that suited my academic results and financial position was a difficult task during my hunt. MSI supported me by presenting university options to me. They guided me through every stage of the process, from obtaining a student visa and completing university applications to locating accommodation. They assisted me with my application to Monash University Malaysia, where I am currently enrolled in my final semester. Overall, MSI is the most helpful and compassionate agent available.",
    title: "100% scholarship achiever",
    rating: 2,
    student: {
      name: "Lin Wai Phyo",
      university: "Webster University (U.S.A., Thailand Campus)",
      degree: "BA In Management (Human Resource)",
      country: "U.S.A",
    },
  },
  {
    image: MinKhantTin,
    content:
      "Finding a university that suited my academic results and financial position was a difficult task during my hunt. MSI supported me by presenting university options to me. They guided me through every stage of the process, from obtaining a student visa and completing university applications to locating accommodation. They assisted me with my application to Monash University Malaysia, where I am currently enrolled in my final semester. Overall, MSI is the most helpful and compassionate agent available.",
    title: "100% scholarship achiever",
    rating: 2,
    student: {
      name: "Min Khant Tin",
      university: "Webster University (U.S.A., Thailand Campus)",
      degree: "BS In Computer Science",
      country: "U.S.A",
    },
  },
]);

const currentScholarshipAchieverIndex = ref(0);
const currentScholarshipAchiever = ref({
  ...scholarshipAchievers.value[0],
});
</script>

<template>
  <div class="overflow-hidden">
    <h1
      class="md:cus-heading ssm:text-md ssm:font-semibold text-cus-secondary text-center capitalize md:mt-12 text-shadow-sm cus-shadow-color"
    >
      Scholarship Achievers
    </h1>
    <div
      class="flex items-center ssm:bg-[#EDF7FF] md:bg-white justify-center md:gap-3 group mt-11"
    >
      <div
        @click="previousScholarshipAchiever"
        class="swiper-home-testimonial-prev-unique hover:cursor-pointer opacity-0 group-hover:opacity-100"
      >
        <ChevronLeftIcon class="w-12 h-12 text-cus-primary" />
      </div>
      <ScholarshipAchieverCard :data="currentScholarshipAchiever" />

      <div
        @click="nextScholarshipAchiever"
        class="swiper-home-testimonial-next-unique hover:cursor-pointer opacity-0 group-hover:opacity-100"
      >
        <ChevronRightIcon class="w-12 h-12 text-cus-primary" />
      </div>
    </div>
    <!-- <img src="@/assets/img/waves/topLeft.png" class="w-[300px] h-[200px] absolute left-0 top-0 select-none" alt="">
    <img src="@/assets/img/waves/topRight.png" class="w-[300px] h-[200px] absolute right-0 top-0 select-none" alt="">
    <img src="@/assets/img/waves/bottomLeft.png" class="w-[300px] h-[200px] absolute left-0 bottom-0 select-none" alt="">
    <img src="@/assets/img/waves/bottomRight.png" class="w-[300px] h-[200px] absolute right-0 bottom-0 select-none" alt=""> -->
  </div>
</template>

<style scoped></style>
