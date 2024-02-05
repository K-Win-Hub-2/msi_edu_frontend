<template>
  <div class="relative">
    <div
      class="bg-[url(@/assets/img/scholarship/image.png)] w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute top-0 bottom-0"
    ></div>
    <div class="flex justify-center mt-36 relative z-40">
      <div
        class="w-[719px] shadow-2xl rounded-2xl lg:px-9 lg:py-9 border mb-28"
      >
        <div class="">
          <h1 class="text-cus-primary text-[24px]">
            Appointment Confirmed With MSI Education
          </h1>
          <div
            class="border border-[#2e4b62] flex justify-center py-[60px] mt-14"
          >
            <div class="flex justify-between items-center">
              <img src="@/assets/img/scholarship/CalendarCheck.svg" alt="" />
              <div class="space-y-2">
                <p class="text-[20px] text-[#0E314E] font-[500]">
                  10 March 2024
                </p>
                <p class="text-[20px] text-[#0E314E] font-[500]">12:50 PM</p>
              </div>
            </div>
          </div>
          <hr class="mt-20 text-black" />
          <button
            class="bg-gray-600 text-white px-5 py-2 rounded-md float-right mt-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- <div>
        <h3 class="mb-6 text-xl font-bold">Select Time</h3>
        <div class="grid grid-cols-3 gap-3">
          <div>
            <h4 class="text-[18px] font-semibold mb-3 text-center">Morning</h4>
            <div class="space-y-3">
              <template v-for="definedTime in definedTimes.morning">
                <div
                  class="p-3 cus-rounded border cursor-pointer hover:bg-gray-300"
                  :class="{ 'bg-gray-300': selectedTime.time == definedTime.time }"
                  @click="onTimeSelect(e, definedTime)"
                >
                  {{ definedTime.time }}
                </div>
              </template>
            </div>
          </div>
          <div>
            <h4 class="text-md font-semibold mb-3 text-center">Afternoon</h4>
            <div class="space-y-3">
              <template v-for="definedTime in definedTimes.afternoon">
                <div
                  class="p-3 cus-rounded border cursor-pointer hover:bg-gray-300"
                  :class="{ 'bg-gray-300': selectedTime.time == definedTime.time }"
                  @click="onTimeSelect(e, definedTime)"
                >
                  {{ definedTime.time }}
                </div>
              </template>
            </div>
          </div>
          <div>
            <h4 class="text-md font-semibold mb-3 text-center">Evening</h4>
            <div class="space-y-3">
              <template v-for="definedTime in definedTimes.evening">
                <div
                  class="p-3 cus-rounded border cursor-pointer hover:bg-gray-300"
                  :class="{ 'bg-gray-300': selectedTime.time == definedTime.time }"
                  @click="onTimeSelect(e, definedTime)"
                >
                  {{ definedTime.time }}
                </div>
              </template>
            </div>
          </div>
        </div>
      </div> -->
</template>

<script setup>
import Button from "../partials/Button.vue";
import { ref } from "vue";

const date = ref(new Date());
const selectedTime = ref("");
const selectAttribute = ref(false);
const definedTimes = {
  morning: [
    {
      time: "9:30",
      type: "am",
      daySection: "morning",
    },
    {
      time: "11:30",
      type: "am",
      daySection: "morning",
    },
  ],
  afternoon: [
    {
      time: "12:30",
      type: "pm",
      daySection: "morning",
    },
    {
      time: "2:30",
      type: "pm",
      daySection: "morning",
    },
  ],
  evening: [
    {
      time: "5:30",
      type: "pm",
      daySection: "morning",
    },
    {
      time: "8:30",
      type: "pm",
      daySection: "morning",
    },
  ],
};

const onTimeSelect = (e, definedTime) => {
  selectedTime.value = definedTime;
};
</script>

<style>
.vc-day {
  width: 100%;
  height: 70px;
  border: 1px solid rgba(0, 0, 0, 0.144);
}

.vc-day-content {
  width: 100% !important;
  height: 100% !important;
  border-radius: 0 !important;
}

.vc-day-layer {
  background-color: #01437d;
}
</style>
