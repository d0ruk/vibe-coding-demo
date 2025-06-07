import baseConfig from "../../eslint.config.mjs";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import tailwindPlugin from "eslint-plugin-tailwindcss";
import jestPlugin from "eslint-plugin-jest";

export default [
  ...baseConfig,
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      tailwindcss: tailwindPlugin,
      jest: jestPlugin,
    },
    settings: { react: { version: "detect" } },
    languageOptions: {
      globals: {
        console: "readonly",
        globalThis: "readonly",
        window: "readonly",
        document: "readonly",
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...tailwindPlugin.configs.recommended.rules,
      ...jestPlugin.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "warn",
      "tailwindcss/no-contradicting-classname": "error",
    },
  },
];
