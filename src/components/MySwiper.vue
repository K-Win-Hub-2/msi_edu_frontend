<template>
  <div class="bg-[#FFFFFF] py-4 mx-0 px-10 mt-[100px]">
    <div class="grid grid-cols-12">
      <div class="hidden md:block md:col-span-5">
        <img src="@/assets/img/student.jpg" alt="" />
      </div>
      <div class="col-span-12 md:col-span-7">
        <div class="container relative !pl-3">
          <h1 class="text-3xl">
            Our <span class="text-cyan-400">Client's</span>
          </h1>
          <swiper
            :modules="modules"
            class="mySwiper mb-2"
            :navigation="swiperOption.navigation"
            :loop="true"
          >
            <swiper-slide
              ><h1 class="text-2xl my-2">
                Why we are the best mdical and home care service provider.
              </h1>
              <p class="text-1xl font-bold my-1">
                <span class="text-cyan-400">Sarina Smith </span> (Designer)
              </p>
              <p class="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                minus asperiores odit impedit, suscipit, quisquam officia eius
                tempora blanditiis dolorum saepe, laboriosam earum! Est debitis
                natus corrupti fugit enim sed?
              </p>
            </swiper-slide>
            <swiper-slide
              ><h1 class="text-2xl my-2">
                Why we are the best mdical and home care service provider.
              </h1>
              <p class="text-1xl font-bold my-1">
                <span class="text-cyan-400">Sarina Smith </span> (Designer)
              </p>
              <p class="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                minus asperiores odit impedit, suscipit, quisquam officia eius
                tempora blanditiis dolorum saepe, laboriosam earum! Est debitis
                natus corrupti fugit enim sed?
              </p>
            </swiper-slide>
          </swiper>
          <button class="prev-unique bg-cyan-500 text-white p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button class="next-unique bg-cyan-500 text-white mx-5 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <!-- <h1>Why we are the best mdical and home care service provider.</h1>
          <p>Sarina Smith (Designer)</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            minus asperiores odit impedit, suscipit, quisquam officia eius
            tempora blanditiis dolorum saepe, laboriosam earum! Est debitis
            natus corrupti fugit enim sed?
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const modules = [Navigation];
// const onSwiper = (swiper) {
//     console.log(swiper)
// }
const onSlideChange = (event) => {
  console.log(event);
};
const swiperOption = {
  navigation: {
    nextEl: ".next-unique",
    prevEl: ".prev-unique",
  },
};
</script>
