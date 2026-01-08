<template>
  <div class="pb-12 my-12 border-b">
    <ul class="flex justify-center gap-3 ml-3">
      <li class="md:flex ssm:space-y-3 md:space-y-0">
        <div>
          <button
            @click="selectLocation('yangon')"
            class="px-5 py-3 mx-4 font-bold cursor-pointer hover:bg-cus-primary hover:text-white cus-standout"
            :class="[
              formData.location === 'yangon' ? 'bg-cus-primary text-white' : '',
            ]"
          >
            Yangon Head Office
          </button>
        </div>
        <div>
          <button
            @click="selectLocation('mandalay')"
            :class="[
              formData.location === 'mandalay'
                ? 'bg-cus-primary text-white'
                : '',
            ]"
            class="px-5 py-3 font-bold cursor-pointer hover:bg-cus-primary hover:text-white cus-standout"
          >
            Mandalay Head Office
          </button>
        </div>
      </li>
    </ul>
  </div>

  <!-- Map Section -->
  <div class="w-full lg:px-[290px] mb-8">
    <iframe
      v-if="formData.location === 'yangon'"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15280.079151261436!2d96.1561373!3d16.7756911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec80fae82d59%3A0x3c21ec7739941a7e!2sMSI%20Overseas%20Education!5e0!3m2!1sen!2smm!4v1706601580548!5m2!1sen!2smm"
      height="450"
      class="w-full shadow-lg"
      style="border: 0"
      allowfullscreen
      loading="lazy"
    ></iframe>

    <iframe
      v-else
      src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d925.0554564396675!2d96.0841645!3d21.9644479!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDU3JzUyLjEiTiA5NsKwMDUnMDIuOCJF!5e0!3m2!1sen!2smm!4v1706451947017!5m2!1sen!2smm"
      height="450"
      class="w-full shadow-lg"
      style="border: 0"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>

  <!-- Contact Form -->
  <div class="flex justify-center mb-36">
    <div class="w-[851px] md:flex contact-form overflow-hidden shadow-xl">
      <!-- Contact Information -->
      <div class="w-[363px] h-[453px] bg-gray-50">
        <div class="py-5 px-7">
          <h1 class="text-md font-[600] text-cus-primary">
            Contact Information
          </h1>
          <div class="contact-card py-3 px-5 w-[301px] mt-8">
            <h1 class="text-[16px] text-left font-[600] font-cus-primary mb-3">
              Phone
            </h1>
            <p class="text-[12px] text-left font-[600] text-[#9D0038]">
              {{
                formData.location === "yangon"
                  ? "+95 1 389915, +95 1 381 408"
                  : "+95 9 44444 3917"
              }}
            </p>
          </div>
          <div class="contact-card py-3 px-5 w-[301px] mt-8">
            <h1 class="text-[16px] text-left font-[600] font-cus-primary mb-3">
              Email
            </h1>
            <p class="text-[12px] text-left font-[600] text-[#9D0038]">
              info@msieducation.edu.mm
            </p>
          </div>
          <div class="contact-card py-3 px-5 w-[301px] mt-8">
            <h1 class="mb-3 text-sm font-semibold text-left font-cus-primary">
              Address
            </h1>
            <p
              class="text-[13px] font-semibold text-[#9D0038] leading-relaxed text-left"
              v-html="
                formData.location === 'yangon'
                  ? `No.234, 2nd Fl. (R),<br/> Shwebontha St. (MID BL),<br/>Pabedan Tsp, Yangon,<br/>Myanmar.`
                  : `No. 31/3, Between 79 St × 80 St,<br/>38th St, Mahar Aung Myay Township,<br/>Mandalay, Myanmar (Burma)`
              "
            ></p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="md:w-[488px] md:h-[520px] md:border-l-2 bg-white">
        <!-- Success Message -->
        <div
          v-if="successMessage"
          class="p-4 m-4 text-green-700 bg-green-100 border border-green-300 rounded"
        >
          {{ successMessage }}
        </div>

        <form @submit.prevent="handleSubmit" class="px-12 py-5 text-left">
          <div class="mb-3">
            <label class="text-[15px] font-[600] mb-3">NAME</label>
            <input
              v-model="formData.name"
              type="text"
              placeholder="Name"
              required
              :disabled="isSubmitting"
              class="w-full px-5 py-4 contact-card"
              :class="{ 'border-red-500': errors.name }"
            />
            <span v-if="errors.name" class="text-xs text-red-500">{{
              errors.name[0]
            }}</span>
          </div>

          <div class="mb-3">
            <label class="text-[15px] font-[600] mb-3">EMAIL</label>
            <input
              v-model="formData.email"
              type="email"
              placeholder="Email"
              required
              :disabled="isSubmitting"
              class="w-full px-5 py-4 contact-card"
              :class="{ 'border-red-500': errors.email }"
            />
            <span v-if="errors.email" class="text-xs text-red-500">{{
              errors.email[0]
            }}</span>
          </div>

          <div class="mb-3">
            <label class="text-[15px] font-[600] mb-3">PHONE NUMBER</label>
            <input
              v-model="formData.phone"
              type="tel"
              placeholder="Phone number"
              required
              :disabled="isSubmitting"
              class="w-full px-5 py-4 contact-card"
              :class="{ 'border-red-500': errors.phone }"
            />
            <span v-if="errors.phone" class="text-xs text-red-500">{{
              errors.phone[0]
            }}</span>
          </div>

          <div class="mb-2">
            <textarea
              v-model="formData.message"
              class="w-full px-5 pt-4 contact-card"
              placeholder="Write your question here..."
              cols="30"
              rows="4"
              required
              :disabled="isSubmitting"
              :class="{ 'border-red-500': errors.message }"
            ></textarea>
            <span v-if="errors.message" class="text-xs text-red-500">{{
              errors.message[0]
            }}</span>
          </div>

          <div>
            <div class="flex items-center">
              <input
                v-model="formData.agreeTerms"
                type="checkbox"
                class="w-5 h-5"
                :disabled="isSubmitting"
              />
              <h1 class="ml-4 py-2 md:text-normal ssm:text-[12px]">
                You agree to the terms and conditions
              </h1>
            </div>
          </div>

          <div class="float-right mb-5">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-8 py-2 sent-button disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? "Sending..." : "Send" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useContactStore } from "../stores/contact";
import axios from "axios";

const ContactStore = useContactStore();

const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
  agreeTerms: false,
  location: "yangon",
});

const errors = ref({});
const successMessage = ref("");
const isSubmitting = ref(false);

const selectLocation = (location) => {
  formData.value.location = location;
};

const handleSubmit = async () => {
  errors.value = {};
  successMessage.value = "";

  if (!formData.value.agreeTerms) {
    alert("Please agree to the terms and conditions");
    return;
  }

  isSubmitting.value = true;

  try {
    const payload = {
      name: formData.value.name,
      email: formData.value.email,
      phone: formData.value.phone,
      message: formData.value.message,
      agree_terms: formData.value.agreeTerms,
      location: formData.value.location,
    };

    const response = await ContactStore.storeContact(payload);

    if (response.data.success) {
      successMessage.value = response.data.message;

      // Reset form
      formData.value = {
        name: "",
        email: "",
        phone: "",
        message: "",
        agreeTerms: false,
        location: formData.value.location, // Keep location
      };

      // Scroll to success message
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  } catch (error) {
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors || {};
      const errorMessages = Object.values(errors.value).flat().join("\n");
      alert("Validation errors:\n" + errorMessages);
    } else {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to submit form. Please try again.";
      alert(errorMessage);
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.bgDot {
  background-image: url("@/assets/img/bgDot.png");
  background-repeat: repeat;
  background-size: 100%;
}

.contact-card {
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.sent-button {
  background: linear-gradient(to right, #fcd34d, #fb923c);
  border-radius: 8px;
  color: #1f2937;
  font-weight: 600;
  transition: all 0.3s;
}

.sent-button:hover:not(:disabled) {
  background: linear-gradient(to right, #fbbf24, #f97316);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
