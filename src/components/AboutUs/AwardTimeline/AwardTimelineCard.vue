<script setup>
defineProps([
  "image",
  "content",
  "showContent",
  "reverse",
  "description",
  "year",
  "breakWords",
]);
</script>

<template>
  <div class="flex justify-center w-full my-auto overflow-hidden">
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
            class="bg-[url(../../assets/img/AboutUs/Timeline/upperCircle.png)] bg-[length:100%_100%] absolute bottom-0 w-[260px] h-[260px] left-1/2 translate-x-[-50%] translate-y-[18%] rounded-full mb-2"
          ></div>
        </template>

        <template v-if="reverse">
          <div
            class="bg-[url(../../assets/img/AboutUs/Timeline/bottomCircle.png)] bg-[length:100%_100%] absolute bottom-0 w-[260px] h-[260px] left-1/2 translate-x-[-50%] translate-y-[10%] rounded-full mt-2"
          ></div>
        </template>
      </div>
      <!-- arrow -->
      <div
        class="text-shadow bg-[url(../../assets/img/AboutUs/Timeline/bigArrow1.png)] flex items-center justify-center text-white font-bold text-xl h-[57px] mb-1 w-full bg-[length:100%_100%]"
      >
        {{ year }}
      </div>
      <template v-if="!reverse">
        <div
          class="bg-[url(../../assets/img/AboutUs/Timeline/bottomArrow1.png)] h-[57px] w-full bg-[length:100%_100%]"
        ></div>
      </template>
      <template v-if="reverse">
        <div
          class="bg-[url(../../assets/img/AboutUs/Timeline/upperArrow1.png)] h-[57px] w-full mb-1 bg-[length:100%_100%]"
        ></div>
      </template>
      <!-- end arrow -->
      <div class="h-[192px]">
        <div
          class="mb-3 border-b-2 border-cus-primary text-cus-primary text-shadow-sm cus-shadow-color"
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
