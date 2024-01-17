<script setup>
defineProps(["image", "content", "rating", "user"]);
</script>

<template>
  <div class="flex justify-center my-12  ">
    <div class="max-w-[800px] flex justify-between items-center gap-10">
      <div>
        <div class="p-5 text-start border-2 border-cus-primary relative mb-12 cus-rounded">
          <img src="@/assets/img/quoteDown.png" class="absolute w-12 h-8 right-4 bg-gray-100 -bottom-4 select-none" alt="">
          <img src="@/assets/img/quoteUp.png" class="absolute w-12 h-8 left-4 -top-4 bg-gray-100 -bottom-4 select-none" alt="">
          <h5 class="leading-7 text-sm">
            {{ content }}
          </h5>
        </div>
        <div class="text-center">
          <h3 class="text-xl text-cus-primary capitalize font-bold mb-3">
            {{ user.name }}
          </h3>
          <p class="text-md text-cus-primary capitalize">
            {{ user.university }}
          </p>
          <p class="text-md text-cus-primary capitalize">{{ user.country }}</p>
          <p class="text-md text-cus-primary capitalize">{{ user.degree }}</p>
          <div>
            <template v-for="each in rating">
              <i class="fa-solid fa-star text-cus-primary-light text-lg"></i>
            </template>
          </div>
        </div>
      </div>
      <div class="shrink-0 relative">
        <img :src="image" class="relative h-[430px] w-[280px] z-10 select-none cus-standout" alt="">
        <!-- <img
          src="@/assets/img/waves/photoBack.png"
          class="absolute w-[300px] h-[300px] left-10 -bottom-10 z-[5] select-none"
        /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
