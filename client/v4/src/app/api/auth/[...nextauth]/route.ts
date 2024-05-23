import { axios } from "@/lib/axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  callbacks: {
    async session({ session, token: sessionToken }) {
      // console.log({ session, sessionToken });
      if (session?.user && sessionToken?.accessToken)
        session.user.accessToken = sessionToken.accessToken as string;
      if (session?.user && sessionToken?.sub)
        session.user.id = sessionToken.sub;
      return session;
    },
    async jwt({ token, user }) {
      // console.log({ token, user });
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

        return null;
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
