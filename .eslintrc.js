module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'no-console': 'off',
    'no-plusplus': 'off',
    // allow reassigning param
    'no-param-reassign': [2, { props: false }],
    'linebreak-style': ['error', 'unix'],
    'import/extensions': ['error', {
      js: 'always',
    }],
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
      variables: true,
      allowNamedExports: false,
    }],
    'import/prefer-default-export': 'off',
  },
};
