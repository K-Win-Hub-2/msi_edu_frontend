import { defineStore } from "pinia";
import { getAxiosClient } from "@/data/axios";

export const useInquiryStore = defineStore("event", {
  state: () => ({
    isSubmitting: false,
    submitError: null,
    submitSuccess: false,
  }),

  actions: {
    async storeInquiry(formData) {
      this.isSubmitting = true;
      this.submitError = null;
      this.submitSuccess = false;

      try {
        const response = await getAxiosClient().post(
          "contact-inquiries",
          formData
        );
        this.submitSuccess = true;
        return response;
      } catch (error) {
        this.submitError = error.response?.data?.errors || error.message;
        throw error;
      } finally {
        this.isSubmitting = false;
      }
    },

    resetSubmitState() {
      this.isSubmitting = false;
      this.submitError = null;
      this.submitSuccess = false;
    },
  },
});
