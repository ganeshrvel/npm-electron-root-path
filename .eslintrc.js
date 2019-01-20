module.exports = {
  env: {
    node: true
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['import', 'promise', 'compat', 'prettier'],
  rules: {
    'arrow-parens': 'off',
    'compat/compat': 'error',
    'consistent-return': 'off',
    'comma-dangle': 'off',
    'generator-star-spacing': 'off',
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-multi-assign': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'promise/param-names': 'error',
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off'
  },
  parserOptions: {
    ecmaVersion: 2015
  }
};
