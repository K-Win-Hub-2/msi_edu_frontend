<script setup>
import Button from "../partials/Button.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "../../stores/app";
import { storeToRefs } from "pinia";
import getData from "../../axios/getData";
import axios from "axios";
import { useToast } from "vue-toast-notification";
const router = useRouter();
const appStore = useAppStore();
const { data, fetchData } = getData();
const { appointmentDate, appointmentTime } = storeToRefs(appStore);
const universityList = ref();
const uniSpecific = ref(false);
const countryUrl = ref("country-lists");
const scholarshipList = ref([]);
const countryId = ref();
const universityId = ref();
const programList = ref();
const courses = ref(false);
const programId = ref();
const courseList = ref();
const course_flag = ref();
const name = ref();
const phone = ref();
const email = ref();
const scholarId = ref();
const inquiry = ref();
const courseName = ref();
const university_flag = ref();
const scholarship_flag = ref();
const success = ref(false);
const $toast = useToast();
const confirm = () => {
  router.push({ name: "appointment-confirm" });
};

const university = ref(false);
const course = ref(false);
const scholarship = ref(false);

const date = ref(new Date());
const selectedTime = ref("");
const selectAttribute = ref(false);

const onTimeSelect = (e, definedTime) => {
  selectedTime.value = definedTime;
};
const fetchUni = async () => {
  const res = await axios.get(
    "university-lists/partner/yes/country/" + countryId.value
  );
  if (res) {
    if (res.data.university.length) {
      universityList.value = res.data.university;
      university_flag.value = 1;
    } else {
      university_flag.value = 2;
    }
    fetchScholar();
  }
};

// country list
const countryList = () => {
  fetchUni();
};

const handleSubmit = () => {
  const data = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    inquiry_detail: inquiry.value,
    country_id: countryId.value,
    university_id: universityId.value,
    program_id: programId.value,
    course_name: courseName.value,
    course_flag: course_flag.value,
    scholarship_id: scholarId.value,
    appointment_date: appointmentDate.value,
    appointment_time: appointmentTime.value,
    university_flag: university_flag.value,
    scholarship_flag: scholarship_flag.value,
  };

  const appointmentStore = async () => {
    const res = await axios.post("appointment/register", data);
    if (res.status == 200) {
      $toast.success("Appointment Confirmed", { position: "top-right" });
      success.value = true;
      router.push({ name: "appointment-form2" });
    }
  };
  appointmentStore();
};

const fetchProgram = async () => {
  const res = await axios.get("university-lists/partner/yes");
  if (res.data.university) {
    res.data.university.map((uni) => {
      if (uni.id == universityId.value) {
        if (uni.program_course.length) {
          programList.value = uni.program_course;
        }
      }
    });
  }
};

const close = () => {
  router.push({ name: "home" });
};

const programHandle = () => {
  courses.value = true;

  programList.value.map((p) => {
    if (p.id == programId.value) {
      const array = p.pivot.course_name.split(",");
      const formattedArray = array.map((course) => course.trim());
      courseList.value = formattedArray;
      console.log(courseList.value);
      if (courseList.value) {
        course_flag.value = 1;
      } else {
        course_flag.value = 2;
      }
    }
  });
};

const handleUni = () => {
  fetchProgram();
  fetchScholar();
};

//  university specific
const uniSpecificBtn = () => {
  uniSpecific.value = true;
};
// fetch scholarship
const fetchScholar = async () => {
  const res = await axios.get("scholarship-type-lists");
  if (res) {
    res.data.scholarshipTypeLists.map((scholar) => {
      if (scholar.id == universityId.value) {
        scholarshipList.value.push(scholar);
      }
    });
  }
  if (scholarshipList.value.length) {
    scholarship_flag.value = 1;
  } else {
    scholarship_flag.value = 2;
  }
};
onMounted(() => {
  fetchData(countryUrl.value);
});
</script>
<template>
  <div class="relative">
    <!-- <div class="fixed z-[9999]" v-if="success">
      <div
        class="absolute md:-top-[150px] ssm:-top-[80px] lg:left-[570px] md:left-[80px]"
      >
        <div
          class="md:w-[719px] ssm:w-[320px] flex justify-center shadow-md rounded-2xl mt-14 relative z-50 bg-[#E7F4FF] md:px-14 ssm:px-5 ssm:py-2 md:py-8 border mb-5"
        >
          <div class=""></div>
          <p class="text-green-500">Appointment has been added!</p>
        </div>
      </div>
    </div> -->
    <div
      class="bg-[url(@/assets/img/scholarship/image.png)] w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute top-0 bottom-0"
    ></div>

    <div class="flex justify-center relative z-40 md:mt-36 ssm:mt-8">
      <div
        class="w-[719px] md:shadow-2xl rounded-2xl md:px-20 ssm:px-3 md:py-8 md:border mb-28"
      >
        <form
          class="mt-20 border-b-2"
          @submit.prevent="handleSubmit"
          v-if="!success"
        >
          <div class="mb-5">
            <label for="">Name</label> <br />
            <input
              v-model="name"
              type="text"
              placeholder=" Name"
              class="border-2 py-4 px-3 w-full border-gray-300 rounded-md"
            />
          </div>
          <div class="mb-5">
            <label for="">Email </label>
            <br />
            <input
              v-model="email"
              type="email"
              placeholder=" Email"
              required
              class="border-2 py-4 px-3 w-full border-gray-300 rounded-md"
            />
          </div>
          <div class="mx-auto">
            <label for="zip-input" class="block mb-2 text-sm font-medium"
              >Phone</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 px-3 top-0 flex items-center ps-3.5 pointer-events-none border-r-2 border-gray-300"
              >
                <img
                  class="w-8 h-5"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/255px-Flag_of_Myanmar.svg.png"
                  alt=""
                />
                +95
              </div>
              <input
                v-model="phone"
                type="number"
                id="zip-input"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 py-4 border-2 ssm:pl-24 border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                placeholder="Contact Number"
                required
              />
            </div>
          </div>
          <div class="flex mt-14 items-center gap-x-6">
            <p>University specific</p>
            <div class="ml-4 flex items-center gap-2">
              <input type="radio" class="w-5 h-5" @click="uniSpecificBtn" />
              <div class="">Yes</div>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="radio"
                class="w-5 h-5"
                @click="uniSpecific = false"
              />
              <div class="">No</div>
            </div>
          </div>
          <div class="my-5" v-if="uniSpecific">
            <select
              @change="countryList"
              v-model="countryId"
              class="border-2 py-4 px-3 w-full border-gray-300 bg-gray-50 rounded-md"
            >
              <option
                class="text-[#717171]"
                :value="data.id"
                v-for="data in data.countries"
                :key="data.id"
              >
                {{ data.name }}
              </option>
            </select>
          </div>

          <div class="my-5" v-if="universityList">
            <select
              v-model="universityId"
              @change="handleUni"
              class="border-2 py-4 px-3 w-full border-gray-300 bg-gray-50 rounded-md"
            >
              <option class="text-[#717171]" value="" disabled selected>
                University
              </option>
              <option
                class="text-[#717171]"
                v-for="data in universityList"
                :key="data.id"
                :value="data.id"
              >
                {{ data.university_name }}
              </option>
            </select>
          </div>

          <div class="flex mt-10 items-center gap-x-6">
            <p>Course specific</p>
            <div class="ml-9 flex items-center gap-2">
              <input type="radio" class="w-5 h-5" @click="course = true" />
              <div class="">Yes</div>
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" class="w-5 h-5" @click="course = false" />
              <div class="">No</div>
            </div>
          </div>
          <div class="my-5" v-if="course">
            <select
              @change="programHandle"
              v-model="programId"
              class="border-2 py-4 px-3 w-full border-gray-300 bg-gray-50 rounded-md"
            >
              <option class="text-[#717171]" value="" disabled selected>
                Program
              </option>
              <option
                :value="program.id"
                v-for="program in programList"
                :key="program.id"
              >
                {{ program.name }}
              </option>
            </select>
          </div>

          <div class="my-5" v-if="courses">
            <select
              v-model="courseName"
              class="border-2 py-4 px-3 w-full border-gray-300 bg-gray-50 rounded-md"
            >
              <option class="text-[#717171]" value="" disabled selected>
                Course
              </option>
              <option
                v-for="course in courseList"
                :key="course"
                class="text-[#717171]"
                :value="course"
              >
                {{ course }}
              </option>
            </select>
          </div>

          <div class="flex mt-10 items-center gap-x-6">
            <p>Scholarship specific</p>
            <div class="flex items-center gap-2">
              <input type="radio" class="w-5 h-5" @click="scholarship = true" />
              <div class="">Yes</div>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="radio"
                class="w-5 h-5"
                @click="scholarship = false"
              />
              <div class="">No</div>
            </div>
          </div>
          <div class="my-5" v-if="scholarship">
            <select
              v-model="scholarId"
              class="border-2 py-4 px-3 w-full border-gray-300 bg-gray-50 rounded-md"
            >
              <option
                :value="data.id"
                v-for="data in scholarshipList"
                :key="data.id"
              >
                {{ data.scholar_name }}
              </option>
            </select>
          </div>

          <div class="mb-5" v-if="scholarship">
            <label for="">Inquiry Details</label> <br />
            <textarea
              v-model="inquiry"
              name=""
              id=""
              cols="10"
              rows="5"
              class="border-2 px-3 w-full border-gray-300 bg-gray-50 rounded-md"
            ></textarea>
          </div>

          <Button
            class="w-full text-center py-4 mt-16 flex justify-center"
            type="gradient"
            data-te-toggle="modal"
            data-te-target="#appointmentFormModal"
            data-te-ripple-init
            data-te-ripple-color="light"
            >Schedule Appointment</Button
          >
        </form>
        <div class="" v-else>
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
                  {{ appointmentDate }}
                </p>
                <p class="text-[20px] text-[#0E314E] font-[500]">
                  {{ appointmentTime }}
                </p>
              </div>
            </div>
          </div>
          <hr class="mt-20 text-black" />
          <button
            @click="close"
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
