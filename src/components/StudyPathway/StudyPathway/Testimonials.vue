<template>
  <div class="mt-5">
    <h1
      class="text-center text-cus-secondary text-lg text-shadow-lg font-semibold"
    >
      Testimonials
    </h1>

    <div class="flex justify-center">
      <div class="relative container">
        <swiper
          :pagination="{
            clickable: true,
          }"
          @slideChange="onSlideChange"
          :breakpoints="swiperOptions.breakpoints"
          :navigation="swiperOptions.navigation"
          :modules="modules"
          class="mySwiper"
        >
          <!-- slider one -->
          <swiper-slide
            class="flex ssm:flex-col md:flex-row justify-between gap-x-7 py-12"
            v-for="testimonial in testimonials"
            :key="testimonial.id"
          >
            <!-- card start-->
            <div class="flex">
              <img
                class="md:w-[430px] ssm:h-[300px] md:h-[450px] rounded-[25px] ssm:px-3 md:mx-0 object-cover"
                :src="testimonial.imageURL"
                alt=""
              />
            </div>
            <div class="w-full ssm:px-3">
              <h1
                class="text-md text-cus-primary text-shadow-lg font-bold mt-5"
              >
                {{ testimonial.name ? testimonial.name : "" }}
              </h1>
              <p
                class="text-sm text text-primary-800 leading-7 shadow-sm font-[505] py-9"
              >
                {{ testimonial.speech ? testimonial.speech : "" }}
              </p>

              <p class="text-[18px] font-bold text-cus-primary capitalize">
                {{ testimonial.uni_name ? testimonial.uni_name : "" }}
              </p>
              <p class="text-[18px] font-bold text-cus-primary capitalize">
                {{ testimonial.country?.name ? testimonial.country?.name : "" }}
              </p>
              <p class="text-[18px] font-bold text-cus-primary capitalize">
                {{ testimonial.program_name }}
              </p>
            </div>
            <!-- card end -->
          </swiper-slide>
        </swiper>
        <div
          class="swiper-testimonial-button-prev-unique absolute left-0 top-1/2 -translate-y-1/2"
        >
          <ChevronLeftIcon
            :class="{ 'opacity-50': start }"
            class="w-12 h-12 text-cus-primary ssm:hidden md:block"
          />
        </div>
        <div
          class="swiper-testimonial-button-next-unique absolute right-0 top-1/2 -translate-y-1/2"
        >
          <ChevronRightIcon
            :class="{ 'opacity-50': end }"
            class="w-12 h-12 text-cus-primary ssm:hidden md:block"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { Pagination, Navigation } from "swiper";
import { onMounted, ref } from "vue";
import axios from "axios";
const modules = [Navigation, Pagination];
const start = ref(true);
const end = ref(false);
const testimonials = ref([]);

const onSlideChange = (event) => {
  if (event.isEnd) {
    end.value = true;
  } else {
    end.value = false;
  }

  if (event.isBeginning) {
    start.value = true;
  } else {
    start.value = false;
  }
};
const swiperOptions = {
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-testimonial-button-next-unique",
    prevEl: ".swiper-testimonial-button-prev-unique",
  },
};

// fetch data
const fetchData = async () => {
  const res = await axios.get(
    "https://adminpanel.msieducation.edu.mm/api/testimonials"
  );
  testimonials.value = res.data.testimonials;
};
onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped></style>
