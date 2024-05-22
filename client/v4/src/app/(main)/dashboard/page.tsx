import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/components/logout-button";

const page = async () => {
  const session = await getServerSession(authOptions);

  // console.log(session);
  return (
    <>
      <div>dashboard</div>
      <div>{JSON.stringify(session)}</div>
      <LogoutButton />
    </>
  );
};

export default page;
