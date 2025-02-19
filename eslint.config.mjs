import { FlatCompat } from '@eslint/eslintrc'

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  ...compat.extends(
    'next',
    'next/typescript',
    'next/core-web-vitals'
  ),
  {
    ignores: ['dist', 'out'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettier
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'jsx-quotes': ['error', 'prefer-single'],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { 'allowShortCircuit': true }
      ],
      'no-console': 'warn'
    }
  }
]
