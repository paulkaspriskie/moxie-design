const js = require("@eslint/js");
const prettier = require("eslint-config-prettier");
const pluginPrettier = require("eslint-plugin-prettier");

module.exports = [
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.{js,ts,tsx}"],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      "padding-line-between-statements": [
        "error",
        // { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        // { blankLine: "always", prev: "*", next: "function" },
        // { blankLine: "always", prev: "*", next: "class" },
      ],
    },
  },
  {
    files: ["utilities/**/*.{js,ts,tsx}", "config/**/*.{js,ts,tsx}"],
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        process: "readonly",
        exports: "readonly",
      },
    },
  },
  {
    ignores: ["**/node_modules/**", "**/dist/**"],
  },
];
