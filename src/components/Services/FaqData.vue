<template>
  <div class="">
    <div
      @click="showDes = !showDes"
      class="px-5 rounded-md text-[#000] py-3 bg-gray-100 flex justify-between items-center"
    >
      <div class="">{{ props.faq.question }}</div>
      <div class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
          :class="[showDes ? 'rotate-180' : 'rotate-0']"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
    <div class="px-5 py-3 mt-2 border-2 rounded-lg" v-if="showDes">
      <div class="text-[15px]">
        {{ props.faq.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showDes = ref(false);
const props = defineProps(["faq"]);
</script>
