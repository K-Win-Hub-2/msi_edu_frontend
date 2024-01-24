<template>
  <div class="flex justify-center">
    <div
      class="w-[719px] shadow-md rounded-2xl mt-14 relative z-50 bg-[#E7F4FF] lg:px-14 lg:py-8 border mb-5"
    >
      <p class="text-green-500 text-center">Appointment has been added!</p>
    </div>
  </div>
  <div class="flex justify-center mt-10">
    <div class="w-[719px] shadow-2xl rounded-2xl lg:px-20 lg:py-8 border mb-28">
      <form class="mt-20 border-b-2">
        <div class="mb-5">
          <label for="">Name</label> <br />
          <input
            type="text"
            placeholder=" Name"
            class="border-2 py-4 px-3 w-full border-gray-500 rounded-md"
          />
        </div>
        <div class="mb-5">
          <label for="">Email</label> <br />
          <input
            type="text"
            placeholder=" Email"
            class="border-2 py-4 px-3 w-full border-gray-500 rounded-md"
          />
        </div>
        <div class="mx-auto">
          <label for="zip-input" class="block mb-2 text-sm font-medium"
            >Phone</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 px-3 top-0 flex items-center ps-3.5 pointer-events-none border-r-2 border-gray-500"
            >
              <img
                class="w-8 h-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/255px-Flag_of_Myanmar.svg.png"
                alt=""
              />
              +95
            </div>
            <input
              type="text"
              id="zip-input"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 py-4 border-2 border-gray-500 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
              placeholder="              Phone"
              pattern="^\d{5}(-\d{4})?$"
              required
            />
          </div>
        </div>
        <Button
          @click="confirm"
          class="w-full text-center py-4 mt-16 flex justify-center mb-32"
          type="gradient"
          data-te-toggle="modal"
          data-te-target="#appointmentFormModal"
          data-te-ripple-init
          data-te-ripple-color="light"
          >Schedule Appointment</Button
        >
      </form>
      <button
        class="bg-gray-600 text-white px-5 py-2 rounded-md float-right mt-3"
      >
        Close
      </button>
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
const confirm = () => {
  router.push({ name: "appointment-confirm" });
};

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
