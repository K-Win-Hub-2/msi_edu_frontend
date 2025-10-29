<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import Button from "../partials/Button.vue";

// Props
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

// Router
const router = useRouter();

const studentImage = ref("");

watch(
  () => props.data,
  (newData) => {
    if (newData?.student_image) {
      // NOTE: Using a relative URL or configured environment variable is generally safer
      // but keeping the provided structure for demonstration.
      studentImage.value =
        "http://adminpanel.msieducation.edu.mm/postImage/" +
        newData.student_image;
    } else {
      studentImage.value = ""; // fallback if image missing
    }
  },
  { immediate: true }
);

// Navigation
const goToScholarshipPage = () => {
  router.push({ name: "scholarship" });
};
</script>

<template>
  <div class="flex justify-center px-4 py-6 sm:px-6">
    <div class="w-full max-w-2xl">
      <div
        class="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10"
      >
        <div
          class="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6"
        >
          <div class="relative shrink-0">
            <img
              :src="studentImage"
              class="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] z-10 select-none rounded-full object-cover shadow-lg"
              alt="student image"
            />
          </div>

          <div
            class="flex flex-col w-full text-center break-words whitespace-normal sm:text-left"
          >
            <div>
              <h3
                class="mb-1 text-base font-bold capitalize sm:text-lg text-cus-primary text-shadow-sm cus-shadow-color"
              >
                {{ data.title }}
              </h3>

              <h3
                class="mb-1 capitalize text-sm sm:text-[18px] text-cus-primary text-shadow-sm cus-shadow-color"
              >
                {{ data.student_name }}
              </h3>

              <h4
                class="text-sm capitalize sm:text-base text-cus-primary text-shadow-sm cus-shadow-color"
              >
                {{ data.course_name }}
              </h4>

              <h4
                class="mt-1 text-sm capitalize text-shadow-sm cus-shadow-color"
              >
                {{ data.scholar_type.scholar_name }}
              </h4>

              <h4
                class="mt-1 text-xs capitalize text-shadow-sm cus-shadow-color"
              >
                {{ data.country.name }}
              </h4>
            </div>

            <div class="flex justify-center mt-5 sm:justify-start">
              <Button
                class="px-6 py-2 text-sm"
                type="gradient"
                @click="goToScholarshipPage"
              >
                See More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>