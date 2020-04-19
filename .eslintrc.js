module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    semi: ["error", "never"],
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
        "no-unused-vars": ["error", { "argsIgnorePattern": "next"}],
        "consistent-return": "off",
        "max-len": ["error", { "code": 90 }],
        "no-restricted-globals": "off",
    "prettier/prettier": "error"
  },
};
