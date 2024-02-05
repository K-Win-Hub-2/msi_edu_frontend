<script setup>
defineProps(["image"]);
</script>

<template>
  <div class="flex justify-center my-auto w-full">
    <div
      class="block max-w-[13rem] lg:max-w-sm cus-standout overflow-hidden ssm:h-[40px] md:h-full"
    >
      <img
        :src="image"
        class="mx-auto object-contain select-none md:h-32 ssm:h-[50px] lg:h-auto"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
