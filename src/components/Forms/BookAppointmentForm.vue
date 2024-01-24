<template>
  <div class="flex justify-center my-36">
    <div class="w-[719px] shadow-2xl rounded-2xl lg:px-14 lg:py-8 border">
      <h1 class="text-cus-primary text-md font-semibold">Get Appointment</h1>
      <hr class="my-5 text-black" />
      <div class="shadow-xl cus-rounded overflow-hidden p-3 mx-10 mb-14 my-5">
        <VDatePicker
          borderless
          expanded
          title-position="right"
          v-model="date"
          mode="date"
          :select-attribute="selectAttribute"
        />
      </div>
      <h1 class="text-md text-cus-primary font-[400] mx-10">Select Time</h1>
      <div class="mt-7">
        <div class="flex items-center">
          <div class="flex-1 h-[1px] bg-gray-500"></div>
          <div class="mx-4 text-[18px] text-gray-600">Morning</div>
          <div class="flex-1 h-[1px] bg-gray-500"></div>
        </div>

        <!-- <div class="flex items-center">
          <div class="border"></div>
          <p class="text-[18px] text-gray-600">Morning</p>
        </div> -->
        <div class="flex justify-center mt-8">
          <div class="">
            <button class="border-2 border-gray-400 rounded-lg px-4 py-2">
              9:30 - 10:30
            </button>
          </div>
          <div class="mx-5">
            <button class="border-2 border-gray-400 rounded-lg px-4 py-2">
              9:30 - 10:30
            </button>
          </div>
          <div class="">
            <button class="border-2 border-gray-400 rounded-lg px-4 py-2">
              9:30 - 10:30
            </button>
          </div>
        </div>
      </div>
      <div class="mt-7">
        <div class="flex items-center">
          <div class="flex-1 h-[1px] bg-gray-500"></div>
          <div class="mx-4 text-[18px] text-gray-600">Afternoon</div>
          <div class="flex-1 h-[1px] bg-gray-500"></div>
        </div>

        <div class="flex justify-center gap-5 mt-8">
          <div class="">
            <button class="border-2 border-gray-400 rounded-lg px-4 py-2">
              1:00 - 2:00
            </button>
          </div>
          <div class="">
            <button class="border-2 border-gray-400 rounded-lg px-4 py-2">
              2:00 - 3:00
            </button>
          </div>
        </div>
      </div>
      <div class="mt-7">
        <div class="flex items-center">
          <div class="flex-1 h-[1px] bg-gray-500"></div>
          <div class="mx-4 text-[18px] text-gray-600">Evening</div>
          <div class="flex-1 h-[1px] bg-gray-500"></div>
        </div>

        <div class="flex justify-center mt-8">
          <div class="">
            <button class="border-2 border-gray-400 rounded-lg px-4 py-2">
              3:00 - 4:00
            </button>
          </div>
        </div>
      </div>
      <div class="mt-7">
        <div class="float-end">
          <div class="flex items-center gap-5">
            <Button
              @click="toForm2"
              class="px-4 py-2"
              type="gradient"
              data-te-toggle="modal"
              data-te-target="#appointmentFormModal"
              data-te-ripple-init
              data-te-ripple-color="light"
              >Confirm</Button
            >
            <button class="bg-gray-500 text-white px-4 rounded-lg py-2">
              Close
            </button>
          </div>
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
import { useRouter } from "vue-router";
const router = useRouter();
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

const toForm2 = () => {
  router.push({ name: "appointment-form2" });
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
