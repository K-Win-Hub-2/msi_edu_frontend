<script setup>
defineProps(["image", "content", "showContent"]);
</script>

<template>
  <div class="flex justify-center w-full my-auto overflow-hidden">
    <div class="block min-w-[200px] md:max-w-[100px] lg:max-w-[300px]">
      <div class="">
        <img :src="image" class="object-contain h-[300px] mx-auto" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
