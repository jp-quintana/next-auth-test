import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) return null;

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        };

        try {
          const res = await fetch(`${process.env.API_URL}/auth/login`, options);
          console.log(res);
          const data = await res.json();
          console.log("aca", data);
        } catch (err) {
          console.log(err);
        }
        return null;
      },
    }),
  ],
 
  
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
