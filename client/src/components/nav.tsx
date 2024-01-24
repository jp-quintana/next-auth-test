import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const Nav = () => {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between py-3">
      <p>next-auth-test</p>
      <ul className="flex items-center gap-6">
        <li>
          <Link
            className={buttonVariants({ variant: "ghost" })}
            href="/sign-in"
          >
            Sign in
          </Link>
        </li>
        <li>
          <Link
            className={buttonVariants({ variant: "default" })}
            href="/sign-up"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
