<template>
  <button
    class="p-1 transition cus-rounded"
    :class="{
      'bg-white [&>div>*]:text-cus-primary border border-cus-primary':
        type === 'outline',
      'bg-cus-primary border border-secondary-300 text-white hover:bg-white hover:text-cus-primary hover:border-cus-primary':
        type === 'primary',
      'bg-cus-secondary border border-secondary-300 text-white':
        type === 'secondary',
      'bg-white border text-cus-primary border-secondary-300 hover:bg-cus-primary hover:text-white':
        type === 'default',
      'bg-transparent border text-white border-secondary-300':
        type === 'outline-white',
      'bg-gradient-to-r from-cus-primary to-cus-secondary text-white transition':
      type === 'gradient'

    }"
  >
    <div
      class="font-semibold capitalize"
    >
      <!-- <slot name="icon"></slot> -->
      <span>
        <slot name="buttonText"> </slot>
      </span>
      <slot></slot>
    </div>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "default",
  },
});
</script>

<style lang="scss" scoped></style>
