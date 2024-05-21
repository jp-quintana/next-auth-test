import type { Metadata } from "next";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Welcome",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <section className="flex min-h-screen items-center justify-center">
        {children}
      </section>
    </>
  );
}
