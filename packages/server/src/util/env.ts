import dotenvx from "@dotenvx/dotenvx";
import { z } from "zod";

dotenvx.config({ debug: Boolean(process.env.DEBUG) });

const envSchema = z.object({
  APP_NAME: z.string().min(1),
  APP_PORT: z.coerce.number().int().positive().default(8080),
  NODE_ENV: z.enum(["development", "production", "test"]).default("production"),
  HOST: z.string().min(1).default("localhost"),
  CORS_ORIGIN: z
    .string()
    .refine(
      (value) => value === "*" || /^https?:\/\/.+$/.test(value),
      "CORS_ORIGIN must be a URL or the literal string '*'"
    )
    .default("http://localhost:8080"),
  SYNC_DB: z.coerce.boolean().default(false),
  DEBUG: z.coerce.boolean().default(false),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  throw new Error(
    `❌ Invalid environment variables: ${JSON.stringify(
      parsedEnv.error.format()
    )}`
  );
}

const env = {
  ...parsedEnv.data,
  isDevelopment: parsedEnv.data.NODE_ENV === "development",
  isProduction: parsedEnv.data.NODE_ENV === "production",
  isTest: parsedEnv.data.NODE_ENV === "test",
};

export const getEnv = async () => env;
