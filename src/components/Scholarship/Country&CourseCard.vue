<template>
  <div class="lg:min-w-[346px] mx-[12px] relative">
    <div class="">
      <div
        class="w-[100px] h-[100px] absolute hover:border bg-white bottom-[54px] lg:right-[128px] right-[85px] sm:right-[105px] md:right-[111px] rounded-full border border-slate-400 overflow-hidden"
      >
        <img
          class="overflow-hidden w-full h-full object-cover p-4"
          :src="props.course.image"
          alt=""
        />
      </div>
    </div>
    <div class="card rounded-xl px-[9px] py-6 mt-[95px] hover:bg-[#D6ECFF]">
      <p class="text-center">{{ props.course.name }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["course"]);
</script>

<style lang="scss" scoped></style>
