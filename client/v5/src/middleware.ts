import { withAuth } from "next-auth/middleware";

// export const middleware = auth((req) => {
//   const { nextUrl } = req;
//   const isLoggedIn = !!req.auth;

//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//   const isLandingRoute = landingRoutes.includes(nextUrl.pathname);

//   if (isApiAuthRoute) return;

//   if (isLandingRoute && isLoggedIn) {
//     return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
//   }

//   if (!isLoggedIn && !isLandingRoute) {
//     return Response.redirect(new URL("/sign-in", nextUrl));
//   }
// });

export default withAuth(
  function middleware(req) {
    // const { nextUrl } = req;
    // console.log({ middlewareToken: req.nextauth.token });
    // // console.log(req.nextauth.token);
    // const isLoggedIn = !!req.nextauth.token;
    // const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
    // const isLandingRoute = ["/", "/sign-in", "/sign-up"].includes(
    //   nextUrl.pathname,
    // );
    // if (isApiAuthRoute) return;
    // if (isLandingRoute && isLoggedIn) {
    //   return Response.redirect(new URL("/dashboard", nextUrl));
    // }
    // if (!isLoggedIn && !isLandingRoute) {
    //   return Response.redirect(new URL("/sign-in", nextUrl));
    // }
  },
  {
    // callbacks: {
    //   authorized({ req, token }) {
    //     if (token) return true;
    //   },
    // },
  },
);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  secret: process.env.NEXTAUTH_SECRET,
};
