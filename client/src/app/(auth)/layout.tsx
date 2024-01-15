import type { Metadata } from "next";

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
      <section className="flex min-h-screen items-center justify-center">
        {children}
      </section>
    </>
  );
}
