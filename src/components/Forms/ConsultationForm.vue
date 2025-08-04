<script setup>
// import Link from "@/components/partials/Link.vue";
import { onMounted, ref } from "vue";
import { useStudentStore } from "@/stores/consultation.js";

const studentStore = useStudentStore();
const consultationForm = ref(null);
const studentList = ref();
const userInput = ref({
  name: "",
  email: "",
  student_phone: "",
  guidance_phone: "",
  birth_date: "",
  facebook_link: "",
  student_nrc: "",
  home_no: "",
  street: "",
  quarter: "",
  township: "",
  passport: "no",
  gender: "male",
});

const validation = ref({
  fullName: false,
  email: false,
  guidancePh: false,
  homeNo: false,
  street: false,
  quarter: false,
  township: false,
  passport: false,
  birth: false,
  studentPh: false,
  studentNrc: false,
  gender: false,
});
const validationCheck = () => {
  validation.value.fullName = userInput.value.name ? false : true;
  validation.value.email = userInput.value.email ? false : true;
  validation.value.birth = userInput.value.birth_date ? false : true;
  validation.value.studentPh = userInput.value.student_phone ? false : true;
  validation.value.studentNrc = userInput.value.student_nrc ? false : true;
  validation.value.gender = userInput.value.gender ? false : true;
  validation.value.passport = userInput.value.passport ? false : true;
  validation.value.guidancePh = userInput.value.guidance_phone ? false : true;
  validation.value.homeNo = userInput.value.home_no ? false : true;
  validation.value.street = userInput.value.street ? false : true;
  validation.value.quarter = userInput.value.quarter ? false : true;
  validation.value.township = userInput.value.township ? false : true;
  console.log(validation.value);
};
const cleanForm = () => {
  userInput.value.name = "";
  userInput.value.email = "";
  userInput.value.student_phone = "";
  userInput.value.guidance_phone = "";
  userInput.value.birth_date = "";
  userInput.value.facebook_link = "";
  userInput.value.student_nrc = "";
  userInput.value.home_no = "";
  userInput.value.street = "";
  userInput.value.quarter = "";
  userInput.value.township = "";
};
const emailAlreadyExist = ref(false);
const nrcAlreadyExist = ref(false);
const checkExistData = () => {
  let arrE = studentList.value.filter((e) => e.email == userInput.value.email);
  if (arrE.length > 0) {
    emailAlreadyExist.value = true;
  } else {
    emailAlreadyExist.value = false;
  }
  let arrN = studentList.value.filter(
    (e) => e.student_nrc == userInput.value.student_nrc
  );
  if (arrN.length > 0) {
    nrcAlreadyExist.value = true;
  } else {
    nrcAlreadyExist.value = false;
  }

  // studentList.value.map((e) => {
  //   if (e.email == userInput.value.email) {
  //     emailAlreadyExist.value = true;
  //   } else {
  //     emailAlreadyExist.value = false;
  //   }
  //   if (e.student_nrc == userInput.value.student_nrc) {
  //     nrcAlreadyExist.value = true;
  //   } else {
  //     nrcAlreadyExist.value = false;
  //   }
  //   console.log(e.email == userInput.value.email);
  // });
};
const postStudentInfo = async () => {
  validationCheck();
  checkExistData();
  if (
    !validation.value.fullName &&
    !validation.value.email &&
    !validation.value.guidancePh &&
    !validation.value.homeNo &&
    !validation.value.street &&
    !validation.value.quarter &&
    !validation.value.township &&
    !validation.value.birth &&
    !validation.value.studentPh &&
    !validation.value.studentNrc &&
    !emailAlreadyExist.value &&
    !nrcAlreadyExist.value
  ) {
    console.log(userInput.value);
    let res = await studentStore.addStudent(userInput.value);
    cleanForm();
    console.log(res);
  }
};
onMounted(async () => {
  // let studentsListRes = await studentStore.fetchStudentList();
  // studentList.value = studentsListRes.data;
  // console.log(studentList.value);
});
</script>
<template>
  <div id="registerForm">
    <div
      ref="consultationForm"
      id="consultationForm"
      class="space-y-3"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-[100%]">
        <div class="flex flex-col">
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="userInput.name"
            :class="{ 'outline-red-600 border-red-600': validation.fullName }"
            class="rounded-lg border text-black bg-gray-100 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="Enter Your Name"
          />
          <span v-if="validation.fullName" class="relative text-red-500"
            >please fill the full name</span
          >
        </div>
        <div class="flex flex-col">
          <label for="email">Email Address</label>
          <input
            type="text"
            id="email"
            name="email"
            v-model="userInput.email"
            :class="{ 'outline-red-600 border-red-600': validation.email }"
            class="rounded-lg border bg-gray-100 text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="Please enter Your Email address"
          />
          <span v-if="validation.email" class="relative text-red-500"
            >please fill the email address</span
          >
          <span v-if="emailAlreadyExist" class="relative text-red-500"
            >email already exists</span
          >
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-[100%]">
        <div class="flex flex-col">
          <label for="contact">Contact Ph No.</label>
          <input
            type="text"
            id="contact"
            name="student_phone"
            v-model="userInput.student_phone"
            :class="{ 'outline-red-600 border-red-600': validation.studentPh }"
            class="rounded-lg border bg-gray-100 text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="Enter Your Phone no."
          />
          <span v-if="validation.studentPh" class="relative text-red-600"
            >please fill the phone NO.</span
          >
        </div>
        <div class="flex flex-col">
          <label for="guidancePh">Guidance Ph No</label>
          <input
            type="text"
            id="guidancePh"
            name="guidance_phone"
            v-model="userInput.guidance_phone"
            :class="{ 'outline-red-600 border-red-600': validation.guidancePh }"
            class="rounded-lg border bg-gray-100 text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="Please enter the contact phone number for guidance."
          />
          <span v-if="validation.guidancePh" class="relative text-red-600"
            >please fill the phone NO.</span
          >
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-[100%]">
        <div class="flex flex-col">
          <label for="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="birth_date"
            v-model="userInput.birth_date"
            :class="{ 'outline-red-600 border-red-600': validation.birth }"
            class="rounded-lg bg-gray-100 border text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="
 
Please provide your date of birth."
          />
          <span v-if="validation.birth" class="relative text-red-600"
            >birthday field is required</span
          >
        </div>
        <div class="flex flex-col">
          <label for="facebookAcc">Facebook Account</label>
          <input
            type="text"
            id="facebookAcc"
            name="facebook_link"
            v-model="userInput.facebook_link"
            class="rounded-lg border bg-gray-100 text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="Please enter Your Facebook account Name"
          />
        </div>
      </div>
      <div class="flex flex-col w-[100%]">
        <label for="NRC">NRC No.</label>
        <input
          type="text"
          id="NRC"
          name="student_nrc"
          v-model="userInput.student_nrc"
          :class="{ 'outline-red-600 border-red-600': validation.studentNrc }"
          class="rounded-lg border text-black bg-gray-100 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
          placeholder="Please input your NRC (National Registration Card) number."
        />
        <span class="relative text-red-600" v-if="validation.studentNrc"
          >NRC field is required</span
        >
        <span v-if="nrcAlreadyExist" class="relative text-red-500"
          >NRC already exists</span
        >
      </div>
      <div
        class="border rounded-lg bg-white grid grid-cols-1 gap-3 md:grid-cols-2 w-[100%] p-5"
      >
        <div class="flex flex-col">
          <label for="homeNo">Home no.</label>
          <input
            type="text"
            id="homeNo"
            name="home_no"
            v-model="userInput.home_no"
            :class="{ 'outline-red-600 border-red-600': validation.homeNo }"
            class="rounded-lg border bg-gray-100 text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="
Input your home number."
          />
          <span v-if="validation.homeNo" class="relative text-red-600"
            >please fill the home no.</span
          >
        </div>
        <div class="flex flex-col">
          <label for="street">Street / Road</label>
          <input
            type="text"
            id="street"
            name="street"
            v-model="userInput.street"
            :class="{ 'outline-red-600 border-red-600': validation.street }"
            class="rounded-lg border bg-gray-100 text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="Enter the name of your street or road."
          />
          <span v-if="validation.street" class="relative text-red-600"
            >please fill the street field</span
          >
        </div>
        <div class="flex flex-col">
          <label for="quarter">Quarter/Village</label>
          <input
            type="text"
            id="quarter"
            name="quarter"
            v-model="userInput.quarter"
            :class="{ 'outline-red-600 border-red-600': validation.quarter }"
            class="rounded-lg border bg-gray-100 text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="
Enter your quarter/village name."
          />
          <span v-if="validation.quarter" class="relative text-red-600"
            >please fill the quarter field</span
          >
        </div>
        <div class="flex flex-col">
          <label for="township">Township</label>
          <input
            type="text"
            id="township"
            name="township"
            v-model="userInput.township"
            :class="{ 'outline-red-600 border-red-600': validation.township }"
            class="rounded-lg border bg-gray-100 text-black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            placeholder="Specify your township."
          />
          <span v-if="validation.township" class="relative text-red-600"
            >please enter your township</span
          >
        </div>
      </div>
      <div class="flex justify-start gap-16 w-[100%]">
        <div class="flex flex-col">
          <label for="passport">Do you have Passport? </label>
          <ul class="my-2" id="passport">
            <li>
              <input
                type="radio"
                name="passport"
                v-model="userInput.passport"
                value="yes"
              />
              Yes
            </li>
            <li>
              <input
                type="radio"
                name="passport"
                v-model="userInput.passport"
                value="no"
              />
              No
            </li>
          </ul>
        </div>
        <div class="flex flex-col">
          <label for="gender">Choose Your Gender </label>
          <ul class="my-2" id="gender">
            <li>
              <input
                type="radio"
                name="gender"
                v-model="userInput.gender"
                value="male"
              />
              male
            </li>
            <li>
              <input
                type="radio"
                name="gender"
                v-model="userInput.gender"
                value="female"
              />
              female
            </li>
          </ul>
        </div>
      </div>

      <div class="flex justify-end">
        <button
          @click="postStudentInfo"
          class="flex px-5 py-3 text-center text-white transition-all duration-75 border shadow-md bg-cyan-500 hover:bg-white hover:text-cus-primary"
        >
          Register
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 rounded-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
