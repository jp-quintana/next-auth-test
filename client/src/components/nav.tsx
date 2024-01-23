import Link from "next/link";

const Nav = () => {
  return (
    <nav className="mx-auto flex max-w-6xl justify-between py-3">
      <p>logo</p>
      <ul className="flex gap-6">
        <li>
          <Link href="/sign-in">sign in</Link>
        </li>
        <li>
          <Link href="/sign-in">sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
