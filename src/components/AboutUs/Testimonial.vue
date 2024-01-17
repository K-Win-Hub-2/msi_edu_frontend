<template>
  <div class="container">
    <h1 class="text-5xl font-bold text-cus-secondary my-5 text-right">
      What Our Students Say
    </h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <SingleTestimonial />
      <SingleTestimonial />
      <SingleTestimonial />
      <SingleTestimonial />
    </div>
  </div>
</template>
<script setup>
import SingleTestimonial from "@/components/AboutUs/SingleTestimonial.vue";
</script>
