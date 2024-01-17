<script setup>
import { useRouter, useRoute } from 'vue-router'
import Button from "../partials/Button.vue";

defineProps(["data"]);

const router = useRouter()

const goToScholarshipPage = () => {
  router.push({name: "scholarship"})
}

</script>

<template>
  <div class="flex justify-center my-12">
    <div class="flex justify-between items-end gap-10">
      <div class="flex gap-6">
        <div class="shrink-0 relative">
          <img
            :src="data.image"
            class="relative h-[280px] w-[300px] z-10 select-none rounded-[50%] object-cover"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-between">
          <div>
            <h3 class="text-2xl text-cus-primary capitalize font-bold mb-3 text-shadow-sm cus-shadow-color">
              {{ data.title }}
            </h3>
            <div class="text-cus-primary capitalize text-shadow-sm cus-shadow-color mb-3">
              <h3 class="text-2xl  mb-1">
              {{ data.student.name }} 
            </h3>
           
            </div>
            <!-- <div class="relative mb-3 cus-rounded">
              <p class="leading-7 text-justify text-sm text-shadow-sm cus-shadow-color">
                {{ data.content }}
              </p>
            </div> -->
          
            <h4 class="text-lg text-cus-primary capitalize text-shadow-sm cus-shadow-color first-letter:">{{ data.student.degree }}</h4>
            <h4 class="text-lg text-shadow-sm cus-shadow-color mt-2">{{ data.student.university }}</h4>
            <h4 class="text-lg text-shadow-sm cus-shadow-color mt-2">{{ data.student.country }}</h4>
          </div>
          <div class="flex justify-end">
            <Button class="px-6" type="gradient" @click="goToScholarshipPage">See More</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
