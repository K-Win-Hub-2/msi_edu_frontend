<template>
  <div
    class="flex flex-col justify-between gap-4 px-4 sm:gap-6 md:gap-8 xl:flex-row md:px-0"
  >
    <div
      class="flex items-center justify-between w-full gap-4 px-4 py-3 sm:w-56 sm:gap-6 bg-cus-primary cus-rounded"
    >
      <img :src="education" class="w-8 h-8 sm:w-10 sm:h-10" />
      <div
        class="flex flex-col items-center text-base font-semibold text-white"
        ref="studentCounter"
      >
        <span class="text-lg font-bold sm:text-xl">{{ stats.students }}</span>
        <span class="text-sm sm:text-base">Students</span>
      </div>
    </div>

    <div
      class="flex items-center justify-between w-full gap-4 px-4 py-3 sm:w-56 sm:gap-6 bg-cus-primary cus-rounded"
    >
      <img :src="university" class="w-8 h-8 sm:w-10 sm:h-10" />
      <div
        class="flex flex-col items-center text-base font-semibold text-white"
        ref="universityCounter"
      >
        <span class="text-lg font-bold sm:text-xl">{{
          stats.universities
        }}</span>
        <span class="text-sm sm:text-base">Universities</span>
      </div>
    </div>

    <div
      class="flex items-center justify-between w-full gap-4 px-4 py-3 sm:w-56 sm:gap-6 bg-cus-primary cus-rounded"
    >
      <img :src="trophy" class="w-8 h-8 sm:w-10 sm:h-10" />
      <div
        class="flex flex-col items-center text-base font-semibold text-white"
        ref="awardCounter"
      >
        <span class="text-lg font-bold sm:text-xl">{{ stats.awards }}</span>
        <span class="text-sm sm:text-base">Awards</span>
      </div>
    </div>

    <div
      class="flex items-center justify-between w-full gap-4 px-4 py-3 sm:w-56 sm:gap-6 bg-cus-primary cus-rounded"
    >
      <img :src="mortarboard" class="w-8 h-8 sm:w-10 sm:h-10" />
      <div
        class="flex flex-col items-center text-base font-semibold text-white"
        ref="scholarshipCounter"
      >
        <span class="text-lg font-bold sm:text-xl">{{
          stats.scholarships
        }}</span>
        <div class="text-sm text-center sm:text-base">
          Scholarship Achievers
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import education from "@/assets/img/facts/education.png";
import mortarboard from "@/assets/img/facts/mortarboard.png";
import trophy from "@/assets/img/facts/trophy.png";
import university from "@/assets/img/facts/university.png";
import { counterUp } from "counterup2";
import { onMounted, ref } from "vue";
import axios from "axios";

const stats = ref({
  students: 0,
  universities: 0,
  awards: 0,
  scholarships: 0,
});

const studentCounter = ref(null);
const universityCounter = ref(null);
const awardCounter = ref(null);
const scholarshipCounter = ref(null);

onMounted(async () => {
  try {
    // NOTE: In a real application, replace this local IP with a configured environment variable
    const response = await axios.get("statistics");
    stats.value.students = response.data.data.students;
    stats.value.universities = response.data.data.universities;
    stats.value.awards = response.data.data.awards;
    stats.value.scholarships = response.data.data.scholarship_achievers;
  } catch (error) {
    console.error("Failed to fetch statistics:", error);
  }

  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el.querySelector("span"), {
          duration: 4000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };

  const IO = new IntersectionObserver(callback, { threshold: 0 });

  IO.observe(studentCounter.value);
  IO.observe(universityCounter.value);
  IO.observe(awardCounter.value);
  IO.observe(scholarshipCounter.value);
});
</script>

<style lang="scss" scoped></style>