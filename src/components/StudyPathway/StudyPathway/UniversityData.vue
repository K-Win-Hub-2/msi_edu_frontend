<template>
  <div
    class="lg:w-[965px] md:w-[600px] w-[530px] flex lg:h-[450px] md:h-[400px] h-[360px] bg-carousel relative overflow-hidden lg:rounded-[41px] md:rounded-[36px] rounded-[24px]"
  >
    <div class="lg:w-[407px] md:w-[280px] w-[280px] ssm:hidden md:block">
      <div class="-ml-16 md:-mt-10 lg:-mt-18 -mt-8">
        <img
          class="lg:w-[414.66px] md:w-[300px] md:h-[300.66px] w-[270px] h-[270px] lg:h-[414.66px] rounded-full"
          src="https://www.thoughtco.com/thmb/PCVPjqDcfiY4az_kycvn-EJA-e8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="lg:mt-[40px] md:mt-[25px] mt-[14px] pl-4">
      <h1
        class="md:mt-5 ssm:text-[20px] ssm:mb-5 text-cus-primary text-shadow-lg lg:text-lg md:text-md text-[14px] lg:mb-[20px] md:mb-[8px] mb-[5px] shadow-title"
      >
        SEGI UNIVERSITY, MALAYSIA
      </h1>
      <div class="flex items-center lg:mt-16 md:mt-10">
        <img
          class="md:mr-3 ssm:mr-1"
          src="../../../assets/img/scholarship/Vector.svg"
          alt=""
        />
        <p class="text-[20px] font-semibold uppercase lg:min-w-[130px]">
          Country:
          <span class="font-[500] text-[20px] leading-[18px] text-black"
            >Malaysia</span
          >
        </p>
      </div>

      <div class="flex my-7">
        <img
          src="../../../assets/img/scholarship/MapPin.svg"
          class="md:mr-3 ssm:mr-1"
          alt=""
        />
        <p class="text-[20px] font-semibold uppercase lg:min-w-[130px]">
          Location:
          <span class="font-[500] text-[20px] leading-[18px] text-black">
            Petaling Jaya,Selangor,Malaysia</span
          >
        </p>
      </div>

      <div class="flex items-center my-3">
        <img
          src="../../../assets/img/scholarship/Flag.svg"
          class="md:mr-3 ssm:mr-1"
          alt=""
        />
        <p class="text-[20px] font-semibold uppercase lg:min-w-[130px]">
          <span> Founded:</span>
          <span class="font-[500] text-[20px] leading-[18px] text-black"
            >1977</span
          >
        </p>
      </div>

      <Button
        class="lg:px-[40px] text-md ssm:mr-7 sm:px-[30px] sm:py-[5px] md:px-[40px] px-[17px] lg:py-[6px] md:py-[8px] py-[2px] rounded-[20px] lg:text-[16px] md:text-[9px] ssm:text-[17px] float-right md:mr-[35px] mr-[2px]"
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
