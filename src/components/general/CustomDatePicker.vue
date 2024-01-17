<template>
  <div>
    <VDatePicker borderless expanded title-position="right" v-model="date" mode="date" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date())
</script>

<style lang="scss" scoped></style>
