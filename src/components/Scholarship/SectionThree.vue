<template>
  <div>
    <!-- Loop over grouped scholarships -->
    <div
      v-for="(achievers, typeId) in scholarshipsByType"
      :key="typeId"
      class="mt-12 mb-12"
    >
      <!-- Section Title -->
      <h2
        class="text-center text-[#FE005F] uppercase font-bold text-2xl md:text-3xl lg:text-4xl shadow-title mb-6"
      >
        {{ getTypeName(achievers[0]) }}
      </h2>

      <div class="relative">
        <!-- Swiper -->
        <Swiper
          v-bind="swiperOptions"
        
          :modules="modules"
          :pagination="{ el: `.pagination-${typeId}`, clickable: true }"
          @swiper="(swiper) => registerSwiper(typeId, swiper)"
          class="mySwiper w-[75%]"
        >
          <!-- Slides -->
          <SwiperSlide
            v-for="(achiever, idx) in achievers"
            :key="achiever.id || idx"
            class="flex justify-center"
          >
            <AchieverCard
              v-if="achiever.card_type === 1"
              :data="achiever"
            />
            <AchieverCard2
              v-else
              :data="achiever"
            />
          </SwiperSlide>
        </Swiper>

        <!-- Navigation Buttons -->
        <button
          v-if="canSlide(typeId)"
          @click="slidePrev(typeId)"
          class="absolute z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md left-20 top-1/2 hover:bg-gray-100"
        >
          <ChevronLeftIcon class="w-6 h-6 text-gray-700" />
        </button>

        <button
          v-if="canSlide(typeId)"
          @click="slideNext(typeId)"
          class="absolute z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md right-20 top-1/2 hover:bg-gray-100"
        >
          <ChevronRightIcon class="w-6 h-6 text-gray-700" />
        </button>

        <!-- Pagination under cards -->
        <div :class="`pagination-${typeId}`" class="flex justify-center mt-2"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import AchieverCard from "./AchieverCard.vue";
import AchieverCard2 from "./AchieverCard2.vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];

const props = defineProps({
  scholarships: {
    type: Array,
    default: () => [],
  },
  types: {
    type: Array,
    default: () => [],
  },
});

const swipers = reactive({});

function registerSwiper(typeId, instance) {
  swipers[typeId] = instance;
}

function canSlide(typeId) {
  return (scholarshipsByType.value[typeId]?.length || 0) > 1;
}

function slidePrev(typeId) {
  swipers[typeId]?.slidePrev();
}

function slideNext(typeId) {
  swipers[typeId]?.slideNext();
}



const scholarshipsByType = computed(() => {
  const grouped = {};
  props.scholarships.forEach((sch) => {
    const type = sch.scholarship_type;
    if (!grouped[type]) grouped[type] = [];
    grouped[type].push(sch);
  });
  return grouped;
});

if(scholarshipsByType.value) {
  console.log("Grouped Scholarships:", scholarshipsByType.value);
}



const getTypeName = (sch) => {
  const type  = props.types.find(t => t.id === sch.scholarship_type);
  return type ? `${type.scholar_name} scholarships ` : `Type ${sch?.scholarship_type ?? ""}`;
};



const swiperOptions = {
  spaceBetween: 20, // smaller gap between cards
  pagination: { clickable: true },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 2 },
    1280: { slidesPerView: 3 },
  },
};
</script>

<style>
.shadow-title {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

/* Pagination bullets styling */
.mySwiper .swiper-pagination-bullet {
  background: #fe005f;
  opacity: 0.6;
}
.mySwiper .swiper-pagination-bullet-active {
  margin-top: 4px;
  opacity: 1;
}


</style>
