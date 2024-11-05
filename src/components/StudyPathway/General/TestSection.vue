<script setup>


const props = defineProps(["country"]);
console.log("props", props.country.key_facts);
const myMain = props.country.key_facts.split(",");
</script>
<template>
  <div>
    <div class="">
      <div
        class="grid lg:grid-cols-2 ssm:grid-cols-1 md:grid-cols-1 lg:gap-x-28"
      >
        <div class="" v-if="props.country">
          <div
            class="md:w-[536px] ssm:w-[300px] ssm:h-auto md:h-[500px] test-card overflow-hidden mb-4"
          >
            <div
              class="flex justify-center items-center h-[71px] w-[100%] text-white bg-blue-500"
            >
              <h1 class="text-md font-[700] ssm:text-[18px]">
                Key facts to study in {{ props.country.name }}
              </h1>
            </div>
            <!-- loop -->
            <div class="px-7 pt-4 py-1">
              <div class="flex items-center bg-slate-100 rounded-lg px-5">
                <div class="w-[50%] border-r-2 border-slate-400">
                  <p class="py-3 text-[13px] font-semibold ml-5">
                    languages spoken
                  </p>
                </div>
                <div class="w-[50%]">
                  <p class="text-[13px] mx-2">
                    {{ props.country.serial_key_facts?.language_spoken }}
                  </p>
                </div>
              </div>
            </div>
            <div class="px-7 py-1">
              <div class="flex items-center bg-slate-100 rounded-lg px-5">
                <div class="w-[50%] border-r-2 border-slate-400">
                  <p class="py-3 text-[13px] font-semibold ml-5">
                    Cost of study
                  </p>
                </div>
                <div class="w-[50%]">
                  <p class="text-[13px] mx-2">
                    {{ props.country.serial_key_facts?.cost_of_study }}
                  </p>
                </div>
              </div>
            </div>
            <!-- <div class="px-7 py-1">
              <div class="flex items-center bg-slate-100 rounded-lg px-5">
                <div class="w-[50%] border-r-2 border-slate-400">
                  <p class="py-5 text-[13px] font-semibold ml-5">
                    Exams Required
                  </p>
                </div>
                <div class="w-[50%]">
                  <p class="text-[13px] mx-2">
                    {{ props.country.serial_key_facts?.exams_required }}
                  </p>
                </div>
              </div>
            </div> -->
            <div class="px-7 py-1">
              <div class="flex items-center bg-slate-100 rounded-lg px-5">
                <div class="w-[50%] border-r-2 border-slate-400">
                  <p class="py-3 text-[13px] font-semibold ml-5">Degrees</p>
                </div>
                <div class="w-[50%]">
                  <p class="text-[13px] mx-2">
                    {{ props.country.serial_key_facts?.degrees }}
                  </p>
                </div>
              </div>
            </div>
            <div class="px-7 py-1">
              <div class="flex items-center bg-slate-100 rounded-lg px-5">
                <div class="w-[50%] border-r-2 border-slate-400">
                  <p class="py-3 text-[13px] font-semibold ml-5">intakes</p>
                </div>
                <div class="w-[50%]">
                  <p class="text-[13px] mx-2">
                    {{ props.country.serial_key_facts?.intakes }}
                  </p>
                </div>
              </div>
            </div>
            <div class="px-7 py-1">
              <div class="flex items-center bg-slate-100 rounded-lg px-5">
                <div class="w-[50%] border-r-2 border-slate-400">
                  <p class="py-3 text-[13px] font-semibold ml-5">Visa</p>
                </div>
                <div class="w-[50%]">
                  <p class="text-[13px] mx-2">
                    {{ props.country.serial_key_facts.visa }}
                  </p>
                </div>
              </div>
            </div>
            <!-- loop -->
          </div>
        </div>

        <div class="">
          <div
            class="md:w-[536px] ssm:w-[300px] ssm:h-auto md:h-[500px] test-card overflow-hidden"
          >
            <div
              class="flex justify-center items-center h-[71px] w-[100%] text-white bg-blue-500"
            >
              <h1 class="text-md font-[700] ssm:text-[18px]">
                Main facts to study in {{ props.country.name }}
              </h1>
            </div>
            <!-- loop -->
            <div v-if="myMain">
              <template v-for="(data, index) in myMain" :key="index">
                <div class="px-7 pt-4 py-1">
                  <div
                    class="flex items-center bg-slate-100 rounded-lg px-1 py-2"
                  >
                    <div class="w-[8%]">
                      <img
                        src="../../../assets/img/StudyPathway/Checkmark.png"
                        alt=""
                      />
                    </div>
                    <div class="w-[92%]">
                      <p class="text-[13px] mx-2">
                         <!-- to convert by automatically css effect code from database with css code -->
                        <div
      v-if="data"
      v-html="data"
      class=" m-4 text-gray-700"
    ></div>  
    <!-- to convert by automatically css effect code from database with css code -->
                      </p>
                    </div>
                  </div>
                </div>
              </template>
            </div>

            <!-- loop -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
