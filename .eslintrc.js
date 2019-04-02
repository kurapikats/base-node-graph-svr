module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: "standard",
  globals: {
    atomics: "readonly",
    sharedarraybuffer: "readonly"
  },
  parseroptions: {
    ecmaversion: 2019
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    quotes: ["error", "double"]
  }
}
