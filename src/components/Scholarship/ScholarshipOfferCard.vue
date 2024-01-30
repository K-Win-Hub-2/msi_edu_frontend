<script setup>
const props = defineProps(["university"]);
</script>
<template>
  <div
    class="md:px-14 py-14 flex items-center bg-[#F5FBFC]"
    v-if="props.university"
  >
    <div class="md:space-y-12 ssm:space-y-4">
      <div class="ssm:ml-14 md:ml-0">
        <div class="ssm:flex md:text-md">
          <div class="text-[#205887] md:flex font-semibold">
            <p class="md:min-w-[260px]">Scholarship Name <span>-</span></p>
            <p class="text-[#FE005F]">
              {{ props.university.scholar_name }}
            </p>
          </div>
          <!-- <p class="text-[#205887] font-semibold">
            Scholarship Name
            <span class="lg:ml-6 lg:mr-8">-</span>
          </p>
          <p class="text-[#FE005F] font-semibold">
            {{ props.university.scholar_name }}
          </p> -->
        </div>
      </div>
      <!-- <div class="">
        <div class="flex text-md">
          <p class="text-[#205887] font-semibold">
            Descriptions <span class="ml-24 mr-8">-</span>
          </p>
          <p class="text-[#FE005F] font-semibold max-w-[600px]">
            {{ props.university.scholar_description }}
          </p>
        </div>
      </div> -->
      <div class="ssm:ml-14 md:ml-0">
        <div class="flex md:text-md">
          <div class="text-[#205887] md:flex font-semibold">
            <p class="md:min-w-[260px] ssm:min-w-[130px]">Descriptions -</p>
            <p
              class="text-[#FE005F] text-wrap ssm:max-w-[280px] md:max-w-[1000px]"
            >
              {{ props.university.scholar_description }}
            </p>
          </div>
          <!-- <p class="text-[#205887] font-semibold">
            Descriptions<span class="lg:ml-[103px] md:ml-[80px] mr-8">-</span>
          </p>
          <p class="text-[#FE005F] font-semibold">
            {{ props.university.scholar_description }}
          </p> -->
        </div>
      </div>
      <div class="ssm:ml-14 md:ml-0">
        <div class="flex md:text-md">
          <div class="text-[#205887] md:flex font-semibold">
            <p class="md:min-w-[260px] ssm:min-w-[130px]">Requirements -</p>
            <p
              class="text-[#FE005F] ssm:max-w-[280px] md:max-w-[1000px] text-wrap"
            >
              {{ props.university.scholar_requirement }}
            </p>
          </div>
        </div>
        <!-- <div class="flex text-md">
          <div class="text-[#205887] md:text-md flex font-semibold">
            <p class="min-w-[260px]">Requirements -</p>
            <p class="text-[#FE005F]">
              {{ props.university.scholar_requirement }}
            </p>
          </div>
        </div> -->
        <!-- <div class="flex md:text-md">
          <p class="text-[#205887] font-semibold">
            Requirements<span class="lg:ml-[85px] md:ml-[60px] mr-8">-</span>
          </p>
          <p class="text-[#FE005F] font-semibold">
            {{ props.university.scholar_requirement }}
          </p>
        </div> -->
      </div>
      <div class="ssm:ml-14 md:ml-0">
        <div class="flex md:text-md">
          <div class="text-[#205887] md:flex font-semibold">
            <p class="md:min-w-[260px] ssm:min-w-[130px]">Year and Intake -</p>
            <p
              class="text-[#FE005F] ssm:max-w-[280px] md:max-w-[1000px] text-wrap"
            >
              {{ props.university.scholar_year_intake }}
            </p>
          </div>
        </div>
      </div>
      <div class="md:flex md:space-x-20 ssm:ml-14 md:ml-0">
        <div class="">
          <div class="flex md:text-md">
            <p class="text-[#205887] font-semibold">
              End Date<span class="lg:mr-8 md:mr-2">-</span>
            </p>
            <p class="text-[#FE005F] font-semibold">2019</p>
          </div>
        </div>
        <div class="">
          <div class="flex md:text-md">
            <p class="text-[#205887] font-semibold">
              End Date<span class="lg:mr-8 md:mr-2">-</span>
            </p>
            <p class="text-[#FE005F] font-semibold">2019</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
