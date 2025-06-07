import baseConfig from "../../eslint.config.mjs";
import nPlugin from "eslint-plugin-n";
import securityPlugin from "eslint-plugin-security";
import promisePlugin from "eslint-plugin-promise";
import globals from "globals";

export default [
  ...baseConfig,
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      n: nPlugin,
      security: securityPlugin,
      promise: promisePlugin,
    },
    rules: {
      ...nPlugin.configs.recommended.rules,
      ...securityPlugin.configs.recommended.rules,
      ...promisePlugin.configs.recommended.rules,
      "n/no-missing-import": "off",
      "n/no-extraneous-import": [
        "error",
        {
          allowModules: ["reflect-metadata"],
        },
      ],
    },
  },
];
