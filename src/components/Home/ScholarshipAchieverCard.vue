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
  <div class="flex justify-center my-12">
    <!-- Fixed width container -->
    <div class="w-full max-w-[900px]">
      <div class="flex items-end justify-between gap-10">
        <div class="flex gap-6 md:flex-row ssm:flex-col">
          <div class="relative shrink-0">
            <img
              :src="studentImage"
              class="relative md:h-[280px] ssm:h-[180px] ssm:w-[200px] md:w-[300px] z-10 select-none rounded-[50%] object-cover"
              alt=""
            />
          </div>
          <div class="flex flex-col text-left">
            <div>
              <h3
                class="mb-3 font-bold capitalize md:text-2xl ssm:text-md text-cus-primary text-shadow-sm cus-shadow-color"
              >
                {{ data.title }}
              </h3>
              <div
                class="mb-3 capitalize text-cus-primary text-shadow-sm cus-shadow-color"
              >
                <h3 class="mb-1 md:text-2xl ssm:text-md">
                  {{ data.student_name }}
                </h3>
              </div>

              <h4
                class="md:text-xl ssm:text-[16px] text-cus-primary capitalize text-shadow-sm cus-shadow-color"
              >
                {{ data.course_name }}
              </h4>
              <h4
                class="md:text-xl ssm:text-[20px] text-shadow-sm cus-shadow-color mt-2"
              >
                {{ data.scholar_type.scholar_name }}
              </h4>
              <h4
                class="md:text-xl ssm:text-[20px] text-shadow-sm cus-shadow-color mt-2"
              >
                {{ data.country.name }}
              </h4>
            </div>
            <div class="flex justify-end ssm:mt-3 md:mt-0">
              <Button class="px-6" type="gradient" @click="goToScholarshipPage"
                >See More</Button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
