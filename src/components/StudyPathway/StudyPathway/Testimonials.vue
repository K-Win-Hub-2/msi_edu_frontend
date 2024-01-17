<script setup>
import TestimonialCard from "@/components/Home/TestimonialCard.vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";

import AgSittThweHan from "@/assets/img/students/AgSittThweHan.png";
import AgKhitPaing from "@/assets/img/students/AgKhitPaing.png";
import MyoMyintZaw from "@/assets/img/students/MyoMyintZaw.png";
import Button from "../../partials/Button.vue";
import { ref } from "vue";
// swiper end

const nextTestimonial = () => {
  let currentIndex = currentTestimonialIndex.value;
  if (currentIndex + 1 >= testimonials.value.length) {
    currentTestimonialIndex.value = 0;
  } else {
    currentTestimonialIndex.value += 1;
  }
  updateCurrentTestimonial();
};

const previousTestimonial = () => {
  let currentIndex = currentTestimonialIndex.value;
  if (currentIndex - 1 < 0) {
    currentTestimonialIndex.value = testimonials.value.length - 1;
  } else {
    currentTestimonialIndex.value -= 1;
  }
  updateCurrentTestimonial();
};

const updateCurrentTestimonial = () => {
  currentTestimonial.value = testimonials.value[currentTestimonialIndex.value];
};

const testimonials = ref([
  {
    image: AgSittThweHan,
    content:
      "Hello to anyone out there looking forward to studying abroad especially US, I highly recommend MSI as your first choice because speaking from someone with actual experience like myself ever since I began my study abroad journey with MSI despite through all the difficult circumstances. To the point of safely landing at your destination as they dealt with everything necessary beginning from getting admission of your choice of school to all the complication steps of VISA process that can make you very stressful but MSI will never leave you alone.....",
    user: {
      name: "Aung Sitt Thwe Htan",
      university: "Columbia University",
      country: "(U.S.A.)",
      degree: "Bachelor of Computer Science",
    },
    rating: 5
  },
  {
    image: MyoMyintZaw,
    content:
      "I dare to say MSI is one of the best agencies for student in Myanmar. I haven't really got any regrets working with them. They have been providing great services since we started. However, I would say there is always a room for improvement even you are already good enough. Keep moving! Keep growing!",
    user: {
      name: "Myo Myint Zaw",
      university: "PSB Academy",
      country: "(Singapore)",
      degree: "Diploma in Sport and Exercise Science",
    },
    rating: 5
  },
  {
    image: AgKhitPaing,
    content:
      "Finding a university that suited my academic results and financial position was a difficult task during my hunt. MSI supported me by presenting university options to me. They guided me through every stage of the process, from obtaining a student visa and completing university applications to locating accommodation. They assisted me with my application to Monash University Malaysia, where I am currently enrolled in my final semester. Overall, MSI is the most helpful and compassionate agent available.",
    user: {
      name: "Aung Khit Paing",
      university: "Monash University",
      country: "(Malaysia)",
      degree: "Bachelor of Business & Commerce",
    },
    rating: 2
  },
]);

const currentTestimonialIndex = ref(0);
const currentTestimonial = ref({
  ...testimonials.value[0]
});
</script>

<template>
  <div class="relative overflow-hidden container mb-11">
    <h1 class="cus-heading text-cus-secondary text-shadow-sm  text-center capitalize mt-12">
      Testimonials
    </h1>
    <div class="">
      <TestimonialCard
        :image="currentTestimonial.image"
        :content="currentTestimonial.content" 
        :user="currentTestimonial.user"
        :rating="currentTestimonial.rating"
      />
      <div
        @click="previousTestimonial"
        class="absolute top-1/2 -translate-y-1/2 -left-6 sm:left-12 md:-left-10 lg:left-0 z-20 swiper-button-prev-unique hover:cursor-pointer"
      >
        <ChevronLeftIcon class="w-12 h-12 text-cus-primary" />
      </div>
      <div
        @click="nextTestimonial"
        class="absolute top-1/2 -translate-y-1/2 -right-6 sm:right-12 md:-right-10 lg:right-0 z-20 swiper-button-next-unique hover:cursor-pointer"
      >
        <ChevronRightIcon class="w-12 h-12 text-cus-primary" />

      </div>
      <div class="text-right -mt-11">
      <Button class="px-6 " type="gradient">Next</Button>
    </div>
    </div>
    <!-- <img src="@/assets/img/waves/topLeft.png" class="w-[300px] h-[200px] absolute left-0 top-0 select-none" alt="">
    <img src="@/assets/img/waves/topRight.png" class="w-[300px] h-[200px] absolute right-0 top-0 select-none" alt="">
    <img src="@/assets/img/waves/bottomLeft.png" class="w-[300px] h-[200px] absolute left-0 bottom-0 select-none" alt="">
    <img src="@/assets/img/waves/bottomRight.png" class="w-[300px] h-[200px] absolute right-0 bottom-0 select-none" alt=""> -->
  </div>
</template>

<style scoped></style>
