module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/essential",
    "@vue/prettier",
    "plugin:prettier/recommended",
    "@vue/typescript",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "warn",
    "vue/multi-word-component-names": "off",
  },
};
