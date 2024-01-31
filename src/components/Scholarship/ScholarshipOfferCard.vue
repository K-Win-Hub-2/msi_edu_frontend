<script setup>
const props = defineProps(["item"]);
</script>
<template>
  <div
    class="md:px-14 py-14 flex items-center w-full bg-[#F5FBFC]"
    v-if="props.item"
  >
    <div class="md:space-y-12 ssm:space-y-4">
      <div class="ssm:ml-14 md:ml-0">
        <div class="ssm:flex md:text-md">
          <div class="text-[#205887] md:flex font-semibold">
            <p class="md:min-w-[260px]">Scholarship Name</p>
            <div class="text-[#FE005F] flex md:space-x-2">
              <p class="ssm:hidden md:block text-gray-500">-</p>
              <p>{{ props.item.scholar_name }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="ssm:ml-14 md:ml-0">
        <div class="flex md:text-md">
          <div class="text-[#205887] md:flex font-semibold">
            <p class="md:min-w-[260px] ssm:min-w-[130px]">Descriptions</p>
            <div
              class="text-[#FE005F] flex md:space-x-2 text-wrap ssm:max-w-[280px] md:max-w-[1000px]"
            >
              <p class="ssm:hidden md:block text-gray-500">-</p>
              <p>{{ props.item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ssm:ml-14 md:ml-0">
        <div class="flex md:text-md">
          <div class="text-[#205887] md:flex font-semibold">
            <p class="md:min-w-[260px] ssm:min-w-[130px]">Requirements</p>
            <div
              class="text-[#FE005F] flex md:space-x-2 ssm:max-w-[280px] md:max-w-[1000px] text-wrap"
            >
              <p class="ssm:hidden md:block text-gray-500">-</p>
              <p>{{ props.item.requirement }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ssm:ml-14 md:ml-0">
        <div class="flex md:text-md">
          <div class="text-[#205887] md:flex font-semibold">
            <p class="md:min-w-[260px] ssm:min-w-[130px]">Year and Intake</p>
            <p
              class="text-[#FE005F] ssm:max-w-[280px] md:max-w-[1000px] text-wrap"
            >
              <span class="ssm:hidden md:inline text-gray-500">-</span>
              {{ props.item.year_intake }}
            </p>
          </div>
        </div>
      </div>
      <div class="md:flex md:space-x-20 ssm:ml-14 md:ml-0">
        <div class="">
          <div class="flex md:text-md">
            <p class="text-[#205887] font-semibold">Start Date</p>
            <div class="text-[#FE005F] flex font-semibold">
              <p class="mx-3">-</p>
              <p>{{ props.item.start_date }}</p>
            </div>
          </div>
        </div>
        <div class="">
          <div class="flex md:text-md">
            <p class="text-[#205887] font-semibold">End Date</p>
            <div class="text-[#FE005F] flex font-semibold">
              <p class="mx-3">-</p>
              <p>{{ props.item.end_date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
