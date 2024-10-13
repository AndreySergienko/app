import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import withNuxt from './.nuxt/eslint.config.mjs'

/** Vue/Nuxt rules */
const vueRules = {
  'vue/multi-word-component-names': 'off',
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
  'function-no-unknown': 'off'
}

export default withNuxt(
  /** Compiler options */
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  /** Plugins */
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  eslintConfigPrettier,
  /** Rules */
  {
    rules: {
      ...vueRules,

      /** Required rules */
      'comma-dangle': ['error', 'never'],
      semi: ['error', 'never'],
      'no-trailing-spaces': ['error'],
      'eol-last': ['error', 'always'],
      'max-lines': ['error', 175],
      'max-len': ['error', 100]
    }
  },
  /** Ignores */
  {
    ignores: ['node_modules', 'dist', 'public', '.nuxt', 'stylelint.config.mjs']
  }
)
