<template>
  <div
    class="lg:w-[965px] md:w-[600px] w-[530px] flex items-center justify-center lg:h-[450px] md:h-[400px] h-[360px] bg-slider-carousel overflow-hidden lg:rounded-[41px] md:rounded-[36px] rounded-[24px]"
    v-if="props.data"
  >
    <div class="flex items-center w-full px-12 lg:gap-8 md:gap-4">
      <div class="flex items-center justify-center lg:w-[380px] md:w-[315px] w-[280px] md:block ssm:hidden">
        <div class="lg:w-[340.66px] md:w-[300.66px] w-[270px] lg:h-[340.66px] md:h-[300.66px] h-[270px] border-2 border-gray-200 rounded-full overflow-hidden flex items-center justify-center bg-white p-6">
          <img
            class="w-full h-full object-contain"
            :src="props.data.imageURL"
            :alt="props.data.university_name"
          />
        </div>
      </div>

      <div class="flex flex-col items-start gap-6 grow text-left">
        <h1 class="text-[#FE005F] lg:text-[28px] md:text-[20px] text-[16px] font-bold leading-tight uppercase">
          {{ props.data.university_name }}
        </h1>

        <ul class="flex flex-col items-start w-full gap-4">
          
          <li class="flex items-start justify-start w-full gap-2">
            <div class="text-[12px] md:text-[18px] lg:text-[20px] uppercase font-bold text-[#0E314E] flex items-center gap-2 lg:min-w-[160px] md:min-w-[140px] ssm:min-w-[100px]">
              <font-awesome-icon :icon="faGlobe" class="text-[#FE005F] w-5" />
              <span>COUNTRY:</span>
            </div>
            <p class="font-medium text-[12px] md:text-[16px] lg:text-[18px] text-[#0E314E] text-left">
              {{ props.data.country?.name }}
            </p>
          </li>

          <li class="flex items-start justify-start w-full gap-2">
            <div class="text-[12px] md:text-[18px] lg:text-[20px] uppercase font-bold text-[#0E314E] flex items-center gap-2 lg:min-w-[160px] md:min-w-[140px] ssm:min-w-[100px]">
              <font-awesome-icon :icon="faMapMarkerAlt" class="text-[#FE005F] w-5" />
              <span>LOCATION:</span>
            </div>
            <p class="font-medium text-[12px] md:text-[16px] lg:text-[18px] text-[#0E314E] text-left leading-snug">
              {{ props.data.location }}
            </p>
          </li>

          <li class="flex items-start justify-start w-full gap-2">
            <div class="text-[12px] md:text-[18px] lg:text-[20px] uppercase font-bold text-[#0E314E] flex items-center gap-2 lg:min-w-[160px] md:min-w-[140px] ssm:min-w-[100px]">
              <font-awesome-icon :icon="faFontAwesomeFlag" class="text-[#FE005F] w-5" />
              <span>FOUNDED:</span>
            </div>
            <p class="font-medium text-[12px] md:text-[16px] lg:text-[18px] text-[#0E314E] text-left">
              {{ props.data.founded_year }}
            </p>
          </li>
        </ul>

        <div class="flex items-center justify-start w-full gap-4 flex-wrap mt-2">
          <router-link :to="{ name: 'universities.detail', params: { id: props.data.id } }">
            <Button
              class="lg:px-[28px] lg:py-[14px] md:px-[24px] md:py-[10px] px-[20px] py-[10px] rounded-[20px] text-[12px] md:text-[14px] lg:text-[15px] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
              type="gradient"
            >
              Scholarship Details
            </Button>
          </router-link>

          <router-link :to="{ name: 'universities.detail', params: { id: props.data.id } }">
            <Button
              class="lg:px-[50px] lg:py-[14px] md:px-[40px] md:py-[10px] px-[30px] py-[10px] rounded-[20px] text-[12px] md:text-[14px] lg:text-[15px] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
              type="gradient"
            >
              See More
            </Button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "../partials/Button.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFontAwesomeFlag,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const props = defineProps(["data"]);
</script>

<style scoped>
.bg-slider-carousel {
  background: linear-gradient(
    100deg,
    #f6fbff 2.14%,
    rgba(225, 241, 255, 0) 105.75%,
    rgba(162, 213, 255, 0) 105.75%
  );
  border: 1px solid #b2adad;
}
</style>