"use client";

import { axios } from "@/lib/axios";

const GetUserButton = () => {
  const handleFetch = async () => {
    const result = await axios.get("/user");

    if (result?.data) console.log(result.data);
  };
  return <button onClick={handleFetch}>Fetch user</button>;
};

export default GetUserButton;
