<template>
  <div class="border cus-rounded overflow-hidden p-3 mb-3">
    <VDatePicker
      borderless
      expanded
      title-position="right"
      v-model="date"
      mode="date"
      :select-attribute="selectAttribute"
    />
  </div>
  <div>
    <h3 class="mb-6 text-xl font-bold">Select Time</h3>
    <div class="grid grid-cols-3 gap-3">
      <div>
        <h4 class="text-md font-semibold mb-3 text-center">Morning</h4>
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
  </div>
</template>

<script setup>
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
