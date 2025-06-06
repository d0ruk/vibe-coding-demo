import baseConfig from "../../eslint.config.mjs";
import nPlugin from "eslint-plugin-n";
import securityPlugin from "eslint-plugin-security";
import promisePlugin from "eslint-plugin-promise";
import importPlugin from "eslint-plugin-import";

export default [
  ...baseConfig,
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: {
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        exports: "readonly",
        module: "readonly",
        require: "readonly",
        console: "readonly"
      }
    },
    plugins: {
      n: nPlugin,
      security: securityPlugin,
      promise: promisePlugin,
      import: importPlugin,
    },
    rules: {
      ...nPlugin.configs.recommended.rules,
      ...securityPlugin.configs.recommended.rules,
      ...promisePlugin.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
    },
  },
];
