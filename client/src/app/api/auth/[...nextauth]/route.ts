import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: { email: string; password: string }, _req) {
        const { email, password } = credentials;
        if (!email || !password) return null;

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON if sending JSON data
            // Add any other headers if needed
          },
          body: JSON.stringify({ email, password }), // Convert the data to JSON format
        };

        const token = await fetch(`${process.env.API_URL}/login`, options);

        console.log(token);
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     return { ...token, ...user };
  //   },
  //   async session({ session, token, user }) {
  //     session.user = token;
  //     return session;
  //   },
  // },
  // secret: "secret",
  // session: {
  //   strategy: "jwt",
  // },
  // debug: process.env.NODE_ENV === "development",
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
