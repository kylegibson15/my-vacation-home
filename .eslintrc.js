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
    // Disable prefer default export
    "import/prefer-default-export": "off"
  }
}
