<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
import Button from '@/components/partials/Button.vue'
</script>

<template>
  <div class="">
    <div class="flex flex-col gap-6 items-center lg:hidden">
      <div class="bg-[url('@/assets/img/test/1.jpg')] w-full h-[300px] md:h-[400px]">
      </div>
      <div class="space-y-6 mt-0 md:-mt-[100px] bg-white p-6 max-w-[500px] shadow-lg border">
        <h1 class="cus-heading text-cus-primary">
          Student Testimonials
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo numquam id, eaque necessitatibus
          consequatur
          molestiae ratione rem temporibus aspernatur impedit, ipsa soluta laudantium? Perferendis quidem nostrum animi
          atque!
          Beatae!</p>
        <Button type="outline">
          <span>See more</span>
          <ChevronRightIcon class="w-5 h-5" />
        </Button>
      </div>
    </div>
    <div
      class="hidden lg:block lg:relative left-0 sm:-left-[200px] bg-[url('@/assets/img/test/1.jpg')] h-[500px] xl:min-w-[300px]">
      <div class="absolute right-0 sm:-right-[200px] bottom-0 space-y-6 bg-white p-6 sm:w-[500px] shadow-lg border">
        <h1 class="cus-heading text-cus-primary">
          Student Testimonials
        </h1>
        <p class="cus-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo numquam id, eaque necessitatibus
          consequatur
          molestiae ratione rem temporibus aspernatur impedit, ipsa soluta laudantium? Perferendis quidem nostrum animi
          atque!
          Beatae!</p>
        <Button type="outline">
          <span>See more</span>
          <ChevronRightIcon class="w-5 h-5" />
        </Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>