<script setup>
import { ref, computed } from "vue";
import { useInquiryStore } from "../stores/inquiry";
import Button from "../components/partials/Button.vue";

const InquiryStore = useInquiryStore();

const formData = ref({
  name: "",
  dateOfBirth: "",
  email: "",
  phone: "",
  guidancePhone: "",
  homeNo: "",
  street: "",
  quarter: "",
  township: "",
  message: "",
  hasPassport: null,
  hasIELTS: null,
  agreeTerms: false,
});

const errors = ref({});
const successMessage = ref("");

// Computed properties from store
const isSubmitting = computed(() => InquiryStore.isSubmitting);
const submitError = computed(() => InquiryStore.submitError);

const handleSubmit = async () => {
  // Clear previous errors and messages
  errors.value = {};
  successMessage.value = "";
  InquiryStore.resetSubmitState();

  // Client-side validation
  if (!formData.value.agreeTerms) {
    alert("Please agree to the terms and conditions");
    return;
  }

  if (formData.value.hasPassport === null) {
    errors.value.hasPassport = "Please select if you have a passport";
    return;
  }

  if (formData.value.hasIELTS === null) {
    errors.value.hasIELTS = "Please select if you have IELTS";
    return;
  }
  console.log("Types:", {
    has_passport: typeof formData.has_passport,
    has_ielts: typeof formData.has_ielts,
    agree_terms: typeof formData.agree_terms,
  });
  try {
    const payload = {
      name: formData.value.name,
      date_of_birth: formData.value.dateOfBirth,
      email: formData.value.email,
      phone: formData.value.phone,
      guidance_phone: formData.value.guidancePhone,
      home_no: formData.value.homeNo,
      street: formData.value.street,
      quarter: formData.value.quarter,
      township: formData.value.township,
      message: formData.value.message,
      // Convert to actual boolean (not string)
      has_passport: formData.value.hasPassport,
      has_ielts: formData.value.hasIELTS,
      agree_terms: formData.value.agreeTerms,
    };

    // In your Pinia store, before the axios call
    console.log("Sending payload:", payload);

    // Make API request through Pinia store
    const response = await InquiryStore.storeInquiry(payload);

    if (response.data.success) {
      successMessage.value =
        response.data.message ||
        "Your inquiry has been submitted successfully!";

      // Reset form
      formData.value = {
        name: "",
        dateOfBirth: "",
        email: "",
        phone: "",
        guidancePhone: "",
        homeNo: "",
        street: "",
        quarter: "",
        township: "",
        message: "",
        hasPassport: null,
        hasIELTS: null,
        agreeTerms: false,
      };
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
      console.error("Submission error:", error);
    }
  }
};
</script>

<template>
  <div class="flex justify-center py-12 bg-gray-50" style="margin-top: 80px">
    <div
      class="flex mt-5 overflow-hidden bg-white shadow-2xl md:w-[900px] ssm:w-full ssm:mx-4 rounded-2xl md:flex-row ssm:flex-col"
    >
      <!-- Left Side - Contact Information -->
      <div
        class="md:w-[380px] bg-white border-r border-gray-200 p-8 ssm:border-r-0 ssm:border-b text-left"
      >
        <h2 class="mb-8 text-2xl font-bold text-left text-gray-900">
          Contact Information
        </h2>

        <!-- Phone Card -->
        <div class="p-5 mb-6 text-left rounded-lg bg-gray-50">
          <h3 class="mb-3 text-base font-bold text-left text-gray-900">
            Phone
          </h3>
          <p class="text-sm font-semibold text-[#9D0038] text-left">
            +95 1 389915, +95 1 381 408
          </p>
        </div>

        <!-- Email Card -->
        <div class="p-5 mb-6 text-left rounded-lg bg-gray-50">
          <h3 class="mb-3 text-base font-bold text-left text-gray-900">
            Email
          </h3>
          <p class="text-sm font-semibold text-[#9D0038] text-left">
            info@msieducation.edu.mm
          </p>
        </div>

        <!-- Address Card -->
        <div class="p-5 text-left rounded-lg bg-gray-50">
          <h3 class="mb-3 text-base font-bold text-left text-gray-900">
            Address
          </h3>
          <p
            class="text-sm font-semibold leading-relaxed text-[#9D0038] text-left"
          >
            No.234, 2nd Fl. (R),<br />
            Shwebontha St. (MID BL),<br />
            Pabedan Tsp, Yangon,<br />
            Myanmar.
          </p>
        </div>
      </div>

      <!-- Right Side - Form -->
      <div class="md:w-[520px] p-8 ssm:p-6">
        <!-- Success Message -->
        <div
          v-if="successMessage"
          class="p-4 mb-4 text-green-700 bg-green-100 border border-green-300 rounded-lg"
        >
          {{ successMessage }}
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          <!-- Name -->
          <div class="text-left">
            <label
              class="block mb-2 text-sm font-bold text-left text-gray-900 uppercase"
              >Name</label
            >
            <input
              v-model="formData.name"
              type="text"
              placeholder="Name"
              required
              :disabled="isSubmitting"
              class="w-full px-4 py-3 text-sm text-left transition-all bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              :class="{ 'border-red-500': errors.name }"
            />
            <span v-if="errors.name" class="text-xs text-red-500">{{
              errors.name[0]
            }}</span>
          </div>

          <!-- Email -->
          <div class="text-left">
            <label
              class="block mb-2 text-sm font-bold text-left text-gray-900 uppercase"
              >Email</label
            >
            <input
              v-model="formData.email"
              type="email"
              placeholder="Email"
              required
              :disabled="isSubmitting"
              class="w-full px-4 py-3 text-sm text-left transition-all bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              :class="{ 'border-red-500': errors.email }"
            />
            <span v-if="errors.email" class="text-xs text-red-500">{{
              errors.email[0]
            }}</span>
          </div>

          <!-- Phone Number -->
          <div class="text-left">
            <label
              class="block mb-2 text-sm font-bold text-left text-gray-900 uppercase"
              >Phone Number</label
            >
            <input
              v-model="formData.phone"
              type="tel"
              placeholder="Phone number"
              required
              :disabled="isSubmitting"
              class="w-full px-4 py-3 text-sm text-left transition-all bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              :class="{ 'border-red-500': errors.phone }"
            />
            <span v-if="errors.phone" class="text-xs text-red-500">{{
              errors.phone[0]
            }}</span>
          </div>

          <!-- Date of Birth -->
          <div class="text-left">
            <label
              class="block mb-2 text-sm font-bold text-left text-gray-900 uppercase"
              >Date of Birth</label
            >
            <input
              v-model="formData.dateOfBirth"
              type="date"
              required
              :disabled="isSubmitting"
              class="w-full px-4 py-3 text-sm text-left transition-all bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              :class="{ 'border-red-500': errors.date_of_birth }"
            />
            <span v-if="errors.date_of_birth" class="text-xs text-red-500">{{
              errors.date_of_birth[0]
            }}</span>
          </div>

          <!-- Guidance Phone -->
          <div class="text-left">
            <label
              class="block mb-2 text-sm font-bold text-left text-gray-900 uppercase"
              >Guidance's Phone</label
            >
            <input
              v-model="formData.guidancePhone"
              type="tel"
              placeholder="Guidance's phone number"
              required
              :disabled="isSubmitting"
              class="w-full px-4 py-3 text-sm text-left transition-all bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              :class="{ 'border-red-500': errors.guidance_phone }"
            />
            <span v-if="errors.guidance_phone" class="text-xs text-red-500">{{
              errors.guidance_phone[0]
            }}</span>
          </div>

          <!-- Home No & Street Row -->
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="text-left">
              <label
                class="block mb-2 text-sm font-bold text-left text-gray-900 uppercase"
                >Home No</label
              >
              <input
                v-model="formData.homeNo"
                type="text"
                placeholder="Home number"
                required
                :disabled="isSubmitting"
                class="w-full px-4 py-3 text-sm text-left transition-all bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                :class="{ 'border-red-500': errors.home_no }"
              />
              <span v-if="errors.home_no" class="text-xs text-red-500">{{
                errors.home_no[0]
              }}</span>
            </div>
            <div class="text-left">
              <label
                class="block mb-2 text-sm font-bold text-left text-gray-900 uppercase"
                >Street/Road</label
              >
              <input
                v-model="formData.street"
                type="text"
                placeholder="Street or road"
                required
                :disabled="isSubmitting"
                class="w-full px-4 py-3 text-sm text-left transition-all bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                :class="{ 'border-red-500': errors.street }"
              />
              <span v-if="errors.street" class="text-xs text-red-500">{{
                errors.street[0]
              }}</span>
            </div>
          </div>

          <!-- Quarter & Township Row -->
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="text-left">
              <label
                class="block mb-2 text-sm font-bold text-left text-gray-900 uppercase"
                >Quarter/Village</label
              >
              <input
                v-model="formData.quarter"
                type="text"
                placeholder="Quarter or village"
                required
                :disabled="isSubmitting"
                class="w-full px-4 py-3 text-sm text-left transition-all bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                :class="{ 'border-red-500': errors.quarter }"
              />
              <span v-if="errors.quarter" class="text-xs text-red-500">{{
                errors.quarter[0]
              }}</span>
            </div>
            <div class="text-left">
              <label
                class="block mb-2 text-sm font-bold text-left text-gray-900 uppercase"
                >Township</label
              >
              <input
                v-model="formData.township"
                type="text"
                placeholder="Township"
                required
                :disabled="isSubmitting"
                class="w-full px-4 py-3 text-sm text-left transition-all bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                :class="{ 'border-red-500': errors.township }"
              />
              <span v-if="errors.township" class="text-xs text-red-500">{{
                errors.township[0]
              }}</span>
            </div>
          </div>

          <!-- Message -->
          <div class="text-left">
            <label
              class="block mb-2 text-sm font-bold text-left text-gray-900 uppercase"
              >Inquiry Message</label
            >
            <textarea
              v-model="formData.message"
              rows="4"
              required
              :disabled="isSubmitting"
              class="w-full px-4 py-3 text-sm text-left transition-all bg-gray-100 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              :class="{ 'border-red-500': errors.message }"
              placeholder="Write your questions here ..."
            ></textarea>
            <span v-if="errors.message" class="text-xs text-red-500">{{
              errors.message[0]
            }}</span>
          </div>

          <!-- Radio Buttons -->
          <div class="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2">
            <div class="text-left">
              <p class="mb-3 text-sm font-bold text-left text-gray-900">
                Do you have passport?
              </p>
              <div class="space-y-2">
                <label class="flex items-center space-x-3 cursor-pointer">
                  <input
                    v-model="formData.hasPassport"
                    type="radio"
                    :value="true"
                    name="passport"
                    :disabled="isSubmitting"
                    class="w-5 h-5 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                  />
                  <span class="text-sm text-gray-700">Yes</span>
                </label>
                <label class="flex items-center space-x-3 cursor-pointer">
                  <input
                    v-model="formData.hasPassport"
                    type="radio"
                    :value="false"
                    name="passport"
                    :disabled="isSubmitting"
                    class="w-5 h-5 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                  />
                  <span class="text-sm text-gray-700">No</span>
                </label>
              </div>
              <span v-if="errors.hasPassport" class="text-xs text-red-500">{{
                errors.hasPassport
              }}</span>
            </div>
            <div class="text-left">
              <p class="mb-3 text-sm font-bold text-left text-gray-900">
                Do you have IELTS?
              </p>
              <div class="space-y-2">
                <label class="flex items-center space-x-3 cursor-pointer">
                  <input
                    v-model="formData.hasIELTS"
                    type="radio"
                    :value="true"
                    name="ielts"
                    :disabled="isSubmitting"
                    class="w-5 h-5 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                  />
                  <span class="text-sm text-gray-700">Yes</span>
                </label>
                <label class="flex items-center space-x-3 cursor-pointer">
                  <input
                    v-model="formData.hasIELTS"
                    type="radio"
                    :value="false"
                    name="ielts"
                    :disabled="isSubmitting"
                    class="w-5 h-5 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                  />
                  <span class="text-sm text-gray-700">No</span>
                </label>
              </div>
              <span v-if="errors.hasIELTS" class="text-xs text-red-500">{{
                errors.hasIELTS
              }}</span>
            </div>
          </div>

          <!-- Terms Checkbox -->
          <div class="flex items-start pt-2 space-x-3 text-left">
            <input
              v-model="formData.agreeTerms"
              type="checkbox"
              :disabled="isSubmitting"
              class="w-5 h-5 mt-0.5 text-blue-600 rounded focus:ring-blue-500 disabled:opacity-50"
            />
            <label class="text-sm text-left text-gray-900">
              You agree to the terms and conditions
            </label>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end pt-4">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-10 py-3 text-base font-semibold text-gray-900 transition-all duration-300 rounded-lg bg-gradient-to-r from-yellow-300 to-orange-300 hover:from-yellow-400 hover:to-orange-400 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? "Sending..." : "Send" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
