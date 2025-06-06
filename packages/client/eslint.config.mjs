import baseConfig from "../../eslint.config.mjs";
import reactPlugin from "eslint-plugin-react";

export default [
  ...baseConfig,
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    plugins: { react: reactPlugin },
    settings: { react: { version: "detect" } },
    languageOptions: {
      globals: {
        console: "readonly",
        globalThis: "readonly",
        window: "readonly"
      }
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
    },
  },
];
