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
const uniSpecific = ref();
const countryUrl = ref("country-lists");
const scholarshipList = ref([]);
const countryId = ref('');
const other = ref(false);
 const customCountryName = ref('');
 const customUniName = ref('');
 const customProgramName = ref('');
const universityId = ref('');
const programList = ref();
const courses = ref(false);
const programId = ref('');
const courseList = ref();
const course_flag = ref();
const name = ref();
const phone = ref();
const email = ref();
const scholarId = ref('');
const inquiry = ref();
const courseName = ref();
const university_flag = ref();
const scholarship_flag = ref();
const success = ref(false);
const $toast = useToast();
const errors = ref();
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

const updateOther = () => {
  uniSpecific.value = undefined
  other.value = true;
}

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

    customs: {
      country: customCountryName.value,
      university: customUniName.value,
      program: customProgramName.value
    }

    
  };


  const appointmentStore = async () => {
    try {
      const res = await axios.post("appointment/register", data);
      if (res.status == 200) {
        $toast.success("Appointment Confirmed", { position: "top-right" });
        success.value = true;
        router.push({ name: "appointment-form2" });
      }
    } catch (error) {
      errors.value = error.response.data.errors;
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

    <div class="relative z-40 flex justify-center md:mt-36 ssm:mt-8">
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
              :class="[errors?.name ? 'border-red-500' : '']"
              v-model="name"
              type="text"
              placeholder="Name"
              class="w-full px-3 py-4 border-2 border-gray-300 rounded-md"
            />
            <p v-if="errors?.name" class="text-red-500">{{ errors.name[0] }}</p>
          </div>

          <div class="mb-5">
            <label for="">Email</label> <br />
            <input
              v-model="email"
              type="email"
              :class="[errors?.email ? 'border-red-500' : '']"
              placeholder="Email"
              class="w-full px-3 py-4 border-2 border-gray-300 rounded-md"
            />
            <p v-if="errors?.email" class="text-red-500">{{ errors.email[0] }}</p>
          </div>

          <div class="mb-5">
            <label for="zip-input" class="block mb-2 text-sm font-medium">Phone</label>
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
                :class="[errors?.phone ? 'border-red-500' : '']"
                v-model="phone"
                type="number"
                id="zip-input"
                class="bg-gray-50 py-4 border-2 ssm:pl-24 border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                placeholder="Contact Number"
              />
            </div>
            <p v-if="errors?.phone" class="text-red-500">{{ errors.phone[0] }}</p>
          </div>

          <!-- Appointment Date -->
          <div class="mb-5">
            <label for="appointment-date" class="block mb-2 text-sm font-medium">Appointment Date</label>
            <input
              v-model="appointmentDate"
              type="date"
              id="appointment-date"
              :class="[errors?.appointmentDate ? 'border-red-500' : '']"
              class="w-full px-3 py-4 border-2 border-gray-300 rounded-md"
            />
            <p v-if="errors?.appointmentDate" class="text-red-500">
              {{ errors.appointmentDate[0] }}
            </p>
          </div>

          <!-- Appointment Time -->
          <div class="mb-5">
            <label for="appointment-time" class="block mb-2 text-sm font-medium">Appointment Time</label>
            <select
              v-model="appointmentTime"
              :class="[errors?.appointmentTime ? 'border-red-500' : '']"
              class="w-full px-3 py-4 border-2 border-gray-300 rounded-md"
            >
              <option disabled value="">Select a time slot</option>
              <option value="9:30-10:30">9:30 - 10:30</option>
              <option value="10:30-11:30">10:30 - 11:30</option>
              <option value="11:30-12:30">11:30 - 12:30</option>
              <option value="1:00-2:00">1:00 - 2:00</option>
              <option value="2:00-3:00">2:00 - 3:00</option>
              <option value="3:00-4:00">3:00 - 4:00</option>
            </select>
            <p v-if="errors?.appointmentTime" class="text-red-500">
              {{ errors.appointmentTime[0] }}
            </p>
          </div>

          
          
          <div class="flex items-center mt-14 gap-x-6">
            <p>University specific</p>
            <div class="flex items-center gap-2 ml-4">
              <input type="radio" class="w-5 h-5" 
               :value="true" v-model="uniSpecific"
               @click="other=false"
               />
              <div class="">Yes</div>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="radio"
                class="w-5 h-5"
                :value="false" v-model="uniSpecific"
               @click="other=false"

              />
              <div class="">No</div>
            </div>

            <div class="flex items-center gap-2">
              <input
                type="radio"
                class="w-5 h-5"
                :value="true"
                @click="updateOther"
                v-model="other"
              />
              <div class="">Other</div>
            </div>
          </div>

          <div v-if="other" class="mt-4 space-y-6">
            <div class="p-5 bg-white shadow-sm rounded-xl">
              <label class="block mb-1 text-sm text-gray-600">Country</label>
              <input
                type="text"
                v-model="customCountryName"
                placeholder="Your answer"
                class="w-full text-sm placeholder-gray-400 border-0 border-b border-gray-300 focus:ring-0 focus:border-black"
              />
            </div>

            <div class="p-5 bg-white shadow-sm rounded-xl">
              <label class="block mb-1 text-sm text-gray-600">University</label>
              <input
                type="text"
                v-model="customUniName"
                placeholder="Your answer"
                class="w-full text-sm placeholder-gray-400 border-0 border-b border-gray-300 focus:ring-0 focus:border-black"
              />
            </div>

            <div class="p-5 bg-white shadow-sm rounded-xl">
              <label class="block mb-1 text-sm text-gray-600">Program</label>
              <input
                type="text"
                v-model="customProgramName"
                placeholder="Your answer"
                class="w-full text-sm placeholder-gray-400 border-0 border-b border-gray-300 focus:ring-0 focus:border-black"
              />
            </div>
          </div>

          
          <div class="my-5" v-if="uniSpecific">
            <select
              @change="countryList"
              v-model="countryId"
              class="w-full px-3 py-4 border-2 border-gray-300 rounded-md bg-gray-50"
            >
              <option class="text-[#717171]" disabled value="">Country</option>

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


          <div class="my-5" v-if="universityList && uniSpecific && other != 'other' ">
            <select
              v-model="universityId"
              @change="handleUni"
              class="w-full px-3 py-4 border-2 border-gray-300 rounded-md bg-gray-50"
            >
              <option class="text-[#717171]" value="" disabled>
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

          <div class="flex items-center mt-10 gap-x-6" v-if="!other">
            <p>Course specific</p>
            <div class="flex items-center gap-2 ml-9">
              <input type="radio" class="w-5 h-5" :value="true" v-model="course" />
              <div class="">Yes</div>
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" class="w-5 h-5" :value="false" v-model="course" />
              <div class="">No</div>
            </div>
          </div>
          <div class="my-5" v-if="course && !other">
            <select
              @change="programHandle"
              v-model="programId"
              class="w-full px-3 py-4 border-2 border-gray-300 rounded-md bg-gray-50"
            >
              <option class="text-[#717171]" value="" disabled>
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


         
          <div class="my-5" v-if="courses" >
            <select
              v-model="courseName"
              class="w-full px-3 py-4 border-2 border-gray-300 rounded-md bg-gray-50"
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

          <div class="flex items-center mt-10 gap-x-6">
            <p>Scholarship specific</p>
            <div class="flex items-center gap-2">
              <input type="radio" class="w-5 h-5" v-model="scholarship" :value="true" />
              <div class="">Yes</div>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="radio"
                class="w-5 h-5"
                v-model="scholarship"
                :value="false"
               
              />
              <div class="">No</div>
            </div>
          </div>
          <div class="my-5" v-if="scholarship">
            <select
              v-model="scholarId"
              class="w-full px-3 py-4 border-2 border-gray-300 rounded-md bg-gray-50"
            >
              <option value="" disabled>Scholarship</option>
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
              class="w-full px-3 border-2 border-gray-300 rounded-md bg-gray-50"
            ></textarea>
          </div>

          <Button
            class="flex justify-center w-full py-4 mt-16 text-center"
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
            <div class="flex items-center justify-between">
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
            class="float-right px-5 py-2 mt-4 text-white bg-gray-600 rounded-md"
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
                class="p-3 border cursor-pointer cus-rounded hover:bg-gray-300"
                :class="{ 'bg-gray-300': selectedTime.time == definedTime.time }"
                @click="onTimeSelect(e, definedTime)"
              >
                {{ definedTime.time }}
              </div>
            </template>
          </div>
        </div>
        <div>
          <h4 class="mb-3 font-semibold text-center text-md">Afternoon</h4>
          <div class="space-y-3">
            <template v-for="definedTime in definedTimes.afternoon">
              <div
                class="p-3 border cursor-pointer cus-rounded hover:bg-gray-300"
                :class="{ 'bg-gray-300': selectedTime.time == definedTime.time }"
                @click="onTimeSelect(e, definedTime)"
              >
                {{ definedTime.time }}
              </div>
            </template>
          </div>
        </div>
        <div>
          <h4 class="mb-3 font-semibold text-center text-md">Evening</h4>
          <div class="space-y-3">
            <template v-for="definedTime in definedTimes.evening">
              <div
                class="p-3 border cursor-pointer cus-rounded hover:bg-gray-300"
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
