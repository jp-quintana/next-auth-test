import { auth } from "@/auth";
import GetUserButton from "@/components/get-user-button";
import LogoutButton from "@/components/logout-button";

const page = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col space-x-8">
      <div>{JSON.stringify(session)}</div>
      <LogoutButton />
      <GetUserButton />
    </div>
  );
};

export default page;
