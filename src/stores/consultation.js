import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getAxiosClient } from "@/data/axios";

export const useStudentStore = defineStore("counter", {
  state: () => ({
    // user: JSON.parse(sessionStorage.getItem("DATA")),
  }),
  actions: {
    // fetchStudentList() {
    //   return getAxiosClient()
    //     .get("students")
    //     .then((res) => {
    //       return res;
    //     })
    //     .catch((error) => {
    //       throw error;
    //     });
    // },
    addStudent(payload) {
      return getAxiosClient()
        .post("students", payload)
        .then((res) => {
          return res;
        })
        .catch((error) => {
          throw error;
        });
    },
  },
});
