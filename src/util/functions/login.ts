import { auth } from "@/lib/auth";
import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

export const loginFn = createServerFn({ method: "POST" })
  .inputValidator((data: { email: string; password: string }) => {
    if (!data.email || !data.password) {
      throw new Error("Invalid input");
    }
    return data;
  })
  .handler(async ({ data }) => {
    try {
      await auth.api.signInEmail({
        body: {
          ...data,
        },
      });
      throw redirect({ to: "/dashboard" });
    } catch (error) {
      console.log("Error", error);
      throw new Error("Error occured while logging in");
    }
  });
