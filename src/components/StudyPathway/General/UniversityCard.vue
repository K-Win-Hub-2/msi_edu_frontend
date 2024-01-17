<script setup>
import { viewImage } from "../../../utils";

const props = defineProps(["university", "detail"]);
// console.log(photo+'656aba56f289d_vasily-koloda-8CqDvPuo_kI-unsplash.jpg')
</script>

<template>
  <router-link
    :to="{ name: 'universities.detail', params: { id: university.id } }"
  >
    <div class="flex justify-center my-auto h-full">
      <div
        class="block min-w-[200px] max-w-[15rem] lg:max-w-sm shadow-lg border-2 my-3 overflow-hidden bg-white cus-standout"
      >
        <div class="">
          <img
            :src="viewImage({ photo: university.university_photo })"
            class="h-[200px] mx-auto p-3 object-contain"
            alt=""
          />
        </div>
        <div class="p-4">
          <h5
            class="capitalize mb-4 text-md font-semibold leading-7 break-words"
          >
            {{ university.university_name }}
          </h5>
          <p class="mb-3 h-[100px] overflow-hidden">
            {{ university.introduction }}
          </p>
          <div class="flex justify-center">
            <a
              target="_blank"
              :href="university.url"
              class="inline-block border p-3 hover:bg-cus-primary hover:border-cus-primary rounded-lg hover:text-white transition"
              >Visit</a
            >
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped></style>
