<template>
  <div class="flex justify-center mt-[120px] relative">
    <div
      class="bg-[url(@/assets/img/scholarship/image.png)] w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute top-0"
    ></div>
    <div class="relative z-40">
      <div
        class="xl:w-[926px] md:w-[700px] sm:w-[600px] rounded-lg border flex justify-center mb-20 registerForm"
      >
        <div class="">
          <h1 class="md:text-[28px] xl:text-xl text-center mt-10 mb-16">
            <span
              class="text-cus-secondary xl:text-lg md:text-[28px] sm:text-md sm:font-[600] xl:font-[600] md:font-[600]"
              >“15th MSI Global Education Exhibition”
            </span>
          </h1>

          <div class="md:flex justify-center">
            <div
              class="flex justify-between xl:w-full lg:600px md:w-[600px] sm:w-[400px]"
            >
              <div class="mb-10 sm:min-w-56">
                <div class="xl:text-md md:text-sm xl:font-[600] md:font-[400]">
                  <p>
                    Date :
                    <span class="ml-3">21st May 2022 (Sat)</span>
                  </p>
                </div>

                <div class="xl:text-md md:text-sm xl:font-[600] md:font-[400]">
                  <p>
                    Time :
                    <span class="ml-3">1 p.m to 3 P.m</span>
                  </p>
                </div>
                <div class="xl:text-md md:text-sm xl:font-[600] md:font-[400]">
                  <p>
                    Vanue :
                    <span class="ml-3">Zoom Webinar </span>
                  </p>
                </div>
              </div>
              <!-- <div class="">
                <div class="">
                  <div
                    class="float-right w-[260px] bg-[#EEEEEE] rounded-[62px]"
                  >
                    <button
                      @click="yangon = !yangon"
                      class="w-[130px] h-[40px] rounded-[62px]"
                      :class="[yangon ? 'Ygn-Mdy-btn' : 'bg-[#EEEEEE]']"
                    >
                      Yangon
                    </button>
                    <button
                      @click="yangon = !yangon"
                      class="w-[130px] h-[40px] bg-[#EEEEEE] rounded-[62px]"
                      :class="[!yangon ? 'Ygn-Mdy-btn' : 'bg-[#EEEEEE]']"
                    >
                      Mandalay
                    </button>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <div class="flex justify-center">
            <form class="md:w-600px" @submit.prevent="handleRegister">
              <div class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px]">
                <label for="name">Name</label>
                <input
                  :class="[nameError ? 'border-red-500' : '']"
                  v-model="name"
                  type="text"
                  id="name"
                  class="rounded-lg border text-black w-full bg-gray-100 block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
                  placeholder="Enter Your Name"
                />
                <small v-if="nameError" class="text-red-500">{{
                  nameError[0]
                }}</small>
              </div>
              <div class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px]">
                <label for="name">Phone</label>
                <input
                  :class="[phoneError ? 'border-red-500' : '']"
                  v-model="phone"
                  type="number"
                  id="name"
                  class="rounded-lg border text-black w-full bg-gray-100 block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
                  placeholder="Enter Your Phone Number"
                />
                <small v-if="phoneError" class="text-red-500">{{
                  nameError[0]
                }}</small>
              </div>
              <div class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px]">
                <label for="name">Email</label>
                <input
                  :class="[emailError ? 'border-red-500' : '']"
                  v-model="email"
                  type="email"
                  id="name"
                  class="rounded-lg border text-black w-full bg-gray-100 block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
                  placeholder="Enter Your Email"
                />
                <small v-if="emailError" class="text-red-500">{{
                  nameError[0]
                }}</small>
              </div>
              <div class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px]">
                <label for="name">Education Level</label>
                <textarea
                  :class="[education_levelError ? 'border-red-500' : '']"
                  v-model="education_level"
                  type="text"
                  id="name"
                  rows="3"
                  class="resize-none rounded-lg border bg-gray-100 text-black w-full block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
                  placeholder="Indicate your current level of education."
                />
                <small v-if="education_levelError" class="text-red-500">{{
                  education_levelError[0]
                }}</small>
              </div>
              <div class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px]">
                <label for="name">Interested Field Of Study </label>
                <input
                  v-model="interest_field"
                  type="text"
                  id="name"
                  :class="[interest_field ? 'border-red-500' : '']"
                  class="rounded-lg border bg-gray-100 text-black w-full block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
                  placeholder="Please indicate the courses you are interested in"
                />
                <small v-if="interest_fieldError" class="text-red-500">{{
                  interest_fieldError[0]
                }}</small>
              </div>
              <div class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px]">
                <label for="name"> Interested Country To Study</label>
                <input
                  v-model="interest_country"
                  type="text"
                  id="name"
                  :class="[interest_countryError ? 'border-red-500' : '']"
                  class="rounded-lg border bg-gray-100 text-black w-full block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
                  placeholder="Please indicate the courses you are interested in"
                />
                <small v-if="interest_countryError" class="text-red-500">{{
                  interest_countryError[0]
                }}</small>
              </div>
              <div class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px]">
                <label for="name">Address </label>
                <textarea
                  name=""
                  v-model="address"
                  class="resize-none bg-gray-100 rounded-lg border text-black w-full block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
                  :class="[addressError ? 'border-red-500' : '']"
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Enter your Address "
                ></textarea>
                <small v-if="addressError" class="text-red-500">{{
                  addressError[0]
                }}</small>
              </div>
              <div class="ml-[360px]">
                <Button
                  class="lg:px-[82px] mb-20 md:px-[20px] lg:text-[18px] px-[17px] lg:py-[16px] md:py-[18px] py-[2px] rounded-[20px] md:text-[9px] float-right"
                  type="gradient"
                  data-te-toggle="modal"
                  data-te-target="#appointmentFormModal"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import axios from "axios";
import { onMounted, ref } from "vue";
import Button from "../partials/Button.vue";
const yangon = ref(true);
const props = defineProps(["id"]);
// input data
const name = ref();
const phone = ref();
const email = ref();
const address = ref("");
const education_level = ref();
const interest_field = ref();
const interest_country = ref();
// validate
const nameError = ref();
const phoneError = ref();
const emailError = ref();
const addressError = ref("");
const education_levelError = ref();
const interest_fieldError = ref();
const interest_countryError = ref();
const event_id = ref();
const $toast = useToast();
const registeredEvents = ref(null);

const registerList = async () => {
  const res = await axios.get(
    "http://adminpanel.msieducation.edu.mm/api/student/event/register/list"
  );
  if (res) {
    registeredEvents.value = res.data.data.filter((d) => {
      return d.event_id == props.id;
    });
    console.log(registeredEvents.value);
  }
};

const handleRegister = async () => {
  const existData = registeredEvents.value.filter((r) => {
    return r.email == email.value;
  });

  if (existData.length) {
    $toast.error("Event already Registered ");
  } else {
    try {
      const res = await axios.post(
        "http://adminpanel.msieducation.edu.mm/api/student/event/register",
        {
          name: name.value,
          phone: phone.value,
          email: email.value,
          education_level: education_level.value,
          interest_field: interest_field.value,
          interest_country: interest_country.value,
          address: address.value,
          event_id: props.id,
        }
      );
      if (res) {
        registerList();
        $toast.success("Event Register Success");
        name.value = "";
        phone.value = "";
        email.value = "";
        education_level.value = "";
        interest_field.value = "";
        interest_country.value = "";
        address.value = "";
        nameError.value = false;
        phoneError.value = false;
        emailError.value = false;
        addressError.value = false;
        education_levelError.value = false;
        interest_fieldError.value = false;
        interest_countryError.value = false;
      }
    } catch (error) {
      nameError.value = error.response.data.errors.name;
      phoneError.value = error.response.data.errors.phone;
      emailError.value = error.response.data.errors.email;
      addressError.value = error.response.data.errors.address;
      education_levelError.value = error.response.data.errors.education_level;
      interest_fieldError.value = error.response.data.errors.interest_field;
      interest_countryError.value = error.response.data.errors.interest_country;
      console.log(error.response.data.errors.address);
    }
  }
};

onMounted(() => {
  registerList();
});
</script>

<style lang="scss" scoped></style>
