import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/drizzle/db";
import { tanstackStartCookies } from "better-auth/tanstack-start";
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, // 5 mins
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  plugins: [tanstackStartCookies()],
});
