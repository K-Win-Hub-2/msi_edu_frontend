<script setup>
import { computed } from 'vue';

const props = defineProps(["country"]);

// 1. Prevents crash if key_facts is null/undefined
const myMain = computed(() => {
  if (!props.country?.key_facts) return [];
  return props.country.key_facts.split(",");
});

// 2. Helper to display a fallback string for empty values
const displayValue = (val) => val || "Information not available";
</script>

<template>
  <div v-if="props.country">
    <div class="grid lg:grid-cols-2 ssm:grid-cols-1 md:grid-cols-1 lg:gap-x-28">
      
      <div
        class="md:w-[536px] ssm:w-[300px] ssm:h-auto md:h-[500px] test-card overflow-hidden mb-4 
               rounded-xl shadow-2xl hover:shadow-2xl transition-shadow duration-300 bg-white"
      >
        <div
          class="flex items-center justify-center w-full h-[71px] text-white 
                 bg-gradient-to-r from-cus-primary to-cus-secondary shadow-md"
        >
          <h1 class="text-md font-[700] ssm:text-[24px] tracking-wide">
            Key facts to study in {{ props.country.name || 'this country' }}
          </h1>
        </div>

        <div class="flex flex-col justify-center gap-4 pt-2">
          <div class="py-1 px-7" v-for="item in [
            { label: 'English Proficiency Test', value: props.country.serial_key_facts?.language_spoken },
            { label: 'Degrees', value: props.country.serial_key_facts?.degrees },
            { label: 'Intakes', value: props.country.serial_key_facts?.intakes },
            { label: 'Visa', value: props.country.serial_key_facts?.visa },
            { label: 'Cost of study', value: props.country.serial_key_facts?.cost_of_study }
          ]" :key="item.label">
            <div class="flex items-center px-5 rounded-lg shadow-sm bg-slate-100">
              <div class="w-[50%] border-r-2 border-slate-400">
                <p class="py-4 text-[16px] font-semibold ml-5">{{ item.label }}</p>
              </div>
              <div class="w-[50%]">
                <p class="text-[16px] mx-2">{{ displayValue(item.value) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="md:w-[536px] ssm:w-[300px] ssm:h-auto md:h-[500px] test-card overflow-hidden 
               rounded-xl shadow-2xl hover:shadow-2xl transition-shadow duration-300 bg-white"
      >
        <div
          class="flex items-center justify-center w-full h-[71px] text-white 
                 bg-gradient-to-r from-cus-primary to-cus-secondary shadow-md"
        >
          <h1 class="text-md font-[700] ssm:text-[24px] tracking-wide">
            Main facts to study in {{ props.country.name || 'this country' }}
          </h1>
        </div>

        <div v-if="myMain.length > 0" class="pt-2 pb-4">
          <div v-for="(data, index) in myMain" :key="index" class="px-7">
            <div class="flex items-center px-1 pt-2 mb-1 rounded-lg shadow-sm bg-slate-100">
              <div class="w-[8%]">
                <img src="../../../assets/img/StudyPathway/Checkmark.png" alt="check" />
              </div>
              <div class="w-[92%]">
                <div v-if="data" v-html="data" class="m-4 text-gray-700 text-[18px] text-left"></div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="flex items-center justify-center h-full py-10 text-gray-400 italic">
          No main facts listed for this country.
        </div>
      </div>

    </div>
  </div>

  <div v-else class="flex justify-center py-20">
    <p class="text-xl text-gray-500 animate-pulse">Loading facts...</p>
  </div>
</template>