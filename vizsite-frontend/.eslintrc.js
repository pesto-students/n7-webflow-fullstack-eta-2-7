module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/aria-role': 0,
    'import/prefer-default-export': 0,
    'template-curly-spacing': ['error', 'never'],
    'react/no-array-index-key': 0,
    'linebreak-style': 0,
    'no-console': 0,
    'react/no-danger': 0,
  },
};
