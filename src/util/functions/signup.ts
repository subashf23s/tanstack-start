import { auth } from "@/lib/auth";
import { createServerFn } from "@tanstack/react-start";

export const signUpFn = createServerFn({ method: "POST" })
  .inputValidator((data: { name: string; email: string; password: string }) => {
    if (!data.name || !data.email || !data.password) {
      throw new Error("Invalid input");
    }
    return data;
  })
  .handler(async ({ data }) => {
    try {
      const response = await auth.api.signUpEmail({
        body: {
          ...data,
        },
      });
      return {
        success: true,
        message: "User created successfully",
        response,
      };
    } catch (error) {
      console.log("Error", error);
      throw new Error("Error occured while user creation");
    }
  });
