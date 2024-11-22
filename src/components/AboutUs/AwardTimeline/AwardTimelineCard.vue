<script setup>
defineProps([
  'image',
  'content',
  'showContent',
  'reverse',
  'description',
  'year',
  'breakWords',
]);
</script>

<template>
  <div class="flex justify-center my-auto overflow-hidden w-full">
    <div
      class="flex flex-col min-w-[200px] select-none"
      :class="{ 'flex-col-reverse': reverse }"
    >
      <div class="relative h-[250px]">
        <img
          :src="image"
          class="relative object-cover h-[200px] mx-auto z-10"
          alt=""
        />
        <template v-if="!reverse">
          <div
            class="bg-[url(../../assets/img/AboutUs/Timeline/upperCircle.png)] bg-[length:100%_100%] absolute bottom-0 w-[200px] h-[200px] left-1/2 translate-x-[-47%] rounded-full"
          ></div>
        </template>

        <template v-if="reverse">
          <div
            class="bg-[url(../../assets/img/AboutUs/Timeline/bottomCircle.png)] bg-[length:100%_100%] absolute bottom-0 w-[200px] h-[200px] left-1/2 translate-x-[-47%] rounded-full"
          ></div>
        </template>
      </div>
      <!-- arrow -->
      <div
        class="text-shadow bg-[url(../../assets/img/AboutUs/Timeline/bigArrow.png)] flex items-center justify-center text-white font-bold text-xl h-[57px] mb-1 w-full bg-[length:100%_100%]"
      >
        {{ year }}
      </div>
      <template v-if="!reverse">
        <div
          class="bg-[url(../../assets/img/AboutUs/Timeline/bottomArrow.png)] h-[57px] w-full bg-[length:100%_100%]"
        ></div>
      </template>
      <template v-if="reverse">
        <div
          class="bg-[url(../../assets/img/AboutUs/Timeline/upperArrow.png)] h-[57px] w-full mb-1 bg-[length:100%_100%]"
        ></div>
      </template>
      <!-- end arrow -->
      <div class="h-[192px]">
        <div
          class="border-b-2 border-cus-primary mb-3 text-cus-primary text-shadow-sm cus-shadow-color"
        >
          <!-- <div class="text-3xl font-bold">{{  year }}</div> -->
          <div class="text-md">{{ content }}</div>
        </div>
        <p
          :class="{
            'text-shadow-sm': true,
            'cus-shadow-color': true,
            'w-40': breakWords,
            'break-words': breakWords,
          }"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
