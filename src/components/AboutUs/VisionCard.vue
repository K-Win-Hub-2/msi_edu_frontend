<template>
  <div class="w-[700px] h-[200px] -ml-[80px] cus-glass-card p-3 flex items-center shadow-xl !bg-opacity-80 backdrop-blur">
    <div class="space-y-6">
        <h3 class="text-4xl text-cus-secondary px-5 capitalize text font-bold text-shadow-sm cus-shadow-color">{{ props.vision.title }}</h3>
    <p class="px-6 text-xl">{{ props.vision.description }}</p>
     <p class="px-6 text-xl">{{ props.vision.content}}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["vision", "detail"]);
</script>

<style lang="scss" scoped></style>
