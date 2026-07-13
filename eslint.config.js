import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: [
      '.astro/**',
      '.netlify/**',
      'dist/**',
      'node_modules/**',
    ],
  },
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'no-unused-vars': 'warn',
    },
  },
];
