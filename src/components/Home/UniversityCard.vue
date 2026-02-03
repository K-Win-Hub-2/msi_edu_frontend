<script setup>
defineProps(["image"]);
</script>

<template>
  <div class="flex justify-center w-full my-auto">
    <div class="block cus-standout overflow-hidden ssm:h-[40px] md:h-full">
      <img
        src="C:\Users\User\Downloads\test1.png"
        class="mx-auto object-cover select-none ssm:!w-[100px] md:!w-[300px] md:h-32 ssm:h-[50px] lg:h-[100px]"
        alt=""
      />
    </div>
  </div>
</template>
<!-- :src="image" -->
<style lang="scss" scoped></style>
