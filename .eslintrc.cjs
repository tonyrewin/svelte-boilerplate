// import eslintSveltePreprocess from 'eslint-svelte3-preprocess'
const svelteConfig = require('./svelte.config.cjs')

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  plugins: [
    'svelte3',
    'prettier',
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
    {
      files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
      ],
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
    },
  },
  ],
  settings: {
    'svelte3/preprocess': svelteConfig.preprocess // eslintSveltePreprocess(svelteConfig.preprocess),
  },
  rules: {
    "no-unused-vars": "off"
  }
}
