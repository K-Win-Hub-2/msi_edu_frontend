<template>
    <h1 class="cus-heading text-cus-primary text-center capitalize mb-12">
      Programs
    </h1>
    <div class="grid grid-cols-3 gap-3">
      <template v-for="program in currentPrograms">
        <div class="flex items-center gap-3 cus-standout border bg-white p-3">
          <img
            :src="program.image"
            class="w-[70px] h-[70px] border cus-rounded"
            alt=""
          />
          <p class="text-sm">{{ program.title }}</p>
        </div>
      </template>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { programs } from '../../../mocks/programs';

const props = defineProps({
  country: {
    type: String,
    default: "singapore",
  },
  university: {
    type: String,
    default: "stamford"
  }
});

const currentPrograms = ref([])

onMounted(() => {
    currentPrograms.value = programs.filter(program => {
        if(program.country === props.country) {
            return true
        }
    })
})
</script>

<style lang="scss" scoped></style>
