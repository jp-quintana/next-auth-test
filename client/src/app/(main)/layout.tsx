import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center">
        {children}
      </main>
    </>
  );
}
