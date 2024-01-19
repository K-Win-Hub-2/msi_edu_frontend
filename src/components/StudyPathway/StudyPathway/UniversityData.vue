<template>
  <div
    class="lg:w-[965px] md:w-[600px] w-[530px] flex lg:h-[450px] md:h-[400px] h-[360px] bg-carousel relative overflow-hidden lg:rounded-[41px] md:rounded-[36px] rounded-[24px]"
  >
    <div class="lg:w-[407px] md:w-[315px] w-[280px]">
      <div class="-ml-16 md:-mt-10 lg:-mt-18 -mt-8">
        <img
          class="lg:w-[414.66px] md:w-[300.66px] md:h-[300.66px] w-[270px] h-[270px] lg:h-[414.66px] rounded-full"
          src="https://www.thoughtco.com/thmb/PCVPjqDcfiY4az_kycvn-EJA-e8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="lg:mt-[48px] md:mt-[25px] mt-[14px]">
      <h1
        class="text-[#FE005F] lg:text-[22px] md:text-[15px] text-[14px] lg:mb-[35px] md:mb-[8px] mb-[5px] shadow-title"
      >
        SEGI UNIVERSITY, MALAYSIA
      </h1>
      <div class="flex items-center mt-20">
        <p class="text-[20px] font-semibold uppercase lg:min-w-[130px]">
          Country:
        </p>
        <p class="font-[500] text-[20px] leading-[18px] text-black">Malaysia</p>
      </div>

      <div class="flex items-center my-7">
        <p class="text-[20px] font-semibold uppercase lg:min-w-[130px]">
          Location:
        </p>
        <p class="font-[500] text-[20px] leading-[18px] text-black">
          Petaling Jaya,Selangor,Malaysia
        </p>
      </div>

      <div class="flex items-center my-3">
        <p class="text-[20px] font-semibold uppercase lg:min-w-[130px]">
          Founded:
        </p>
        <p class="font-[500] text-[20px] leading-[18px] text-black">1977</p>
      </div>

      <Button
        class="my-12 lg:px-[40px] sm:mr-7 sm:px-[30px] sm:py-[5px] md:px-[40px] px-[17px] lg:py-[6px] md:py-[8px] py-[2px] rounded-[20px] lg:text-[16px] md:text-[9px] text-[7px] float-right md:mr-[35px] mr-[2px]"
        type="gradient"
        data-te-toggle="modal"
        data-te-target="#appointmentFormModal"
        data-te-ripple-init
        data-te-ripple-color="light"
        >See More</Button
      >
    </div>
  </div>
</template>

<script setup>
import Button from "../../../components/partials/Button.vue";
</script>

<style></style>
