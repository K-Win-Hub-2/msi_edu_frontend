<template>
  <div class="flex flex-col justify-between gap-12 xl:flex-row wow ssm:px-4 md:px-0">
    <div class="flex items-center justify-between gap-6 px-5 py-3 bg-gray-100 cus-rounded">
      <img :src="education" class="w-10 h-10" />
      <div class="flex flex-col items-center text-base font-semibold text-cus-secondary" id="studentCounter">
        <span class="text-lg font-bold">2600</span>
        <span class="text-sm">Students</span>
      </div>
    </div>

    <div class="flex items-center justify-between gap-6 px-5 py-3 bg-gray-100 cus-rounded">
      <img :src="university" class="w-10 h-10" />
      <div class="flex flex-col items-center text-base font-semibold text-cus-secondary" id="universityCounter">
        <span class="text-lg font-bold">200</span>
        <span class="text-sm">Universities</span>
      </div>
    </div>

    <div class="flex items-center justify-between gap-6 px-5 py-3 bg-gray-100 cus-rounded">
      <img :src="trophy" class="w-10 h-10" />
      <div class="flex flex-col items-center text-base font-semibold text-cus-secondary" id="awardCounter">
        <span class="text-lg font-bold">26</span>
        <span class="text-sm">Awards</span>
      </div>
    </div>

    <div class="flex items-center justify-between gap-6 px-5 py-3 bg-gray-100 cus-rounded">
      <img :src="mortarboard" class="w-10 h-10" />
      <div class="flex flex-col items-center text-base font-semibold text-cus-secondary" id="scholarshipCounter">
        <span class="text-lg font-bold">400</span>
        <div class="flex space-x-1 text-sm text-center xl:flex-col lg:flex-row md:flex-row sm:flex-col ssm:flex-col">
          <span>Scholarship</span>
          <span>Achievers</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import education from "@/assets/img/facts/education.png";
import mortarboard from "@/assets/img/facts/mortarboard.png";
import trophy from "@/assets/img/facts/trophy.png";
import university from "@/assets/img/facts/university.png";
import { counterUp } from "counterup2";
import { onMounted } from "vue";

onMounted(() => {
  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 4000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };

  const IO = new IntersectionObserver(callback, { threshold: 0 });

  const el = document.querySelector("#studentCounter");
  const el1 = document.querySelector("#universityCounter");
  const el2 = document.querySelector("#awardCounter");
  const el3 = document.querySelector("#scholarshipCounter");
  IO.observe(el);
  IO.observe(el1);
  IO.observe(el2);
  IO.observe(el3);
});
</script>

<style lang="scss" scoped></style>
