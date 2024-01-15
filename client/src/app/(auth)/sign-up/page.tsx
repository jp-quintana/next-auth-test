import Link from "next/link";

import SignUpForm from "@/components/sign-up-form";

const page = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center font-bold">Sign-up</h1>
      <SignUpForm />
      <Link
        href="/sign-in"
        className="mt-3 text-center text-sm text-muted-foreground"
      >
        Already have an account?
      </Link>
    </div>
  );
};

export default page;
