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
        .get(`allUniversityList`)
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
          `universityList/${payload}`
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
