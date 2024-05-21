import { auth } from "@/auth";
import LogoutButton from "@/components/LogoutButton";

const page = async () => {
  const session = await auth();

  return (
    <>
      <div>{JSON.stringify(session)}</div>
      <LogoutButton />
    </>
  );
};

export default page;
