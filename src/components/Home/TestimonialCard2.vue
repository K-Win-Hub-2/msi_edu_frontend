<template>
  <div>
    <div
      class="bg-white border cus-standout overflow-hidden"
    >
      <img
        :src="props.info.user.university.campusImage"
        alt=""
        class="border-b h-[300px] w-full"
      />

      <div class="p-3 relative">
        <img
          :src="props.info.image"
          alt=""
          class="border rounded-full w-[100px] h-[100px] select-none object-cover absolute left-2 -top-1/2 translate-y-1/2"
        />
        <h3 class="text-xl mt-12 mb-3 font-semibold capitalize truncate">
          {{ props.info.user.name }}
        </h3>
        <p class="text-md truncate-two mb-3" v-html="props.info.content"></p>
        <div class="flex justify-center">
          <div class="p-3 inline-block border cus-rounded hover:bg-cus-primary transition hover:text-white cursor-pointer">Know More</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["info"]);
</script>

<style lang="scss" scoped></style>
