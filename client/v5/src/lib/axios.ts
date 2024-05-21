import Axios from "axios";

const BASE_URL = "http://localhost:8080/api";

const axios = Axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// axios.interceptors.request.use((config) => {
//   const token = useUserStore.getState().token;
//   config.headers['Authorization'] = `Bearer ${token}`;

//   return config;
// });

export { axios };
