import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { axios } from "./lib/axios";

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ session, token: sessionToken }) {
      if (session.user && sessionToken.sub) session.user.id = sessionToken.sub;
      if (session.user && sessionToken.accessToken)
        session.user.accessToken = sessionToken.accessToken;
      return session;
    },
    async jwt({ token, user }) {
      console.log({ token, user });
      if (user?.accessToken) token.accessToken = user.accessToken;
      return token;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) return null;

        const result = await axios.post("/auth/login", { email, password });

        if (result.data) {
          const user = {
            id: "1",
            name: "J",
            lastName: "Smith",
            email,
            accessToken: result.data.token,
          };
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
