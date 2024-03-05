<script setup>
const props = defineProps(["country"]);
console.log(props.country.country_program, " hehe");
</script>
<template>
  <div class="">
    <h1 class="cus-heading mt-36 text-cus-primary text-center capitalize mb-12">
      Programs
    </h1>
    <div class="flex justify-center">
      <div class="">
        <div
          class="flex lg:w-[1300px] md:w-[800px] mx-auto gap-3 flex-wrap justify-center"
        >
          <!-- card start -->
          <template
            v-for="(program, index) in props.country.country_program"
            :key="index"
          >
            <div
              class="md:w-[381px] min-w-[320px] md:h-[107px] program-card border p-4 flex items-center gap-6"
            >
              <div
                class="min-w-[98px] h-[77px] flex justify-center bg-[#E3F7FF] rounded-md border-[1.5px] p-2 border-[#205887]"
              >
                <img :src="program.imageURL" alt="" />
              </div>
              <h1
                class="md:text-[22px] ssm:text-[20px] text-[#333] font-semibold"
              >
                {{ program.name }}
              </h1>
            </div>
          </template>
          <!-- card end -->
        </div>
      </div>
    </div>
  </div>
</template>
