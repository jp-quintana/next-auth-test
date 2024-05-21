import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/components/LogoutButton";

const page = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);
  return (
    <>
      <div>{JSON.stringify(session)}</div>
      <LogoutButton />
    </>
  );
};

export default page;
