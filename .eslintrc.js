module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true // Добавлено для поддержки Node.js
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "no-undef": "error",
    "no-unused-vars": "warn",
    "no-restricted-globals": ["error", "isNaN"],
    "no-bitwise": "warn"
  },
  globals: {
    module: "readonly",
    require: "readonly",
    describe: "readonly",
    it: "readonly"
  }
};

