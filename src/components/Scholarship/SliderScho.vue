<template>
  <div
    class="lg:w-[965px] md:w-[600px] w-[530px] flex lg:h-[450px] md:h-[400px] h-[360px] bg-carousel relative overflow-hidden lg:rounded-[41px] md:rounded-[36px] rounded-[24px]"
    v-if="props.data"
  >
    <div class="lg:w-[380px] md:w-[315px] w-[280px] md:block ssm:hidden">
      <div class="-ml-16 md:-mt-10 lg:-mt-18 -mt-8">
        <img
          class="lg:w-[340.66px] md:w-[300.66px] border border-1 md:h-[300.66px] w-[270px] h-[270px] lg:h-[340.66px] rounded-full"
          :src="props.data.imageURL"
          alt=""
        />
      </div>
    </div>
    <div class="lg:mt-[48px] md:mt-[5px] mt-[4px] ssm:pl-6 md:pl-0 ml-2 flex flex-col gap-4">
      <h1
        class="text-[#FE005F] lg:text-[28px] md:text-[15px] text-[14px] lg:mb-[35px] md:mb-[8px] mb-[5px] shadow-title"
      >
    {{ props.data.university_name }}
      </h1>
      <div class="flex items-center gap-4">
        <p class="text-[12px] md:text-[18px] lg:text-[20px] uppercase min-w-[105px] font-bold"><font-awesome-icon :icon="faGlobe" class="text-[#FE005F]" />&nbsp; COUNTRY:</p>
        <p
          class="font-[510] text-[12px] md:text-[16px] lg:text-[18px] leading-[18px] lg:mx-5 md:mx-2  text-[#0E314E]"
        >
          {{ props.data.country?.name }}
        </p>
      </div>
      <div class="flex gap-4">
        <p class="text-[12px] md:text-[18px] lg:text-[20px] uppercase min-w-[105px]">
          <font-awesome-icon :icon="faMapMarkerAlt" class="text-[#FE005F]" />&nbsp; LOCATION:
        </p>
   <p
          class="font-[510] text-[12px] md:text-[16px] lg:text-[18px]  lg:mx-5 md:mx-2 text-[#0E314E]"
        >
          {{ props.data.location }}
        </p>
      </div>
          <div class="flex gap-4">
        <p class="text-[12px] md:text-[18px] lg:text-[20px] uppercase min-w-[105px]">
          <font-awesome-icon :icon="faFontAwesomeFlag" class="text-[#FE005F]" />&nbsp; FOUNDED:
        </p>
   <p
          class="font-[510] text-[12px] md:text-[16px] lg:text-[18px] lg:mx-5 md:mx-2 text-[#0E314E]"
        >
          {{ props.data.founded_year }}
        </p>
      </div>
   <div className="flex gap-3 justify-center md:mt-4 lg:mt-5">
       
      <router-link    :to="{
                        name: 'universities.detail',
  params: { id: props.data.id },
                        
                      }">

           <Button
        class="w-full p-2 md:w-[200px] lg:w-[240px]  lg:px-[40px] ssm:mr-7 ssm:px-[30px] ssm:mt-4 md:mt-0 ssm:py-[8px] md:px-[40px] px-[17px] lg:py-[8px] md:py-[8px] py-[2px] rounded-[20px] lg:text-[16px] md:text-[10px] text-[7px] float-right md:mr-[35px] mr-[2px]"
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
                    >
                   
                  
                    <Button
        class="w-full md:w-[200px] p-2 lg:w-[240px] lg:px-[40px] ssm:mr-7 ssm:px-[30px] ssm:mt-4 md:mt-0 ssm:py-[8px] md:px-[40px] px-[17px] lg:py-[8px] md:py-[8px] py-[2px] rounded-[20px] lg:text-[16px] md:text-[10px] text-[7px] text-center md:mr-[35px] mr-[2px]"
        type="gradient"
        data-te-toggle="modal"
        data-te-target="#appointmentFormModal"
        data-te-ripple-init
        data-te-ripple-color="light"
        >See More</Button
      >
                </router-link
              >
   
    
    </div>
   </div>
  </div>
</template>

<script setup>
import Button from "../partials/Button.vue";
import {
  FontAwesomeIcon
  
 } from "@fortawesome/vue-fontawesome";
 import { faFlag, faFontAwesomeFlag, faGlobe, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const props = defineProps(["data"])
console.log(props.data,'slider')
</script>

<style></style>
