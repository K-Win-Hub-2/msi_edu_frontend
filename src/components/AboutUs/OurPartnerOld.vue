<template>
  <div class="relative">
    <div class="relative">
      <div
        class="relative bg-gray-100 xl:bg-[url('@/assets/img/AboutUs/partner.jpg')] bg-cover xl:bg-[length:100%_100%] bg-no-repeat -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
        <div class="p-3 xl:p-[8rem] pb-[200px] xl:pb-[300px]">
          <div class="p-6 rounded-lg space-y-6 w-full xl:w-2/3">
            <div class="relative">
              <div class="cus-bg absolute lg:w-[250%] lg:h-[250%] -left-[100%] -top-[70%]"></div>
              <div class="relative z-10">
                <h1 class="cus-heading text-cus-secondary mb-12">OUR PARTNER UNIVERSITIES</h1>
                <p class="cus-paragraph text-justify w-full xl:w-2/3">
                  We work with students to identify their goals and preferences and provide personalized guidance that
                  matches
                  their individual needs. Our approach is to provide comprehensive and honest advice to help students
                  make
                  the
                  best decisions for their academic careers.
                  Coventry
                </p>
                <p class="cus-paragraph text-justify w-full xl:w-2/3">
                  At Myanmar Search International, we pride ourselves on our commitment to excellence and our passion
                  for
                  helping students achieve their dreams. We strive to make the process of studying abroad as easy and
                  stress-free as possible, allowing students to focus on their studies and enjoy their time overseas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white bg-opacity-70 z-20">
      <div class="max-w-[300px] md:max-w-[700px] xl:max-w-[1150px] py-6 px-16">
        <UniversitiesSlider />
      </div>
    </div>
  </div>
</template>

<script setup>
import UniversitiesSlider from '@/components/AboutUs/UniversitiesSlider.vue';

</script>

<style scoped>
@media screen and (min-width: 1280px) {
  .cus-bg {
    background-image: radial-gradient(closest-corner, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0) 50%);
  }
}
</style>