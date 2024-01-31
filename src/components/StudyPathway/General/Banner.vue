<script setup>
import { useRouter } from "vue-router";

const props = defineProps(["bannerImage"]);

const router = useRouter();
</script>

<template>
  <div class="relative">
    <img :src="bannerImage" class="object-cover w-full" alt="" />
  </div>
</template>

<style lang="scss" scoped></style>
