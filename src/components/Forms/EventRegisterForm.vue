<template>
  <div
    class="flex justify-center md:mt-[50px] lg:mt-[130px] ssm:mt-[40px] relative"
    v-if="currentEvent"
  >
    <div
      class="bg-[url(@/assets/img/scholarship/image.png)] w-[100%] h-[100%] bg-no-repeat bg-[length:100%_100%] absolute top-0"
    ></div>
    <div class="relative z-40">
      <div
        class="xl:w-[926px] md:w-[700px] ssm:w-[310px] sm:w-[390px] rounded-lg md:border flex justify-center mb-20 overflow-hidden mt-5 px-2"
      >
        <div class="">
          <h1
            class="md:text-[28px] ssm:text-[23px] text-cus-secondary font-semibold xl:text-lg text-center ssm:mt-1 ssm:mb-3 sm:mt-10 sm:mb-10 sm:text-md"
          >
            “ {{ currentEvent.title }} ”
          </h1>
          <hr class="md:hidden" />

          <div class="justify-center mt-2 md:flex">
            <div
              class="flex justify-center xl:w-full lg:600px md:w-[600px] ssm:w-[370px]"
            >
              <div class="mb-10 ssm:ml-16 md:ml-8 lg:ml-24">
                <div
                  class="xl:text-md md:text-ssm xl:font-[550] md:font-[550] md:ml-2"
                >
                  <div class="flex text-cus-primary smm:text-sm">
                    <p
                      class="lg:min-w-[110px] md:min-w-[80px] ssm:min-w-[70px]"
                    >
                      Date :
                    </p>
                    <p>{{ currentEvent.start_date }}</p>
                  </div>
                </div>

                <div
                  class="xl:text-md md:text-ssm text-cus-primary xl:font-[550] md:font-[550] md:ml-2"
                >
                  <div class="flex">
                    <p
                      class="lg:min-w-[110px] md:min-w-[80px] ssm:min-w-[70px]"
                    >
                      Time :
                    </p>
                    <p>
                      {{ currentEvent.start_time }} -
                      {{ currentEvent.end_time }}
                    </p>
                  </div>
                </div>
                <div
                  class="xl:text-md md:text-sm text-cus-primary xl:font-[550] md:font-[550] md:ml-2"
                >
                  <div class="flex">
                    <p
                      class="lg:min-w-[110px] md:min-w-[80px] ssm:min-w-[70px]"
                    >
                      Venue :
                    </p>
                    <p>{{ currentEvent.venue }}</p>
                  </div>
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
            <form
              class="md:w-[600px] lg:mr-52 ssm:w-[360px] ssm:ml-16"
              @submit.prevent="handleRegister"
            >
              <div
                class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px] ssm:w-[300px]"
              >
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
              <div
                class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px] ssm:w-[300px]"
              >
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

              <div
                class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px] ssm:w-[300px]"
              >
                <label for="name">Email</label>
                <input
                  :class="[emailError ? 'border-red-500' : '']"
                  v-model="email"
                  type="email"
                  id="name"
                  class="rounded-lg border text-black w-full bg-gray-100 block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
                  placeholder="Enter Your Email Address"
                />
                <small v-if="emailError" class="text-red-500">{{
                  nameError[0]
                }}</small>
              </div>
              <div
                class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px] ssm:w-[300px]"
              >
                <label for="name">Education Level</label>
                <textarea
                  :class="[education_levelError ? 'border-red-500' : '']"
                  v-model="education_level"
                  type="text"
                  id="name"
                  rows="3"
                  class="resize-none rounded-lg border bg-gray-100 text-black w-full block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
                  placeholder="Indicate your current education level"
                />
                <small v-if="education_levelError" class="text-red-500">{{
                  education_levelError[0]
                }}</small>
              </div>
              <div
                class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px] ssm:w-[300px]"
              >
                <label for="name">Interested Field Of Study </label>
                <input
                  v-model="interest_field"
                  type="text"
                  id="name"
                  :class="[interest_fieldError ? 'border-red-500' : '']"
                  class="rounded-lg border bg-gray-100 text-black w-full block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
                  placeholder="Please Indicate The Courses You Are Interested In"
                />
                <small v-if="interest_fieldError" class="text-red-500">{{
                  interest_fieldError[0]
                }}</small>
              </div>
              <div
                class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px] ssm:w-[300px]"
              >
                <label for="name"> Interested Country To Study</label>
                <input
                  v-model="interest_country"
                  type="text"
                  id="name"
                  :class="[interest_countryError ? 'border-red-500' : '']"
                  class="rounded-lg border bg-gray-100 text-black w-full block flex-1 min-w-0 text-sm border-gray-300 p-2.5"
                  placeholder="Please indicate the country you are interested in"
                />
                <small v-if="interest_countryError" class="text-red-500">{{
                  interest_countryError[0]
                }}</small>
              </div>
              <div
                class="flex flex-col mb-[26px] lg:w-[800px] md:w-[580px] ssm:w-[300px]"
              >
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
              <div class="lg:w-[820px] md:w-[600px] ssm:w-[320px]">
                <Button
                  @click="toRegisterForm"
                  class="flex items-center float-right mb-20 ssm:px-5 lg:px-10 lg:py-5 ssm:py-2 ssm:mr-5"
                  type="gradient"
                  data-te-toggle="modal"
                  data-te-target="#appointmentFormModal"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <div class="" v-if="loading">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                  <div>Submit</div>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center mt-52" v-else>
    <div role="status flex justify-center items-center w-full h-[600px]">
      <div class="">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
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
import { useEventStore } from "../../stores/event";
const existData = ref(null);
const yangon = ref(true);
const props = defineProps(["id"]);
const eventStore = useEventStore();
const currentEvent = ref(null);
const loading = ref(false);
// input data
const name = ref();
const phone = ref();
const email = ref();
const address = ref("");
const education_level = ref();
const interest_field = ref();
const interest_country = ref();
const events = ref(null);
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

const fetchData = async () => {
  const res = await eventStore.fetchEvent();
  events.value = res.data.latestEvent;
  res.data.latestEvent.map((event) => {
    if (props.id == event.id) {
      currentEvent.value = event;
    }
  });
};

const registerList = async () => {
  const res = await axios.get(
    "http://adminpanel.msieducation.edu.mm/api/student/event/register/list"
  );
  if (res) {
    registeredEvents.value = res.data.data.filter((d) => {
      return d.event_id == props.id;
    });
  }
};

const handleRegister = async () => {
  const existData = registeredEvents.value.filter((r) => {
    return r.email == email.value;
  });

  if (existData.length) {
    $toast.error("Event already Registered ", { position: "top-right" });
    registerList();
  } else {
    try {
      loading.value = true;
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
        loading.value = false;
        $toast.success("Event Register Success", { position: "top-right" });
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
      loading.value = false;
      nameError.value = error.response.data.errors.name;
      phoneError.value = error.response.data.errors.phone;
      emailError.value = error.response.data.errors.email;
      addressError.value = error.response.data.errors.address;
      education_levelError.value = error.response.data.errors.education_level;
      interest_fieldError.value = error.response.data.errors.interest_field;
      interest_countryError.value = error.response.data.errors.interest_country;
    }
  }
};

onMounted(() => {
  registerList();
  fetchData();
});
</script>

<style lang="scss" scoped></style>
