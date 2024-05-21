import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { axios } from "./lib/axios";

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ session, token: sessionToken }) {
      if (session.user && sessionToken.sub) session.user.id = sessionToken.sub;
      if (session.user && sessionToken.accessToken)
        session.user.accessToken = sessionToken.accessToken;
      if (session.user && sessionToken.lastName)
        session.user.lastName = sessionToken.lastName;
      return session;
    },
    async jwt({ token, user }) {
      // console.log({ token, user });
      if (user?.accessToken) token.accessToken = user.accessToken;
      if (user?.lastName) token.lastName = user.lastName;
      return token;
    },
  },
  providers: [
    CredentialsProvider({
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          if (!email || !password) return null;

          const result = await axios.post("/auth/login", { email, password });

          if (result?.data?.user) {
            const user = {
              id: result.data.user.id,
              name: result.data.user.name,
              lastName: result.data.user.lastName,
              email: result.data.user.email,
              accessToken: result.data.user.token,
            };
            return user;
          }
        } catch (err) {
          console.log(err);
        }

        return null;
      },
    }),
  ],
});
