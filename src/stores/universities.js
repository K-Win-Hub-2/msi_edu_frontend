import { defineStore } from "pinia";
import { getAxiosClient } from "@/data/axios";
import { Axios } from "axios";
export const useUniversityStore = defineStore("university", {
  state: () => ({
    // user: JSON.parse(sessionStorage.getItem("DATA")),
  }),
  actions: {
    fetchUniversities() {
      return getAxiosClient()
        .get(`https://adminpanel.msieducation.edu.mm/api/allUniversityList`)
        .then((res) => {
          return res;
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchUniversity(payload) {
      return getAxiosClient()
        .get(
          `https://adminpanel.msieducation.edu.mm/api/universityList/${payload}`
        )

        .then((res) => {
          return res;
        })
        .catch((error) => {
          throw error;
        });
    },
  },
});
