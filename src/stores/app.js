import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      navbar: false,
      scholarshipDetail: false,
      scholar: [],
      appointmentDate: "",
      appointmentTime: "",
    };
  },
  actions: {},
});
