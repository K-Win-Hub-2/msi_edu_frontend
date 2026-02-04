<script setup>
defineProps(["image", "content", "showContent"]);
</script>

<template>
  <div class="flex justify-center w-full px-2 my-auto overflow-hidden sm:px-4">
    <div
      class="block min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:max-w-[300px]"
    >
      <div>
        <img
          :src="image"
          class="object-contain h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] mx-auto"
          alt=""
        />
      </div>

      <!-- Optional content below image -->
      <div v-if="showContent" class="px-1 mt-2 text-center">
        <p class="text-xs sm:text-sm md:text-base lg:text-lg text-cus-primary">
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>
