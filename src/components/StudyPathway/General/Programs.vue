<template>
  <h1 class="cus-heading text-cus-primary text-center capitalize mb-12">
    Programs
  </h1>
  <div class="flex w-[1300px] gap-3 flex-wrap justify-center">
    <!-- card start -->
    <div
      class="w-[381px] h-[107px] program-card border p-4 flex items-center gap-6"
    >
      <div
        class="w-[98px] h-[77px] flex justify-center bg-[#E3F7FF] rounded-md border-[1.5px] border-[#205887]"
      >
        <img
          src="../../../assets/img/countries/program/Engineering 1.png"
          alt=""
        />
      </div>
      <h1 class="text-md text-[#333] font-semibold">Engineering</h1>
    </div>
    <!-- card end -->
    <!-- card start -->
    <div
      class="w-[381px] h-[107px] program-card border p-4 flex items-center gap-4"
    >
      <div
        class="w-[98px] h-[77px] flex justify-center bg-[#E3F7FF] rounded-md border-[1.5px] border-[#205887]"
      >
        <img
          src="../../../assets/img/countries/program/Business 1.png"
          alt=""
        />
      </div>
      <h1 class="text-md text-[#333] font-semibold">business</h1>
    </div>
    <!-- card end -->
    <!-- card start -->
    <div
      class="w-[381px] h-[107px] program-card border p-4 flex items-center gap-4"
    >
      <div
        class="w-[98px] h-[77px] flex justify-center bg-[#E3F7FF] rounded-md border-[1.5px] border-[#205887]"
      >
        <img src="../../../assets/img/countries/program/Nursing 2.png" alt="" />
      </div>
      <h1 class="text-md text-[#333] font-semibold">Healthcare</h1>
    </div>
    <!-- card end -->
    <!-- card start -->
    <div
      class="w-[381px] h-[107px] program-card border p-4 flex items-center gap-4"
    >
      <div
        class="w-[98px] h-[77px] flex justify-center bg-[#E3F7FF] rounded-md border-[1.5px] border-[#205887]"
      >
        <img
          src="../../../assets/img/countries/program/ComputerScience 1.png"
          alt=""
        />
      </div>
      <h1 class="text-md text-[#333] font-semibold">Computer Science</h1>
    </div>
    <!-- card end -->
    <!-- card start -->
    <div
      class="w-[381px] h-[107px] program-card border p-4 flex items-center gap-4"
    >
      <div
        class="w-[98px] h-[77px] flex justify-center bg-[#E3F7FF] rounded-md border-[1.5px] border-[#205887]"
      >
        <img
          src="../../../assets/img/countries/program/Medicine 2.png"
          alt=""
        />
      </div>
      <h1 class="text-md text-[#333] font-semibold">Medicine</h1>
    </div>
    <!-- card end -->
  </div>

  <div class="flex w-[1300px] gap-3 flex-wrap justify-center mt-10">
    <!-- card start -->
    <div
      class="w-[381px] h-[107px] program-card border p-4 flex items-center gap-6"
    >
      <div
        class="w-[98px] h-[77px] flex justify-center bg-[#E3F7FF] rounded-md border-[1.5px] border-[#205887]"
      >
        <img
          src="../../../assets/img/countries/program/PoliticalScience 1.png"
          alt=""
        />
      </div>
      <h1 class="text-md text-[#333] font-semibold">Accountancy</h1>
    </div>
    <!-- card end -->
    <!-- card start -->
    <div
      class="w-[381px] h-[107px] program-card border p-4 flex items-center gap-4"
    >
      <div
        class="w-[98px] h-[77px] flex justify-center bg-[#E3F7FF] rounded-md border-[1.5px] border-[#205887]"
      >
        <img
          src="../../../assets/img/countries/program/Accounting 1.png"
          alt=""
        />
      </div>
      <h1 class="text-md text-[#333] font-semibold">Architecture</h1>
    </div>
    <!-- card end -->
    <!-- card start -->
    <div
      class="w-[381px] h-[107px] program-card border p-4 flex items-center gap-4"
    >
      <div
        class="w-[98px] h-[77px] flex justify-center bg-[#E3F7FF] rounded-md border-[1.5px] border-[#205887]"
      >
        <img
          src="../../../assets/img/countries/program/Education 1.png"
          alt=""
        />
      </div>
      <h1 class="text-md text-[#333] font-semibold">Education</h1>
    </div>
    <!-- card end -->
    <!-- card start -->
    <div
      class="w-[381px] h-[107px] program-card border p-4 flex items-center gap-4"
    >
      <div
        class="w-[98px] h-[77px] flex justify-center bg-[#E3F7FF] rounded-md border-[1.5px] border-[#205887]"
      >
        <img src="../../../assets/img/countries/program/Law 1.png" alt="" />
      </div>
      <h1 class="text-md text-[#333] font-semibold">Law 1</h1>
    </div>
    <!-- card end -->
    <!-- card start -->
    <div
      class="w-[381px] h-[107px] program-card border p-4 flex items-center gap-4"
    >
      <div
        class="w-[98px] h-[77px] flex justify-center bg-[#E3F7FF] rounded-md border-[1.5px] border-[#205887]"
      >
        <img
          src="../../../assets/img/countries/program/Psychology 2.png"
          alt=""
        />
      </div>
      <h1 class="text-md text-[#333] font-semibold">Artificial Intelligence</h1>
    </div>
    <!-- card end -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { programs } from "../../../mocks/programs";

const props = defineProps({
  country: {
    type: String,
    default: "singapore",
  },
  university: {
    type: String,
    default: "stamford",
  },
});

const currentPrograms = ref([]);

onMounted(() => {
  currentPrograms.value = programs.filter((program) => {
    if (program.country === props.country) {
      return true;
    }
  });
});
</script>

<style lang="scss" scoped></style>
