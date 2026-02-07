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
  <div class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50" style="margin-top:6rem;">
    <div class="w-full max-w-xl bg-white shadow-2xl rounded-2xl">
      
      <div class="p-6 md:p-10">
        <div
          v-if="successMessage"
          class="p-4 mb-6 text-green-700 bg-green-100 border border-green-300 rounded-lg"
        >
          {{ successMessage }}
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div class="text-left">
            <label class="block mb-2 text-xs font-bold text-gray-700 uppercase tracking-wide">Name</label>
            <input
              v-model="formData.name"
              type="text"
              placeholder="Enter your name"
              required
              :disabled="isSubmitting"
              class="w-full px-4 py-3 text-sm transition-all bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white disabled:opacity-50"
              :class="{ 'border-red-500': errors.name }"
            />
            <span v-if="errors.name" class="text-xs text-red-500">{{ errors.name[0] }}</span>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div class="text-left">
              <label class="block mb-2 text-xs font-bold text-gray-700 uppercase tracking-wide">Email</label>
              <input
                v-model="formData.email"
                type="email"
                placeholder="Email"
                required
                class="w-full px-4 py-3 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
              />
            </div>
            <div class="text-left">
              <label class="block mb-2 text-xs font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
              <input
                v-model="formData.phone"
                type="tel"
                placeholder="Phone number"
                required
                class="w-full px-4 py-3 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div class="text-left">
              <label class="block mb-2 text-xs font-bold text-gray-700 uppercase tracking-wide">Date of Birth</label>
              <input
                v-model="formData.dateOfBirth"
                type="date"
                required
                class="w-full px-4 py-3 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div class="text-left">
              <label class="block mb-2 text-xs font-bold text-gray-700 uppercase tracking-wide">Guidance Phone</label>
              <input
                v-model="formData.guidancePhone"
                type="tel"
                placeholder="Guidance phone"
                required
                class="w-full px-4 py-3 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="text-left">
              <label class="block mb-2 text-xs font-bold text-gray-700 uppercase tracking-wide">Home No</label>
              <input v-model="formData.homeNo" type="text" placeholder="No." class="w-full px-4 py-3 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div class="text-left">
              <label class="block mb-2 text-xs font-bold text-gray-700 uppercase tracking-wide">Street</label>
              <input v-model="formData.street" type="text" placeholder="Street" class="w-full px-4 py-3 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div class="text-left">
              <label class="block mb-2 text-xs font-bold text-gray-700 uppercase tracking-wide">Quarter</label>
              <input v-model="formData.quarter" type="text" placeholder="Quarter" class="w-full px-4 py-3 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div class="text-left">
              <label class="block mb-2 text-xs font-bold text-gray-700 uppercase tracking-wide">Township</label>
              <input v-model="formData.township" type="text" placeholder="Township" class="w-full px-4 py-3 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>

          <div class="text-left">
            <label class="block mb-2 text-xs font-bold text-gray-700 uppercase tracking-wide">Inquiry Message</label>
            <textarea
              v-model="formData.message"
              rows="3"
              required
              class="w-full px-4 py-3 text-sm bg-gray-100 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Write your questions here..."
            ></textarea>
          </div>

          <div class="grid grid-cols-2 gap-6 py-2">
            <div class="text-left">
              <p class="mb-3 text-sm font-bold text-gray-800">Do you have passport?</p>
              <div class="flex flex-col space-y-2">
                <label class="inline-flex items-center cursor-pointer">
                  <input v-model="formData.hasPassport" type="radio" :value="true" name="passport" class="w-4 h-4 text-blue-600" />
                  <span class="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label class="inline-flex items-center cursor-pointer">
                  <input v-model="formData.hasPassport" type="radio" :value="false" name="passport" class="w-4 h-4 text-blue-600" />
                  <span class="ml-2 text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>
            <div class="text-left">
              <p class="mb-3 text-sm font-bold text-gray-800">Do you have IELTS/Duolingo?</p>
              <div class="flex flex-col space-y-2">
                <label class="inline-flex items-center cursor-pointer">
                  <input v-model="formData.hasIELTS" type="radio" :value="true" name="ielts" class="w-4 h-4 text-blue-600" />
                  <span class="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label class="inline-flex items-center cursor-pointer">
                  <input v-model="formData.hasIELTS" type="radio" :value="false" name="ielts" class="w-4 h-4 text-blue-600" />
                  <span class="ml-2 text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>
          </div>

          <div class="flex items-center space-x-3 text-left">
            <input
              v-model="formData.agreeTerms"
              type="checkbox"
              class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <label class="text-sm font-medium text-gray-700 cursor-pointer">
              Agree to terms and conditions
            </label>
          </div>

          <div class="pt-4">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-4 text-base font-bold text-gray-900 transition-all rounded-xl bg-gradient-to-r from-yellow-300 to-orange-400 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              {{ isSubmitting ? "Sending..." : "Send Message" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
