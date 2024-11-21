<template>
  <div
    class="lg:w-[965px] md:w-[600px] w-[530px] flex items-center justify-center lg:h-[450px] md:h-[400px] h-[360px] bg-carousel overflow-hidden lg:rounded-[41px] md:rounded-[36px] rounded-[24px]"
    v-if="props.data"
  >
    <div class="flex lg:gap-8 md:gap-4 w-full px-12 items-center -center">
      <div
        class="flex items-center justify-center lg:w-[380px] md:w-[315px] w-[280px] md:block ssm:hidden"
      >
        <div
          class="lg:w-[340.66px] md:w-[300.66px] border border-1 md:h-[300.66px] w-[270px] h-[270px] lg:h-[340.66px] rounded-full overflow-hidden"
        >
          <img
            class="w-full h-full rounded-full object-cover"
            :src="props.data.imageURL"
            :alt="props.data.university_name"
          />
        </div>
      </div>
      <div
        class="flex flex-col gap-6 lg:grow-0 lg:items-start grow items-center"
      >
        <h1
          class="text-[#FE005F] lg:text-[28px] md:text-[15px] text-[14px] shadow-title"
        >
          {{ props.data.university_name }}
        </h1>
        <ul
          class="flex flex-col gap-3 w-full p-2 lg:items-start lg:grow-0 grow items-center"
        >
          <li class="flex gap-6 w-full items-center justify-start">
            <p
              class="text-[12px] md:text-[18px] lg:text-[20px] uppercase lg:min-w-[145px] sm:min-w-[80px] font-bold"
            >
              <font-awesome-icon :icon="faGlobe" class="text-[#FE005F]" />&nbsp;
              COUNTRY:
            </p>
            <p
              class="font-[510] text-[12px] md:text-[16px] lg:text-[18px] text-[#0E314E]"
            >
              {{ props.data.country?.name }}
            </p>
          </li>
          <li class="flex gap-6 w-full items-start justify-start">
            <p
              class="text-[12px] md:text-[18px] lg:text-[20px] uppercase lg:min-w-[145px] sm:min-w-[80px] font-bold"
            >
              <font-awesome-icon
                :icon="faMapMarkerAlt"
                class="text-[#FE005F]"
              />&nbsp; LOCATION:
            </p>
            <p
              class="font-[510] text-[12px] md:text-[16px] lg:text-[18px] text-[#0E314E]"
            >
              {{ props.data.location }}
            </p>
          </li>
          <li class="flex gap-6 w-full items-center justify-start">
            <p
              class="text-[12px] md:text-[18px] lg:text-[20px] uppercase lg:min-w-[145px] sm:min-w-[80px] font-bold"
            >
              <font-awesome-icon
                :icon="faFontAwesomeFlag"
                class="text-[#FE005F]"
              />&nbsp; FOUNDED:
            </p>
            <p
              class="font-[510] text-[12px] md:text-[16px] lg:text-[18px]text-[#0E314E]"
            >
              {{ props.data.founded_year }}
            </p>
          </li>
        </ul>
        <div class="flex w-full gap-4 xl:justify-start lg:justify-start items-center justify-center">
          <router-link
            :to="{
              name: 'universities.detail',
              params: { id: props.data.id },
            }"
            class="flex items-center"
          >
            <Button
              class="lg:px-[23px] lg:py-[16px] md:px-[40px] md:py-[8px] md:text-[10px] lg:text-[15px] px-[18px] py-[8px] rounded-[20px] text-[10px]"
              type="gradient"
              data-te-toggle="modal"
              data-te-target="#appointmentFormModal"
              data-te-ripple-init
              data-te-ripple-color="light"
              >Scholarship Details</Button
            >
          </router-link>

          <router-link
            :to="{
              name: 'universities.detail',
              params: { id: props.data.id },
            }"
            class="flex items-center"
          >
            <Button
              class="lg:px-[50px] lg:py-[16px] lg:text-[15px] md:px-[40px] md:py-[8px] md:text-[10px] px-[30px] py-[8px] rounded-[20px] text-[10px]"
              type="gradient"
              data-te-toggle="modal"
              data-te-target="#appointmentFormModal"
              data-te-ripple-init
              data-te-ripple-color="light"
              >See More</Button
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '../partials/Button.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faFlag,
  faFontAwesomeFlag,
  faGlobe,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const props = defineProps(['data']);
console.log(props.data, 'slider');
</script>

<style></style>
