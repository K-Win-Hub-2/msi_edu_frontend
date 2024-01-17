<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
import Button from '@/components/partials/Button.vue'
</script>

<template>
  <div class="relative">
    <div class="grid lg:grid-cols-2 lg:gap-12 justify-items-center items-center">
      <div class="w-full max-w-[320px] grid grid-cols-1 gap-6 justify-between items-center -mt-[60px] mb-9 md:max-w-none sm:w-[300px] md:w-full md:grid-cols-2 lg:mb-0 lg:mt-0">
        <div class="flex flex-col gap-6 lg:-mb-[100px]">
          <div class="bg-[url('@/assets/img/test/1.jpg')] shadow h-[240px] w-full">
          </div>
          <div class="bg-[url('@/assets/img/test/1.jpg')] shadow h-[240px] w-full">
          </div>
        </div>
        <div class="flex flex-col gap-6 lg:-mb-[100px] lg:-mt-[100px]">
          <div class="bg-[url('@/assets/img/test/1.jpg')] shadow h-[240px] w-full">
          </div>
          <div class="bg-[url('@/assets/img/test/1.jpg')] shadow h-[240px] w-full">
          </div>
        </div>
      </div>
      <div class="space-y-6 text-white pb-12 lg:pb-0">
        <h1 class="cus-heading mb-8">
          Upcoming Events
        </h1>
        <h2 class="cus-subheading capitalize">
          <span class="uppercase">sim</span> global education seminar
        </h2>
        <p class="cus-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo numquam id, eaque necessitatibus
          consequatur
          molestiae ratione rem temporibus aspernatur impedit, ipsa soluta laudantium? Perferendis quidem nostrum animi
          atque!
          Beatae!</p>
        <div class="w-full">
          <Button type="outline">
            <span>See more</span>
            <ChevronRightIcon class="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>