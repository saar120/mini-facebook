/* eslint-disable no-unused-vars */
const error = 2;
const warn = 1;
const ignore = 0;

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": [
      warn,
      {
        printWidth: 100,
        tabWidth: 2,
        bracketSpacing: true,
        trailingComma: "es5",
        singleQuote: false,
      },
    ],
    "react/jsx-filename-extension": [
      warn,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/require-default-props": ignore,
    "jsx-a11y/no-autofocus": ignore,
    "no-console": ignore,
    "import/prefer-default-export": ignore,
    "no-param-reassign": ignore,
    "react/jsx-no-constructed-context-values": ignore, // check if indeed cause re renders
    "react/forbid-prop-types": ignore,
    "jsx-a11y/click-events-have-key-events": ignore,
    "jsx-a11y/no-static-element-interactions": ignore,
  },
};
