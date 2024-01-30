import axios from "axios";
import { ref } from "vue";

const getData = () => {
  const currentEvent = ref(null);
  const data = ref(null);
  const fetchData = async (url, id) => {
    const res = await axios.get(url);
    data.value = res.data;
    if (res) {
      res.data.latestEvent.map((event) => {
        if (id == event.id) {
          data.value = event;
        }
      });
    }
  };
  return { data, fetchData, currentEvent };
};
export default getData;

// const fetchData = async () => {
//   const res = await eventStore.fetchEvent();
//   events.value = res.data.latestEvent;
//   events.value.map((event) => {
//     if (props.id == event.id) {
//       currentEvent.value = event;
//     }
//   });
// };
