<template>
  <div class="flex justify-center md:my-36 ssm:my-7">
    <div
      class="w-[719px] shadow-2xl rounded-2xl md:px-14 md:py-8 ssm:py-3 ssm:px-3 border"
    >
      <h1
        class="text-cus-primary text-md font-semibold ssm:text-center md:text-start"
      >
        Get Appointment
      </h1>
      <hr class="my-5 text-black" />
      <div
        class="shadow-xl cus-rounded overflow-hidden p-3 md:mx-10 ssm:mx-2 mb-14 my-5"
      >
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
            <button
              :class="
                time == '9:30-10:30'
                  ? 'bg-cus-primary shadow-xl text-white scale-110'
                  : ''
              "
              @click="time = '9:30-10:30'"
              class="border-2 hover:bg-cus-primary shadow-xl hover:text-white border-gray-400 rounded-lg md:px-4 ssm:py-1 ssm:px-1 md:py-2"
            >
              9:30 - 10:30
            </button>
          </div>
          <div class="mx-5">
            <button
              :class="
                time == '10:30-11:30'
                  ? 'bg-cus-primary shadow-xl text-white scale-110'
                  : ''
              "
              @click="time = '10:30-11:30'"
              class="border-2 border-gray-400 hover:bg-cus-primary shadow-xl hover:text-white rounded-lg md:px-4 ssm:py-1 ssm:px-1 md:py-2"
            >
              10:30 - 11:30
            </button>
          </div>
          <div class="">
            <button
              :class="
                time == '11:30-12:30'
                  ? 'bg-cus-primary shadow-xl text-white scale-110'
                  : ''
              "
              @click="time = '11:30-12:30'"
              class="border-2 border-gray-400 hover:bg-cus-primary shadow-xl hover:text-white rounded-lg md:px-4 ssm:py-1 ssm:px-1 md:py-2"
            >
              11:30 - 12:30
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
            <button
              :class="
                time == '1:00-2:00'
                  ? 'bg-cus-primary shadow-xl text-white scale-110'
                  : ''
              "
              @click="time = '1:00-2:00'"
              class="border-2 border-gray-400 hover:bg-cus-primary shadow-xl hover:text-white rounded-lg md:px-4 ssm:py-1 ssm:px-1 md:py-2"
            >
              1:00 - 2:00
            </button>
          </div>
          <div class="">
            <button
              :class="
                time == '2:00-3:00'
                  ? 'bg-cus-primary shadow-xl text-white scale-110'
                  : ''
              "
              @click="time = '2:00-3:00'"
              class="border-2 border-gray-400 hover:bg-cus-primary shadow-xl hover:text-white rounded-lg md:px-4 ssm:py-1 ssm:px-1 md:py-2"
            >
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
            <button
              :class="
                time == '3:00-4:00'
                  ? 'bg-cus-primary shadow-xl text-white scale-110'
                  : ''
              "
              @click="time = '3:00-4:00'"
              class="border-2 hover:bg-cus-primary shadow-xl hover:text-white border-gray-400 rounded-lg md:px-4 ssm:py-1 ssm:px-1 md:py-2"
            >
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
            <button
              @click="close"
              class="bg-gray-500 text-white px-4 rounded-lg py-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "../partials/Button.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "../../stores/app";
import { storeToRefs } from "pinia";
const router = useRouter();
const date = ref(new Date());
const selectAttribute = ref(false);
const time = ref();
const appStore = useAppStore();
const { appointmentDate, appointmentTime } = storeToRefs(appStore);

// format date
const day = date.value.getDate();
const month = date.value.getMonth() + 1; // Months are zero-based
const year = date.value.getFullYear();
const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
  .toString()
  .padStart(2, "0")}`;

const onTimeSelect = (e, definedTime) => {
  selectedTime.value = definedTime;
};

const toForm2 = () => {
  appointmentDate.value = formattedDate;
  appointmentTime.value = time.value;
  if (time.value) {
    router.push({ name: "appointment-form2" });
  }
};
const close = () => {
  router.push({ name: "home" });
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
