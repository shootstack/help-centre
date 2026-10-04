/**
 * ESLint flat config. Same base JavaScript rules and Prettier handoff as
 * diamond-app. React, JSDoc, and prop-sorting rules stay in diamond-app;
 * this repo is Mintlify scripts and snippets.
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 */

import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
    {
        ignores: ['node_modules', 'assets', '.cursor', '.agents', '**/*.md', '**/*.mdx'],
    },
    {
        files: ['**/*.{js,jsx,mjs}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            'unused-imports': unusedImports,
        },
        rules: {
            ...js.configs.recommended.rules,
            eqeqeq: ['error', 'always', { null: 'ignore' }],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-nested-ternary': 'error',
            'no-unused-vars': 'off',
            'no-var': 'error',
            'object-shorthand': 'error',
            'prefer-const': 'error',
            'prefer-template': 'error',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        },
    },
    prettier,
    {
        files: ['scripts/**/*.mjs'],
        rules: {
            'no-console': 'off',
        },
    },
    {
        files: ['snippets/**/*.jsx'],
        languageOptions: {
            globals: {
                useEffect: 'readonly',
                useRef: 'readonly',
                useState: 'readonly',
            },
        },
    },
    {
        files: ['search.js', 'sidebar.js'],
        languageOptions: {
            sourceType: 'script',
            globals: globals.browser,
        },
    },
];
