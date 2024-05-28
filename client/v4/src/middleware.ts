import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const authRoutes = ["/dashboard"];
    const publicRoutes = ["/", "/sign-in", "/sign-up"];

    const { nextUrl } = req;
    const { pathname } = nextUrl;

    const isLoggedIn = !!req.nextauth.token;
    const isAuthRoute = authRoutes.includes(pathname);
    const isPublicRoute = publicRoutes.includes(pathname);

    if (isPublicRoute && isLoggedIn)
      return NextResponse.redirect(new URL("/dashboard", req.url));

    if (isAuthRoute && !isLoggedIn)
      return NextResponse.redirect(new URL("/", req.url));

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized() {
        return true;
      },
    },
  },
);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
