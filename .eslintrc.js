module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  rules: {
    semi: ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': ['warn'],
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
}
