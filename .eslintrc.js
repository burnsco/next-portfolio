module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "@typescript-eslint/eslint-plugin",
    "prettier"
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "no-constant-condition": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "off",

    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/indent": "off",

    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-types": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "jsx-a11y/no-autofocus": "off",
    "react/forbid-prop-types": "off",
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off",
    "no-shadow": "off",
    "no-plusplus": "off",
    "spaced-comment": "off",
    "guard-for-in": "off",
    "react/no-danger": "off",
    "react/button-has-type": "off",
    "react/no-unescaped-entities": "off",
    "operator-assignment": "off",
    "prefer-destructuring": "off",
    "react/no-children-prop": "off",
    "consistent-return": "off",
    "react/react-in-jsx-scope": "off",
    "react/state-in-constructor": "off",
    "no-restricted-syntax": "off",
    "no-continue": "off",
    "react/destructuring-assignment": "off",
    "@typescript-eslint/dot-notation": "off",
    "no-bitwise": "off",
    "no-redeclare": "off",
    "@typescript-eslint/naming-convention": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "no-alert": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/require-default-props": "off",
    "react/sort-prop-types": "error",
    "react/prop-types": "off",
    "@typescript-eslint/no-shadow": "off",
    "react-hooks/exhaustive-deps": "error",
    "import/no-named-as-default": "off"
  }
}
