<script setup>
import Button from "../partials/Button.vue";

defineProps(["image", "content", "rating", "user"]);
</script>

<template>
  <div class="mt-11">
    <div class="flex justify-between items-center gap-10">
      <div class="flex gap-6">
        <div class="shrink-0 relative">
          <img
            :src="image"
            class="relative h-[430px] w-[280px] z-10 select-none cus-standout object-cover"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-between">
          <div>
            <h1
              class="text-cus-secondary font-bold text-3xl mb-3 text-shadow-sm cus-shadow-color"
            >
              {{ user.title }}
            </h1>
            <h3
              class="text-2xl text-cus-primary capitalize font-bold mb-6 text-shadow-sm cus-shadow-color"
            >
              {{ user.name }}
            </h3>
            <div class="relative mb-12 cus-rounded">
              <p
                class="leading-7 text-justify text-sm text-shadow-sm cus-shadow-color"
              >
                {{ content }}
              </p>
            </div>
            <div class="relative mb-12 cus-rounded">
              <p
                class="leading-7 text-justify text-sm text-shadow-sm cus-shadow-color font-semibold"
              >
                {{ user.university }}
              </p>
              <p
                class="leading-7 text-justify text-sm text-shadow-sm cus-shadow-color font-semibold"
              >
                {{ user.country }}
              </p>
              <p
                class="leading-7 text-justify text-sm text-shadow-sm cus-shadow-color font-semibold"
              >
                {{ user.degree }}
              </p>
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
