<template>
  <div class="inline-block">
    <router-link
      :to="link"
      class="text-center flex px-5 py-3 border transition-all duration-75 shadow-md"
      :class="{
        'bg-cyan-500 text-white hover:bg-white hover:text-cus-primary':
          type === 'cyan',
        'bg-white text-cus-primary hover:bg-cyan-500 hover:text-white':
          type === 'white',
        'bg-cus-primary text-white border-white border hover:border-cus-primary hover:bg-white hover:text-cus-primary cus-standout':
          type === 'primary',
      }"
    >
      <slot></slot>
    </router-link>
  </div>
</template>
<script setup>
defineProps({
  type: {
    type: String,
    default: "default",
  },
  link: {
    required: false,
  },
});
</script>
