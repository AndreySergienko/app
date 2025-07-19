import withNuxt from './.nuxt/eslint.config.mjs'

const vueRules = {
  'vue/html-closing-bracket-spacing': [
    'error',
    {
      selfClosingTag: 'always'
    }
  ],
  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always'
      }
    }
  ],
  'vue/attributes-order': [
    'error',
    {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'ATTR_SHORTHAND_BOOL',
        ['UNIQUE', 'SLOT'],
        'OTHER_DIRECTIVES'
      ]
    }
  ],
  'vue/max-attributes-per-line': [
    'error',
    {
      singleline: {
        max: 4
      },
      multiline: {
        max: 4
      }
    }
  ],
  'vue/multi-word-component-names': 'off',
  'vue/no-reserved-component-names': 'off',
  'vue/no-multiple-template-root': 'off',
  'vue/valid-attribute-name': 'off',
  'vue/order-in-components': [
    'error',
    {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }
  ],
  'vue/block-order': [
    'error',
    {
      order: [['script', 'template'], 'style']
    }
  ]
}

const typescriptConfig = {
  '@typescript-eslint/no-explicit-any': ['off'],
  '@typescript-eslint/no-dynamic-delete': 'off',
  '@typescript-eslint/no-namespace': 'off',

  'no-constant-binary-expression': 'off',
  '@typescript-eslint/no-extraneous-class': 'off',
  '@typescript-eslint/unified-signatures': 'off',
  '@typescript-eslint/no-empty-object-type': 'off',
  '@typescript-eslint/no-unused-vars': ['error'],
  '@typescript-eslint/no-unused-expressions': 'off'
}

/** WithNuxt - add autoImports and other features nuxt with eslint */
export default withNuxt({
  settings: {
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  rules: {
    /** Required rules */
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'no-trailing-spaces': ['error'],
    'eol-last': ['error', 'always'],
    ...vueRules,
    ...typescriptConfig
  },
  ignores: [
    'node_modules',
    'dist',
    'public',
    '.nuxt',
    'stylelint.config.mjs',
    'prettier.config.mjs',
    'eslint.config.mjs',
    '.github'
  ]
})
