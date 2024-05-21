"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const login = async (values: any) => {
  try {
    await signIn("credentials", {
      ...values,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          return { error: "Invalid Credentials" };
        }
        default: {
          return { error: "Something went wrong" };
        }
      }
    }
    throw error;
  }
};
