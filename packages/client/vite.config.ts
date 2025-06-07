/// <reference types="vitest" />
import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config https://vitest.dev/config
const config: UserConfig = {
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ".vitest/setup",
    include: ["**/*.spec.{ts,tsx}"],
  },
};

export default defineConfig(config);
