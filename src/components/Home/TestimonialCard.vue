<script setup>
import Button from "../partials/Button.vue";

// defineProps(["image", "content", "rating", "user"]);
const props = defineProps(["testimonials"]);
</script>

<template>
  <div class="mt-11" v-for="test in props.testimonials" :key="test.id">
    <div class="flex items-center gap-10">
      <div class="flex ssm:flex-col md:flex-row gap-8">
        <div class="shrink-0 relative">
          <img
            class="relative md:h-[430px] md:w-[280px] ssm:h-[250px] ssm:w-full z-10 ssm:px-4 md:px-0 select-none cus-standout object-cover"
            alt=""
          />
        </div>
        <div class="flex flex-col ssm:mx-10 justify-between">
          <div>
            <h1
              class="text-cus-secondary font-bold text-3xl mb-3 text-shadow-sm cus-shadow-color"
            ></h1>
            <h3
              class="text-2xl text-cus-primary capitalize font-bold mb-6 text-shadow-sm cus-shadow-color"
            ></h3>
            <div class="relative mb-12 cus-rounded">
              <p
                class="leading-7 text-justify text-sm text-shadow-sm cus-shadow-color"
              ></p>
            </div>
            <div class="relative mb-12 cus-rounded">
              <p
                class="leading-7 text-justify text-sm text-shadow-sm cus-shadow-color font-semibold"
              ></p>
              <p
                class="leading-7 text-justify text-sm text-shadow-sm cus-shadow-color font-semibold"
              ></p>
              <p
                class="leading-7 text-justify text-sm text-shadow-sm cus-shadow-color font-semibold"
              ></p>
            </div>
          </div>
          <!-- <div class="flex justify-end">
            <Button class="px-6" type="gradient">See More</Button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
