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
        jAMES COOK UNIVERSITY, SINGAPORE
      </h1>
      <div class="flex items-center">
        <p class="text-[12px] uppercase min-w-[105px]">SCHOLAR NAME:</p>
        <p
          class="font-[510] text-[12px] leading-[18px] lg:mx-5 md:mx-2 mt-4 md:mt-4 sm:mt-9 text-[#0E314E]"
        >
          20%,50%,100% MERIT SCHOLARSHIPS <br />
          (ONE ACADEMIC YEAR)
        </p>
      </div>
      <div class="flex lg:my-[30px] md:my-[12px] my-[10px]">
        <p class="text-[12px] uppercase min-w-[105px] md:mt-2 sm:mt-2 lg:mt-1">
          REQUIREMENTS:
        </p>
        <ul class="lg:mx-5 md:ml-3">
          <li
            class="text-[12px] mb-1 md:mb-2 font-[510] sm:mt-2 lg:leading-3 md:leading-3 leading-[16.433px] text-[#0E314E]"
          >
            ACADEMIC YEAR CERTIFICATE
          </li>
          <li
            class="text-[12px] mb-1 md:mb-2 font-[510] md:leading-[16.433px] leading-[16.433px] text-[#0E314E]"
          >
            MARKS
          </li>
          <li
            class="text-[12px] mb-1 md:mb-2 font-[510] leading-[16.433px] text-[#0E314E]"
          >
            TRANSCRIPTS
          </li>
          <li
            class="text-[12px] md:mb-2 mb-1 font-[510] leading-[16.433px] text-[#0E314E]"
          >
            PASSPORT VALID UNTIL 1 YEAR
          </li>
          <li
            class="text-[12px] md:mb-2 mb-1 font-[510] leading-[16.433px] text-[#0E314E]"
          >
            RECOMMENDATION LETTER
          </li>
          <li
            class="text-[12px] md:mb-2 mb-1 font-[510] leading-[16.433px] text-[#0E314E]"
          >
            ENGLISH PROFICIENCY REQUIREMENTS (IELTS, TOEFL, <br />
            DUOLINGO SCORE)
          </li>
        </ul>
      </div>
      <Button
        class="lg:px-[40px] sm:mr-7 sm:px-[30px] sm:py-[5px] md:px-[40px] px-[17px] lg:py-[8px] md:py-[8px] py-[2px] rounded-[20px] lg:text-[12px] md:text-[9px] text-[7px] float-right md:mr-[35px] mr-[2px]"
        type="gradient"
        data-te-toggle="modal"
        data-te-target="#appointmentFormModal"
        data-te-ripple-init
        data-te-ripple-color="light"
        >APPLY</Button
      >
    </div>
  </div>
</template>

<script setup>
import Button from "../partials/Button.vue";
</script>

<style></style>
