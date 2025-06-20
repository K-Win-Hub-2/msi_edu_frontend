<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import ScholarshipAchieverCard from "./ScholarshipAchieverCard.vue";

// States
const scholarshipAchievers = ref([]);
const currentScholarshipAchieverIndex = ref(0);
const currentScholarshipAchiever = ref(null);

// Fetch achievers from API
const fetchAchievers = async () => {
  try {
    const res = await axios.get("scholarship-achievers/scholar-type/11");
    scholarshipAchievers.value = res.data.scholarAchiever;

    if (scholarshipAchievers.value.length > 0) {
      currentScholarshipAchieverIndex.value = 0;
      currentScholarshipAchiever.value = scholarshipAchievers.value[0];
    }
  } catch (error) {
    console.error("Failed to fetch scholarship achievers:", error);
  }
};

// Navigation
const updateCurrentScholarshipAchiever = () => {
  currentScholarshipAchiever.value =
    scholarshipAchievers.value[currentScholarshipAchieverIndex.value];
};

const nextScholarshipAchiever = () => {
  if (scholarshipAchievers.value.length === 0) return;

  currentScholarshipAchieverIndex.value =
    (currentScholarshipAchieverIndex.value + 1) %
    scholarshipAchievers.value.length;

  updateCurrentScholarshipAchiever();
};

const previousScholarshipAchiever = () => {
  if (scholarshipAchievers.value.length === 0) return;

  currentScholarshipAchieverIndex.value =
    (currentScholarshipAchieverIndex.value - 1 + scholarshipAchievers.value.length) %
    scholarshipAchievers.value.length;

  updateCurrentScholarshipAchiever();
};

// Initial fetch
onMounted(() => {
  fetchAchievers();
});
</script>

<template>
  <div class="relative overflow-hidden">
    <h1
      class="text-center capitalize md:cus-heading ssm:text-md ssm:font-semibold text-cus-secondary md:mt-12 text-shadow-sm cus-shadow-color"
    >
      Scholarship Achievers
    </h1>

    <!-- Left arrow fixed on the left side -->
    <div
      @click="previousScholarshipAchiever"
      class="absolute z-20 transform -translate-y-1/2 top-1/2 left-2 hover:cursor-pointer"
    >
      <ChevronLeftIcon class="w-12 h-12 text-cus-primary" />
    </div>

    <div
      v-if="currentScholarshipAchiever"
      class="flex items-center ssm:bg-[#EDF7FF] md:bg-white justify-center md:gap-3 mt-11"
    >
      <ScholarshipAchieverCard :data="currentScholarshipAchiever" />
    </div>

    <!-- Right arrow fixed on the right side -->
    <div
      @click="nextScholarshipAchiever"
      class="absolute z-20 transform -translate-y-1/2 top-1/2 right-2 hover:cursor-pointer"
    >
      <ChevronRightIcon class="w-12 h-12 text-cus-primary" />
    </div>
  </div>
</template>

<style scoped></style>
