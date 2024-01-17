<template>
  <div class="px-20 mt-20">
    <!-- <img src="@/assets/img/test/1.jpg" class="w-[45%]" alt="" />
        <div>
            <h1>Title</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quo
            ducimus similique porro eos aliquam at praesentium quia eius earum
            voluptatem eum expedita suscipit, sapiente possimus. Perspiciatis modi
            animi voluptas.
            </p>
        </div> -->
    <div class="relative px-5">
      <swiper
        :modules="modules"
        :effect="'cube'"
        class="mySwiper mb-2 rounded-xl"
        :navigation="swiperOption.navigation"
        :loop="true"
      >
        <swiper-slide>
          <div
            class="flex flex-col justify-start gap-2 md:flex-row md:justify-between rounded-lg p-5 bg-cus-primary"
          >
            <img
              src="@/assets/img/test/1.jpg"
              class="w-[100%] md:w-[45%] rounded-xl mr-5"
              alt=""
            />
            <div>
              <h1 class="text-2xl my-2 font-bold text-white">This is Title</h1>
              <p class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                quo ducimus similique porro eos aliquam at praesentium quia eius
                earum voluptatem eum expedita suscipit, sapiente possimus.
                Perspiciatis modi animi voluptas.
              </p>
              <div class="flex gap-2 justify-start mt-3">
                <button
                  class="px-5 py-2 rounded-full border border-1 bg-white text-cus-primary"
                >
                  Register
                </button>
                <button
                  class="px-5 py-2 rounded-full border border-1 border-white text-white font-bold"
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="flex flex-col justify-start gap-2 md:flex-row md:justify-between rounded-lg p-4 bg-cus-primary"
          >
            <img
              src="@/assets/img/test/1.jpg"
              class="w-[100%] md:w-[45%]"
              alt=""
            />
            <div>
              <h1 class="text-2xl my-2 font-bold text-white">This is Title</h1>
              <p class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                quo ducimus similique porro eos aliquam at praesentium quia eius
                earum voluptatem eum expedita suscipit, sapiente possimus.
                Perspiciatis modi animi voluptas.
              </p>
              <div class="flex gap-2 justify-start mt-3">
                <button
                  class="px-5 py-2 rounded-full border border-1 bg-white text-cyan-500"
                >
                  Register
                </button>
                <button
                  class="px-5 py-2 rounded-full border border-1 border-white text-white font-bold"
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10 bg-white border border-1 rounded-full absolute swiper-button-prev-unique p-1 -left-5 top-1/2 text-cyan-500 swiper-button-prev-unique"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10 bg-white border border-1 rounded-full -right-5 swiper-button-next-unique top-1/2 absolute p-1 text-cyan-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectCube } from "swiper";

// Import Swiper styles
import "swiper/css/effect-cube";
import "swiper/css";
import "swiper/css/navigation";
const modules = [Navigation, EffectCube];
// const onSwiper = (swiper) {
//     console.log(swiper)
// }
const onSlideChange = (event) => {
  console.log(event);
};
const swiperOption = {
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
};
</script>
