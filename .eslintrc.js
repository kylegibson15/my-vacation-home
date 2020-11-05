module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "plugin:prettier/recommended",
    "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname,
  },
  "env": {
    "jest": true
  },
  "rules": {
    // Make prettier code formatting suggestions more verbose.
    "prettier/prettier": ["warn"],
    "react/jsx-fragments": 1,
    "react/jsx-props-no-spreading": [0],
    // Disable prefer default export
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    semi: [1, "always"]
  }
}
