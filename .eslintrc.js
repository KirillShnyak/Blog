module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  plugins: ["jest"],
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 200,
      },
    ],
    "no-plusplus": "off",
    "no-alert": "off",
    "consistent-return": "off",
    eqeqeq: "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
  },
};
