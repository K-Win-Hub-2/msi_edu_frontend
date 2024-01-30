<template>
  <div class="w-full">
    <div class="h-auto">
      <div class="overflow-hidden relative">
        <video autoplay loop muted plays-inline class="right-0 w-full bottom-0">
          <source src="@/assets/videos/banner.mp4" type="video/mp4" />
        </video>

        <div class="absolute bottom-2 left-11">
          <a
            href="https://youtu.be/P3XLi-j5zac?si=5QgI0TbLXNAs63SW"
            target="_blank"
          >
            <Button type="gradient" class="md:p-3 ssm:px-3 md:px-8"
              >Get Free Counselling</Button
            >
          </a>
        </div>
      </div>
    </div>
    <SectionOne />
    <!-- carousel start -->
    <CarouselSch />
    <!-- carousel end -->

    <!-- achiever -->
    <!-- <SectionTwo /> -->
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
    <!-- 30%,50% SCHOLARSHIP Section start -->
    <MBAScholarShip />
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
import Button from "../components/partials/Button.vue";
import MBAScholarShip from "../components/Scholarship/MBAScholarShip.vue";
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
