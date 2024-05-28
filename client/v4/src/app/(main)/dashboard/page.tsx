import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/components/logout-button";
import GetUserButton from "@/components/get-user-button";

const page = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);
  return (
    <div className="flex flex-col space-y-4 text-center">
      <div>dashboard</div>
      <div>{JSON.stringify(session)}</div>
      <GetUserButton />
      <LogoutButton />
    </div>
  );
};

export default page;
