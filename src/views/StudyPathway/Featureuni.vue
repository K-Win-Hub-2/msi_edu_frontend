<script setup>
import { ref } from "vue";
import Button from "../../components/partials/Button.vue";
const subIntro = ref();
const props = defineProps(["uni"]);
subIntro.value = props.uni.introduction.slice(0, 10);
</script>
<template>
  <div class="w-[315px] h-[337px] px-3 py-2 rounded-lg shadow-lg bg-white">
    <img class="rounded-lg h-[155px] w-full" :src="props.uni.imageURL" alt="" />
    <h1 class="text-[16px] font-semibold mt-3">
      {{ props.uni.university_name }}
    </h1>
    <p class="mt-2" v-if="subIntro">{{ subIntro }}...</p>
    <router-link
      :to="{
        name: 'universities.detail',
        params: { id: props.uni.id },
      }"
      class="flex justify-center mt-3"
    >
      <Button
        class="px-[26px] py-[6px] text-[16px] float-right"
        type="gradient"
        data-te-toggle="modal"
        data-te-target="#appointmentFormModal"
        data-te-ripple-init
        data-te-ripple-color="light"
        >See More</Button
      >
    </router-link>
  </div>
</template>
