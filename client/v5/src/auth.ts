import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    // async redirect({ url, baseUrl }) {
    //   console.log({ url, baseUrl });
    //   return baseUrl;
    // },
    async session({ session, token: sessionToken }) {
      console.log({ sessionToken, session });

      return session;
    },
    async jwt({ token, user }) {
      console.log({ token, user });
      return token;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async (_credentials, _req) => {
        // const { email, password } = credentials as {
        //   email: string;
        //   password: string;
        // };

        // if (!email || !password) return null;

        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
