"use server";

import { axios } from "../axios";

export const fetchUser = async () => {
  const result = await axios.get("/user");

  if (result?.data) return result.data;

  return null;
};
