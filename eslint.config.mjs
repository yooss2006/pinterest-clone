import { dirname } from 'path';
import { fileURLToPath } from 'url';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['node_modules/**', 'dist/**', '*.config.js'],
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.app.json'
        }
      }
    },
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'linebreak-style': ['error', 'unix'],
      'no-unused-expressions': 'warn',
      'no-param-reassign': [
        'error',
        {
          props: false
        }
      ],

      'import/no-cycle': 'error',
      'import/no-anonymous-default-export': 'error',
      'import/no-named-default': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],

      'react/react-in-jsx-scope': 'off',

      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      'jsx-a11y/alt-text': 'error',

      ...eslintConfigPrettier.rules,
      'prettier/prettier': ['error', {}, { usePrettierrc: true }]
    }
  }
];

export default eslintConfig;
