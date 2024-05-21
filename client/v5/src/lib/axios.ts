import Axios from "axios";
import { auth } from "@/auth";

const BASE_URL = "http://localhost:8080/api";

const axios = Axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axios.interceptors.request.use(async (config) => {
  const session = await auth();
  const token = session?.user?.accessToken;
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export { axios };
