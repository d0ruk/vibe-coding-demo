import dotenvx from "@dotenvx/dotenvx";
import { z } from "zod";

dotenvx.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("production"),
  HOST: z.string().min(1).default("localhost"),
  PORT: z.coerce.number().int().positive().default(8080),
  CORS_ORIGIN: z
    .string()
    .refine(
      (value) => value === "*" || /^https?:\/\/.+$/.test(value),
      "CORS_ORIGIN must be a URL or the literal string '*'"
    )
    .default("http://localhost:8080"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:", parsedEnv.error.format());
  throw new Error("Invalid environment variables");
}

export const env = {
  ...parsedEnv.data,
  isDevelopment: parsedEnv.data.NODE_ENV === "development",
  isProduction: parsedEnv.data.NODE_ENV === "production",
  isTest: parsedEnv.data.NODE_ENV === "test",
};
