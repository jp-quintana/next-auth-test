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

        // llamada base de datos
        // ...

        // retorna el objeto user + token
        const user = {
          id: "1",
          name: "J Smith",
          email: "jsmith@example.com",
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsInVzZXJuYW1lIjoiZXhhbXBsZXVzZXIiLCJleHAiOjE2MzQyNzQ0MDB9.m1V4NC5-QSHOrRmCMTU2qDSR_8CqsbVzEHGx4xxTo4I",
        };

        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
