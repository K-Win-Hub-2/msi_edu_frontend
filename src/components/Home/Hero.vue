<template>
  <div class="relative lg:h-[800px]">
    <BgSlider class="relative z-10" />
    <div
      class="absolute left-1/2 -translate-x-1/2 bottom-2 max-w-[1000px] z-20"
    >
      <UniversitiesSlider />
    </div>
  </div>
</template>

<script setup>
import BgSlider from "./BgSlider.vue";
import UniversitiesSlider from "./UniversitiesSlider.vue";
</script>

<style scoped></style>
