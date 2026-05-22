import { defineStore } from "pinia";
import { getAxiosClient } from "@/data/axios";

export const useInquiryStore = defineStore("inquiry", {
  state: () => ({
    isSubmitting: false,
    submitError: null,
    submitSuccess: false,
    isLoadingConfig: false,
  }),

  actions: {
    async fetchFormConfig(countryId) {
      this.isLoadingConfig = true;
      try {
        const response = await getAxiosClient().get('forms/config', { 
          params: { country_id: countryId } 
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching form config:", error);
        throw error;
      } finally {
        this.isLoadingConfig = false;
      }
    },

    async storeInquiry(payload) {
      this.isSubmitting = true;
      this.submitError = null;
      this.submitSuccess = false;

      try {
        // payload should be { country_id: 1, submission_data: { ... } }
        const response = await getAxiosClient().post(
          "forms/submit",
          payload
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
