import axios from "axios";

function getAxiosClient() {
  const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      Accept: "application/json",
    },
  });

  return axiosClient;
}

export { getAxiosClient };
