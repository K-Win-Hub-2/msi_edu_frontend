<template>
  <div class="flex justify-center flex-wrap gap-6">
    <template v-for="university in currentUniversities">
      <UniversityCard class="w-[30%]" :university="university" />
    </template>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { universities } from "../../../mocks/universities";
import UniversityCard from "./UniversityCard.vue";
import axios from "axios";

const props = defineProps({
  country: {
    type: String,
    default: "singapore",
  },
});

const currentUniversities = ref([]);

onMounted(() => {
  currentUniversities.value = universities.filter(
    (university) => university.country === props.country
  );
  fetchData();
  console.log("hi");
});
</script>

<style lang="scss" scoped></style>
