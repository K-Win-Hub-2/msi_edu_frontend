<template>
  <div class="">
    <div class="w-full relative overflow-hidden">
      <!-- section one -->
      <div
        class="bg-[url(../../assets/img/scholarship/image.png)] w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute top-0"
      ></div>
      <div class="lg:mb-[280px] mb-[130px] md:mb-[180px]">
        <div
          class="bg-[url(../../assets/img/scholarship/ellipse9.png)] z-30 w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute rotate-180 lg:bottom-[-150px] right-[450px] lg:left-[-1200px] md:bottom-[-80px] bottom-[-50px] md:left-[-550px]"
        ></div>
        <div
          class="relative overflow-hidden lg:py-24 md:pt- pt-16 md:pb-[20px]"
        >
          <div>
            <div
              class="bg-[url(../../assets/img/scholarship/ellipse9.png)] w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute lg:top-[-7px] md:top-[-12px] md:right-[-550px] right-[-400px] top-[-8px] lg:right-[-1200px]"
            ></div>
            <div>
              <h1
                class="text-center lg:text-[48px] md:text-[32px] text-[24px] z-40 shadow-title text-cus-primary uppercase lg:font-[700] font-[550] md:font-[600]"
              >
                Scholarship Admission (2007 - 2023)
              </h1>
              <h1
                class="text-center lg:text-[48px] md:text-[28px] text-[20px] md:font-[530] font-[520] text-cus-primary uppercase my-4 shadow-title"
              >
                Over <span class="text-red-500">350</span> Scholarship Achievers
              </h1>
            </div>
          </div>
          <p
            class="text-center lg:text-[32px] text-[20px] font-[520] md:text-[28px] text-cus-primary uppercase md:font-[510] lg:font-[700] shadow-title mt-[80px] md:mb-[30px] mb-[25px] lg:mb-[50px]"
          >
            GENERAL tIPS TO APPLY SCHOLARSHIP
          </p>
        </div>
        <!-- hello -->
        <div class="flex justify-center">
          <div
            class="flex flex-wrap justify-center lg:max-w-[1200px] z-40 lg:gap-4 md:gap-1 md:gap-y-4 gap-y-3 md:mx-4"
          >
            <!-- loop -->
            <div class="" v-for="course in courses" :key="course">
              <CountryCourseCard :course="course" />
            </div>
          </div>
          <!-- end loop -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CountryCourseCard from "./Country&CourseCard.vue";
import courseImg1 from "../../../src/assets/img/scholarship/MSI WEBSITE ICONS 1.png";
import courseImg2 from "../../../src/assets/img/scholarship/MSI WEBSITE ICONS 2.png";
import courseImg3 from "../../../src/assets/img/scholarship/MSI WEBSITE ICONS 3.png";
import courseImg4 from "../../../src/assets/img/scholarship/MSI WEBSITE ICONS 4.png";
import courseImg5 from "../../../src/assets/img/scholarship/MSI WEBSITE ICONS 5.png";
import courseImg6 from "../../../src/assets/img/scholarship/MSI WEBSITE ICONS 6.png";
import courseImg7 from "../../../src/assets/img/scholarship/MSI WEBSITE ICONS 7.png";
import courseImg8 from "../../../src/assets/img/scholarship/MSI WEBSITE ICONS 8.png";
import courseImg9 from "../../../src/assets/img/scholarship/MSI WEBSITE ICONS 9.png";
import courseImg10 from "../../../src/assets/img/scholarship/MSI WEBSITE ICONS 10.png";

// 1. Try to choose rare country and course
// 2. Read the requirements
// 3. Start early
// 4. Preparing and taking English Proficiency
// 5. Highlight your achievements
// 6. Prepare your documents
// 7. Write a compelling essay
// 8. Contact referees early
// 9. Follow the instruction
// 10. Keep track of your application

const courses = [
  {
    image: courseImg1,
    name: "Try to choose rare country and course",
  },
  {
    image: courseImg2,
    name: "Read the requirements",
  },
  {
    image: courseImg3,
    name: "Start early",
  },
  {
    image: courseImg4,
    name: "Preparing and taking English Proficiency",
  },
  {
    image: courseImg5,
    name: "Highlight your achievements",
  },
  {
    image: courseImg6,
    name: "Prepare your documents",
  },
  {
    image: courseImg7,
    name: "Write a compelling essays",
  },
  {
    image: courseImg8,
    name: "Contact referees early",
  },
  {
    image: courseImg9,
    name: "Follow the instruction",
  },
  {
    image: courseImg10,
    name: "Keep track of your application",
  },
];
</script>

<style></style>
