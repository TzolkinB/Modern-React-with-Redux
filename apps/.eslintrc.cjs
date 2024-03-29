module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    "no-console": "warn",
    "prettier/prettier": [
      'error',
      {
        "semi": false,
      }
    ],
    "@typescript-eslint/no-unused-vars": "error",
    // to enforce using type for object type definitions, can be type or interface 
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "react/jsx-filename-extension": "off"
  },
};
