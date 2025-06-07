import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";

export default [
  js.configs.recommended,
  ...tseslint.configs["flat/strict"],
  {
    rules: {
      "no-console": "warn",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/no-unused-expressions": [
        "warn",
        {
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false,
          enforceForJSX: false,
          ignoreDirectives: false,
        },
      ],
    },
  },
];
