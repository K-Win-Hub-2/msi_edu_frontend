<script setup>
import FilterCard from '@/components/Home/FindUniversity/FilterCard.vue';
import UniversitiesHolder from '@/components/Home/FindUniversity/UniversitiesHolder.vue';
</script>

<template>
  <div class="flex flex-col gap-12 justify-between items-center">
    <FilterCard></FilterCard>
    <div class="w-full">
      <UniversitiesHolder></UniversitiesHolder>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>