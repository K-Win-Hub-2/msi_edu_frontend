<script setup>
import TestimonialCard from "@/components/Home/TestimonialCard.vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";

import AgSittThweHan from "@/assets/img/students/AgSittThweHan.png";
import AgKhitPaing from "@/assets/img/students/AgKhitPaing.png";
import MyoMyintZaw from "@/assets/img/students/MyoMyintZaw.png";

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
      title: "Testimonials",
      name: "Aung Sitt Thwe Htan",
      university: "Columbia University",
      country: "(U.S.A.)",
      degree: "Bachelor of Computer Science",
    },
    rating: 5,
  },
  {
    image: MyoMyintZaw,
    content:
      "I dare to say MSI is one of the best agencies for student in Myanmar. I haven't really got any regrets working with them. They have been providing great services since we started. However, I would say there is always a room for improvement even you are already good enough. Keep moving! Keep growing!",
    user: {
      title: "Testimonials",
      name: "Myo Myint Zaw",
      university: "PSB Academy",
      country: "(Singapore)",
      degree: "Diploma in Sport and Exercise Science",
    },
    rating: 5,
  },
  {
    image: AgKhitPaing,
    content:
      "Finding a university that suited my academic results and financial position was a difficult task during my hunt. MSI supported me by presenting university options to me. They guided me through every stage of the process, from obtaining a student visa and completing university applications to locating accommodation. They assisted me with my application to Monash University Malaysia, where I am currently enrolled in my final semester. Overall, MSI is the most helpful and compassionate agent available.",
    user: {
      title: "Testimonials",
      name: "Aung Khit Paing",
      university: "Monash University",
      country: "(Malaysia)",
      degree: "Bachelor of Business & Commerce",
    },
    rating: 2,
  },
]);

const currentTestimonialIndex = ref(0);
const currentTestimonial = ref({
  ...testimonials.value[0],
});
</script>

<template>
  <div class="overflow-hidden">
    <!-- <h1 class="mt-12 text-center capitalize cus-heading text-cus-primary">
      Testimonials
    </h1> -->
    <div class="flex items-center justify-center gap-3 group">
      <div
        @click="previousTestimonial"
        class="opacity-0 swiper-home-testimonial-prev-unique hover:cursor-pointer group-hover:opacity-100"
      >
        <!-- <ChevronLeftIcon class="w-12 h-12 text-cus-primary" /> -->
      </div>
      <TestimonialCard
        :image="currentTestimonial.image"
        :content="currentTestimonial.content"
        :user="currentTestimonial.user"
        :rating="currentTestimonial.rating"
      />

      <div
        @click="nextTestimonial"
        class="opacity-0 swiper-home-testimonial-next-unique hover:cursor-pointer group-hover:opacity-100"
      >
        <!-- <ChevronRightIcon class="w-12 h-12 text-cus-primary" /> -->
      </div>
    </div>
    <!-- <img src="@/assets/img/waves/topLeft.png" class="w-[300px] h-[200px] absolute left-0 top-0 select-none" alt="">
    <img src="@/assets/img/waves/topRight.png" class="w-[300px] h-[200px] absolute right-0 top-0 select-none" alt="">
    <img src="@/assets/img/waves/bottomLeft.png" class="w-[300px] h-[200px] absolute left-0 bottom-0 select-none" alt="">
    <img src="@/assets/img/waves/bottomRight.png" class="w-[300px] h-[200px] absolute right-0 bottom-0 select-none" alt=""> -->
  </div>
</template>

<style scoped></style>
