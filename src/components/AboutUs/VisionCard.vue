<template>
  <div
    class="lg:w-[700px] md:w-[600px] ssm:w-[280px] lg:h-[200px] md:ml-[20px] ssm:ml-[180px] lg:-ml-[80px] cus-glass-card p-3 flex items-center shadow-xl !bg-opacity-80 backdrop-blur"
  >
    <div class="space-y-6">
      <h3
        class="md:text-4xl ssm:text-md text-cus-secondary px-5 capitalize text font-bold text-shadow-sm cus-shadow-color"
      >
        {{ props.vision.title }}
      </h3>
      <p class="px-6 md:text-xl">{{ props.vision.description }}</p>
      <p class="px-6 md:text-xl">{{ props.vision.content }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["vision", "detail"]);
</script>

<style lang="scss" scoped></style>
