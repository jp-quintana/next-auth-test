import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Axios from "axios";
import { getServerSession } from "next-auth/next";

const BASE_URL = process.env.API_URL;

const axios = Axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axios.interceptors.request.use(async (config) => {
  const session = await getServerSession(authOptions);
  const token = session?.user?.accessToken;
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export { axios };
