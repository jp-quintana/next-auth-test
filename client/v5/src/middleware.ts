import { auth } from "@/auth";

export const middleware = auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
  const isLandingRoute = ["/", "/sign-in", "/sign-up"].includes(
    nextUrl.pathname,
  );

  if (isApiAuthRoute) return;

  if (isLandingRoute && isLoggedIn) {
    return Response.redirect(new URL("/dashboard", nextUrl));
  }

  if (!isLoggedIn && !isLandingRoute) {
    return Response.redirect(new URL("/sign-in", nextUrl));
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
