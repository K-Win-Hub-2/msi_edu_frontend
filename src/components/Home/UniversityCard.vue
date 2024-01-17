<script setup>
defineProps(["image"]);
</script>

<template>
  <div class="flex justify-center my-auto w-full">
    <div
      class="block max-w-[15rem] lg:max-w-sm cus-standout overflow-hidden h-full"
    >
      <img :src="image" class="mx-auto object-contain select-none" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
