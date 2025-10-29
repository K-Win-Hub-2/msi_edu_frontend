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
  if (!scholarshipAchievers.value.length) return;

  currentScholarshipAchieverIndex.value =
    (currentScholarshipAchieverIndex.value + 1) %
    scholarshipAchievers.value.length;

  updateCurrentScholarshipAchiever();
};

const previousScholarshipAchiever = () => {
  if (!scholarshipAchievers.value.length) return;

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
  <div class="relative px-4 overflow-hidden sm:px-6">
    <div class="relative w-full max-w-3xl mx-auto">
      <div
        class="relative p-4 overflow-hidden sm:p-6 md:p-8 bg-white/60 rounded-2xl md:rounded-3xl"
      >
        <!-- Prev Button -->
        <button
          @click="previousScholarshipAchiever"
          aria-label="Previous scholarship achiever"
          class="absolute z-30 flex items-center justify-center w-10 h-10 transition transform -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-sm sm:w-12 sm:h-12 top-1/2 left-4 sm:left-6 hover:shadow-md hover:scale-105"
        >
          <ChevronLeftIcon class="w-5 h-5 sm:w-6 sm:h-6 text-cus-primary" />
        </button>

        <!-- Current Achiever -->
        <div
          v-if="currentScholarshipAchiever"
          class="flex flex-col items-center justify-center py-2 md:gap-3"
        >
          <h1
            class="mb-4 text-sm font-semibold text-center capitalize sm:mb-6 text-cus-secondary text-shadow-sm sm:text-base md:text-lg"
          >
            Scholarship Achievers
          </h1>

          <ScholarshipAchieverCard
            :data="currentScholarshipAchiever"
            class="pb-4 sm:pb-6"
          />
        </div>

        <!-- Next Button -->
        <button
          @click="nextScholarshipAchiever"
          aria-label="Next scholarship achiever"
          class="absolute z-30 flex items-center justify-center w-10 h-10 transition transform -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-sm sm:w-12 sm:h-12 top-1/2 right-4 sm:right-6 hover:shadow-md hover:scale-105"
        >
          <ChevronRightIcon class="w-5 h-5 sm:w-6 sm:h-6 text-cus-primary" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional: Smooth scaling on hover for buttons is handled via Tailwind already */
</style>
