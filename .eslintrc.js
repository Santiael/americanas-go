module.exports = {
    env: {
      es6: true
    },
    extends: [
      "plugin:react/recommended",
      "airbnb",
      "plugin:prettier/recommended",
    ],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly"
    },
    parserOptions: {
      ecmaFeatures: {
          jsx: true
      },
      ecmaVersion: 2018,
      sourceType: "module"
    },
    plugins: [
      "react"
    ],
    rules: {
      "global-require": "off",
      "react/prop-types": "off",
      "react/no-array-index-key": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
}
