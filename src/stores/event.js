import { defineStore } from "pinia";
import { getAxiosClient } from "@/data/axios";
import { Axios } from "axios";
export const useEventStore = defineStore("event", {
  state: () => ({
    // user: JSON.parse(sessionStorage.getItem("DATA")),
  }),
  actions: {
    fetchEvent() {
      return getAxiosClient()
        .get(`latestEventList`)
        .then((res) => {
          // console.log(res);
          return res;
        })
        .catch((error) => {
          throw error;
        });
    },
    // fetchUniversity(payload) {
    //   return getAxiosClient()
    //     .get(
    //       `https://adminpanel.msieducation.edu.mm/api/universityList/${payload}`
    //     )

    //     .then((res) => {
    //       return res;
    //     })
    //     .catch((error) => {
    //       throw error;
    //     });
    // },
  },
});
