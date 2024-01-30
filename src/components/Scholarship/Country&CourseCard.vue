<template>
  <div
    class="lg:min-w-[346px] md:min-w-[350px] ssm:w-[300px] mx-[12px] relative"
  >
    <div class="">
      <div
        class="md:w-[100px] md:h-[100px] ssm:w-[80px] ssm:h-[80px] absolute hover:border bg-white bottom-[54px] lg:right-[128px] right-[85px] ssm:right-[120px] md:right-[111px] rounded-full border border-slate-400 overflow-hidden"
      >
        <img
          class="overflow-hidden w-full h-full object-cover p-4"
          :src="props.course.image"
          alt=""
        />
      </div>
    </div>
    <div class="card rounded-xl px-[9px] py-6 mt-[95px] hover:bg-[#D6ECFF]">
      <p class="text-center ssm:text-[14px] md:text-[16px]">
        {{ props.course.name }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["course"]);
</script>

<style lang="scss" scoped></style>
