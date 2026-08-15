import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'dist/**',
      '*.config.cjs'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended
]
