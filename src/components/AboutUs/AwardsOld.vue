<template>
  <div class="container py-24">
    <div class="flex flex-col justify-between xl:flex-row gap-12">
      <div class="flex flex-col justify-center items-center">
        <img :src="education" class="w-20 h-20 mb-6" />
        <div class="flex flex-col items-center text-4xl font-bold">
          <span class="">2600</span>
          <span class="">Students</span>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center">
        <img :src="university" class="w-20 h-20 mb-6" />
        <div class="flex flex-col items-center text-4xl font-bold">
          <span class="">300</span>
          <span class="">Universities</span>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center">
        <img :src="trophy" class="w-20 h-20 mb-6" />
        <div class="flex flex-col items-center text-4xl font-bold">
          <span class="">30</span>
          <span class="">Awards</span>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center">
        <img :src="mortarboard" class="w-20 h-20 mb-6" />
        <div class="flex flex-col items-center text-4xl font-bold">
          <span class="">1500</span>
          <span class="">Scholarship</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import education from '@/assets/img/AboutUs/Awards/education.png'
import mortarboard from '@/assets/img/AboutUs/Awards/mortarboard.png'
import trophy from '@/assets/img/AboutUs/Awards/trophy.png'
import university from '@/assets/img/AboutUs/Awards/university.png'

</script>

<style lang="scss" scoped></style>