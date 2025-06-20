<template>
  <div
    class="lg:max-w-[342px] bg-white hover:bg-[#d1e8ff] min-w-[300px] border lg:min-w-[342px] max-w-[280px] card-pp shadow-md rounded-lg py-[22px] px-[30px]"
  >
    <h1
      class="uppercase text-[#FE005F] mb-[10px] text-[14.7px] text-center font-[700]"
    >
      {{ props.data ? props.data.student_name : "" }}
    </h1>
    <h1 class="text-[#205887] text-[12px] text-center font-[700] uppercase">
      {{ props.data ? props.data.course_name : "" }}
    </h1>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
console.log(props.data);
</script>

<style lang="scss" scoped></style>
