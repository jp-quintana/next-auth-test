import type { Metadata } from "next";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Home",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="flex min-h-screen items-center justify-center">
        {children}
      </main>
    </>
  );
}
