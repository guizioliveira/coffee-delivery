module.exports = {
  extends: ['@guizioliveira/eslint-config/react'],

  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_?key$',
      },
    ],
  },
}
