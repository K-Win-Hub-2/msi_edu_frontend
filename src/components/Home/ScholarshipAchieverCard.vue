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
  <div class="flex justify-center">
    <!-- Fixed width container -->
    <div class="w-full">
      <div class="flex items-end justify-between gap-10">
        <div class="flex justify-center w-[550px] gap-6 md:flex-row ssm:flex-col">
          <!-- Image -->
          <div class="relative shrink-0">
            <img
              :src="studentImage"
              class="relative md:h-[160px] md:w-[160px] ssm:h-[110px] ssm:w-[110px] z-10 select-none rounded-full object-cover"
              alt="student image"
            />
          </div>

          <!-- Info -->
          <div class="flex flex-col text-left max-w-[600px] w-full break-words whitespace-normal">
            <div>
              <h3
                class="mb-2 font-bold capitalize md:text-lg ssm:text-base text-cus-primary text-shadow-sm cus-shadow-color"
              >
                {{ data.title }}
              </h3>

              <h3
                class="mb-1 capitalize md:text-[18px] ssm:text-sm text-cus-primary text-shadow-sm cus-shadow-color"
              >
                {{ data.student_name }}
              </h3>

              <h4
                class="capitalize md:text-base ssm:text-sm text-cus-primary text-shadow-sm cus-shadow-color"
              >
                {{ data.course_name }}
              </h4>

              <h4
                class="mt-1 capitalize md:text-sm ssm:text-sm text-shadow-sm cus-shadow-color"
              >
                {{ data.scholar_type.scholar_name }}
              </h4>

              <h4
                class="md:text-xs ssm:text-[11px] text-shadow-sm cus-shadow-color mt-1 capitalize"
              >
                {{ data.country.name }}
              </h4>
            </div>

            <div class="flex justify-start mt-5">
              <Button class="px-6" type="gradient" @click="goToScholarshipPage">
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
