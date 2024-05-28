"use client";
import { useSession } from "next-auth/react";
import { fetchUser } from "@/lib/actions/user.actions";

const GetUserButton = () => {
  const { data: session } = useSession();

  console.log(session);

  const handleFetch = async () => {
    const data = await fetchUser();

    console.log(data);
  };
  return <button onClick={handleFetch}>Fetch user</button>;
};

export default GetUserButton;
