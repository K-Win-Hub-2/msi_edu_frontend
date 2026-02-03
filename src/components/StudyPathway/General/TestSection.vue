<script setup>
const props = defineProps(["country"]);
console.log("props", props.country.key_facts);
const myMain = props.country.key_facts.split(",");
</script>

<template>
  <div>
    <div>
      <div class="grid lg:grid-cols-2 ssm:grid-cols-1 md:grid-cols-1 lg:gap-x-28">
        <!-- Key facts card -->
        <div v-if="props.country">
          <div
            class="md:w-[536px] ssm:w-[300px] ssm:h-auto md:h-[500px] test-card overflow-hidden mb-4 
                   rounded-xl shadow-2xl hover:shadow-2xl transition-shadow duration-300 bg-white"
          >
            <!-- HEADER: gradient like Inquiry button -->
            <div
              class="flex items-center justify-center w-full h-[71px] text-white 
                     bg-gradient-to-r from-cus-primary to-cus-secondary shadow-md"
            >
              <h1 class="text-md font-[700] ssm:text-[24px] tracking-wide">
                Key facts to study in {{ props.country.name }}
              </h1>
            </div>

            <div class="flex flex-col justify-center gap-4 pt-2">
              <!-- loop -->
              <div class="py-1 pt-2 px-7">
                <div class="flex items-center px-5 rounded-lg shadow-sm bg-slate-100">
                  <div class="w-[50%] border-r-2 border-slate-400">
                    <p class="py-4 text-[16px] font-semibold ml-5">
                      English Proficiency Test
                    </p>
                  </div>
                  <div class="w-[50%]">
                    <p class="text-[16px] mx-2">
                      {{ props.country.serial_key_facts?.language_spoken }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="py-1 px-7">
                <div class="flex items-center px-5 rounded-lg shadow-sm bg-slate-100">
                  <div class="w-[50%] border-r-2 border-slate-400">
                    <p class="py-4 text-[16px] font-semibold ml-5">Degrees</p>
                  </div>
                  <div class="w-[50%]">
                    <p class="text-[16px] mx-2">
                      {{ props.country.serial_key_facts?.degrees }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="py-1 px-7">
                <div class="flex items-center px-5 rounded-lg shadow-sm bg-slate-100">
                  <div class="w-[50%] border-r-2 border-slate-400">
                    <p class="py-4 text-[16px] font-semibold ml-5">Intakes</p>
                  </div>
                  <div class="w-[50%]">
                    <p class="text-[16px] mx-2">
                      {{ props.country.serial_key_facts?.intakes }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="py-1 px-7">
                <div class="flex items-center px-5 rounded-lg shadow-sm bg-slate-100">
                  <div class="w-[50%] border-r-2 border-slate-400">
                    <p class="py-4 text-[16px] font-semibold ml-5">Visa</p>
                  </div>
                  <div class="w-[50%]">
                    <p class="text-[16px] mx-2">
                      {{ props.country.serial_key_facts.visa }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="py-1 px-7">
                <div class="flex items-center px-5 rounded-lg shadow-sm bg-slate-100">
                  <div class="w-[50%] border-r-2 border-slate-400">
                    <p class="py-4 text-[16px] font-semibold ml-5">
                      Cost of study
                    </p>
                  </div>
                  <div class="w-[50%]">
                    <p class="text-[16px] mx-2">
                      {{ props.country.serial_key_facts?.cost_of_study }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- /loop -->
            </div>
          </div>
        </div>

        <!-- Main facts card -->
        <div>
          <div
            class="md:w-[536px] ssm:w-[300px] ssm:h-auto md:h-[500px] test-card overflow-hidden 
                   rounded-xl shadow-2xl hover:shadow-2xl transition-shadow duration-300 bg-white"
          >
            <!-- HEADER: same gradient as key facts / Inquiry -->
            <div
              class="flex items-center justify-center w-full h-[71px] text-white 
                     bg-gradient-to-r from-cus-primary to-cus-secondary shadow-md"
            >
              <h1 class="text-md font-[700] ssm:text-[24px] tracking-wide">
                Main facts to study in {{ props.country.name }}
              </h1>
            </div>

            <!-- loop -->
            <div v-if="myMain" class="pt-2 pb-4">
              <template v-for="(data, index) in myMain" :key="index">
                <div class="px-7">
                  <div
                    class="flex items-center px-1 pt-2 mb-1 rounded-lg shadow-sm bg-slate-100"
                  >
                    <div class="w-[8%]">
                      <img
                        src="../../../assets/img/StudyPathway/Checkmark.png"
                        alt=""
                      />
                    </div>
                    <div class="w-[92%]">
                      <p class="text-[18px] mx-2 text-left">
                        <div
                          v-if="data"
                          v-html="data"
                          class="m-4 text-gray-700"
                        ></div>
                      </p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <!-- /loop -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
