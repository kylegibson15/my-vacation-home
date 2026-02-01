module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "extends": [
    "plugin:prettier/recommended",
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname,
  },
  "env": {
    "jest": true
  },
  "rules": {
    "prettier/prettier": ["warn"],
    "react/jsx-fragments": 1,
    "react/jsx-props-no-spreading": "warn", // Consider enabling this for better code maintainability
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
  }
};