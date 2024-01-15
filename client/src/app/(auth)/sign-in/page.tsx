import Link from "next/link";

import SignInForm from "@/components/sign-in-form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);
  return (
    <div className="flex flex-col">
      <h1 className="text-center font-bold">Sign-in</h1>
      <SignInForm />
      <Link
        href="/sign-up"
        className="mt-3 text-center text-sm text-muted-foreground"
      >
        Don't have an account?
      </Link>
    </div>
  );
};

export default page;
