<template>
  <div class="w-full">
    <div class="h-[500px] bg-[#D9D9D9] mt-24"></div>
    <SectionOne />
    <!-- carousel start -->
    <CarouselSch />
    <!-- carousel end -->

    <!-- achiever -->
    <SectionTwo />
    <!-- achiever end -->

    <!-- 50% SCHOLARSHIP Section start -->
    <SectionThree />
    <!-- 50% SCHOLARSHIP Section end -->

    <!-- 25%,50% SCHOLARSHIP Section start -->
    <SectionFour />
    <!-- 25%,50% SCHOLARSHIP Section end -->

    <!-- 25%,80% SCHOLARSHIP Section start -->
    <SectionFive />
    <!-- 25%,80% SCHOLARSHIP Section end -->
    <!-- 30%,50% SCHOLARSHIP Section start -->
    <SectionSix />
    <!-- 30%,50% SCHOLARSHIP  Section end -->
    <!-- Study Grant 1500 1400 start -->
    <SectionSeven />
    <!-- 3Study Grant 1500 1400  end -->
    <!-- Study Grant 2000 5000  start -->
    <SectionEight />
    <!-- 3Study Grant 2000 5000  end -->
    <!-- cny 4500-9000  start -->
    <SectionNine />
    <!-- cny 4500-9000  end -->
  </div>
</template>

<script setup>
import CarouselSch from "../components/Scholarship/CarouselSch.vue";
import SectionOne from "../components/Scholarship/SectionOne.vue";
import SectionTwo from "../components/Scholarship/SectionTwo.vue";
import SectionThree from "../components/Scholarship/SectionThree.vue";
import SectionFour from "../components/Scholarship/SectionFour.vue";
import SectionFive from "../components/Scholarship/SectionFive.vue";
import SectionSix from "../components/Scholarship/SectionSix.vue";
import SectionSeven from "../components/Scholarship/SectionSeven.vue";
import SectionEight from "../components/Scholarship/SectionEight.vue";
import SectionNine from "../components/Scholarship/SectionNine.vue";
</script>

<style>
.card {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.btn-apply {
  background: var(
    --BUTTON-COLOR,
    linear-gradient(101deg, #fcf85f 4.12%, rgba(255, 28, 67, 0.33) 119.56%)
  );
}
.card-achiever {
  border-radius: 27.468px;
  background: #fff;
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.12);
}
.card-pp {
  box-shadow: 0px 2px 14px 0px #00000040;
}
</style>
