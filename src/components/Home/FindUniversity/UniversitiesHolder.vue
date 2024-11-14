<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 first-letter justify-items-center gap-12">
    <!-- <div class="bg-[url('@/assets/img/test/1.jpg')] h-[180px] w-[250px] md:w-full cus-standout"></div>
    <div class="bg-[url('@/assets/img/test/1.jpg')] h-[180px] w-[250px] md:w-full cus-standout"></div>
    <div class="bg-[url('@/assets/img/test/1.jpg')] h-[180px] w-[250px] md:w-full cus-standout"></div>
    <div class="bg-[url('@/assets/img/test/1.jpg')] h-[180px] w-[250px] md:w-full cus-standout"></div>
    <div class="bg-[url('@/assets/img/test/1.jpg')] h-[180px] w-[250px] md:w-full cus-standout"></div>
    <div class="bg-[url('@/assets/img/test/1.jpg')] h-[180px] w-[250px] md:w-full cus-standout"></div> -->
    <template v-for="(university,index) in featuredUniversities" :key="index">
      <a @mouseover="onMouseOver(index)" @mouseleave="onMouseLeave()" :href="university.url" target="_blank" class="block  bg-white w-full h-[150px] group relative cus-standout overflow-hidden">
        <img v-show="currentUniversity.index === index" class="w-full h-full" :src="university.campusImage" />
        <img v-show="currentUniversity.index !== index" class="w-full h-full object-contain p-3" :src="university.image" />
        <div class="flex items-center justify-center absolute top-0 left-0 group-hover:bg-gray-900 group-hover:bg-opacity-40 w-full h-full transition">
          <span class="opacity-0 group-hover:opacity-100 transition z-10 text-white text-center">{{ university.name }}</span>
        </div>
      </a>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { featuredUniversities } from '../../../mocks/universities';

const currentUniversity = ref({
  index: null,
})

const onMouseOver = (index) => {
  currentUniversity.value.index = index
}

const onMouseLeave = () => {
  currentUniversity.value.index = null
}
</script>

<style lang="scss" scoped></style>