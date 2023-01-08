module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'react-app/jest'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: { 'react/react-in-jsx-scope': 'off' },
};
