import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ['dist', 'out'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'no-multiple-empty-lines': [1, { 'max': 1 }],
      'comma-dangle': ['error', 'never'],
      'jsx-quotes': ['error', 'prefer-single'],
      'import/no-anonymous-default-export': ['error', { 'allowArray': true }],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-unused-expressions': ['error', { 'allowShortCircuit': true }]
      // 'no-console': 'warn'
    }
  },
  ...compat.extends(
    'next',
    'next/typescript',
    'next/core-web-vitals'
  )
]