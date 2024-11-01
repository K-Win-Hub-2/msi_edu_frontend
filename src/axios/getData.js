import axios from "axios";
import { ref } from "vue";

const getData = () => {
  const data = ref(null);
  const fetchData = async (url) => {
    const res = await axios.get(url);
    data.value = res.data;
    console.log(res.data, "coount");
  };
  return { data, fetchData };
};
export default getData;
