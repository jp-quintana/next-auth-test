"use server";
import { axios } from "../axios";

export const getUser = async () => {
  try {
    const result = await axios.get("/user");

    if (result?.data) console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};
