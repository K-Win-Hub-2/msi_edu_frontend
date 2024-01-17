<template>
  <!-- <span
    class="bg-white group px-4 border-2 border-b-cus-primary hover:cursor-pointer hover:bg-cus-primary hover:border-cus-primary transition-all w-[40px] h-[50px] flex items-center justify-center">
    <a :href="url" target="_blank">
      <template v-if="type === 'facebook'">
        <i class="fa-brands fa-facebook-f text-[20px] group-hover:text-white"></i>
      </template>
      <template v-if="type === 'telegram'">
        <i class="fa-brands fa-telegram text-[20px] group-hover:text-white"></i>
      </template>
      <template v-if="type === 'viber'">
        <i class="fa-brands fa-viber text-[20px] group-hover:text-white"></i>
      </template>
      <template v-if="type === 'instagram'">
        <i class="fa-brands fa-instagram text-[20px] group-hover:text-white"></i>
      </template>
    </a>
  </span> -->
  <span class="bg-white p-3 rounded-circle">
    <a :href="url" target="_blank">
      <template v-if="type === 'facebook'">
        <i
          class="fa-brands fa-facebook-f text-[20px] group-hover:text-white"
        ></i>
      </template>
      <template v-if="type === 'telegram'">
        <i class="fa-brands fa-telegram text-[20px] group-hover:text-white"></i>
      </template>
      <template v-if="type === 'viber'">
        <i class="fa-brands fa-viber text-[20px] group-hover:text-white"></i>
      </template>
      <template v-if="type === 'instagram'">
        <i
          class="fa-brands fa-instagram text-[20px] group-hover:text-white"
        ></i>
      </template>
    </a>
  </span>
</template>

<script setup>
defineProps({
  type: {
    default: "viber",
  },
  url: {
    required: true,
  },
});
</script>
