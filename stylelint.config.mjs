/** @type {import('stylelint').Config} */

export default {
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  plugins: ['stylelint-order'],
  rules: {
    /** Regular expression, valid example class: .row .row-block .row-block__element .row-block__element--modificator */
    'selector-class-pattern': [
      '.[a-zA-Z0-9_-]+(__[a-zA-Z0-9_-]+)*',
      { resolveNestedSelectors: true }
    ],
    /** Ignore vue pseudoclass */
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep']
      }
    ]
  }
}
