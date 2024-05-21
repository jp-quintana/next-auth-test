"use client";
import { getUser } from "@/lib/actions/user.actions";

const GetUserButton = () => {
  return <button onClick={() => getUser()}>Fetch user</button>;
};

export default GetUserButton;
