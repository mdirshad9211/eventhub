import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,

  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node
      }
    },

    rules: {
      'no-console': 'off',
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all']
    }
  },

  {
    ignores: [
      'node_modules/',
      'coverage/',
      'logs/',
      'dist/',
      'build/'
    ]
  }
];
