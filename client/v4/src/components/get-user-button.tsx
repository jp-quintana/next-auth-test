"use client";

import { fetchUser } from "@/lib/actions/user.actions";

const GetUserButton = () => {
  const handleFetch = async () => {
    const data = await fetchUser();

    console.log(data);
  };
  return <button onClick={handleFetch}>Fetch user</button>;
};

export default GetUserButton;
