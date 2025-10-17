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
    (currentScholarshipAchieverIndex.value -
      1 +
      scholarshipAchievers.value.length) %
    scholarshipAchievers.value.length;

  updateCurrentScholarshipAchiever();
};

// Initial fetch
onMounted(() => {
  fetchAchievers();
});
</script>

<template>
  <div class="relative overflow">
    <div class="relative w-full max-w-4xl mx-auto">
      <div class="relative p-6 overflow-hidden bg-white/60 rounded-3xl md:p-6">
        <button
          @click="previousScholarshipAchiever"
          aria-label="Previous scholarship achiever"
          class="absolute z-30 flex items-center justify-center w-12 h-12 transition transform -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-sm top-1/2 left-8 hover:shadow-md hover:scale-105"
        >
          <ChevronLeftIcon class="w-6 h-6 text-cus-primary" />
        </button>

        <div
          v-if="currentScholarshipAchiever"
          class="flex flex-col items-center justify-center py-2 md:gap-3"
        >
          <h1
            class="mb-6 text-center capitalize md:cus-heading ssm:text-md ssm:font-semibold text-cus-secondary md:mt-2 text-shadow-sm"
          >
            Scholarship Achievers
          </h1>

          <ScholarshipAchieverCard
            :data="currentScholarshipAchiever"
            class="pb-6"
          />
        </div>


        <button
          @click="nextScholarshipAchiever"
          aria-label="Next scholarship achiever"
          class="absolute z-30 flex items-center justify-center w-12 h-12 transition transform -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-sm top-1/2 right-8 hover:shadow-md hover:scale-105"
        >
          <ChevronRightIcon class="w-6 h-6 text-cus-primary" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
