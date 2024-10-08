import { type QualifiedRules, RuleConfigSeverity } from '@commitlint/types'

export default <QualifiedRules>{
  // Тело коммита должно начинаться с пустой строки
  'body-leading-blank': [RuleConfigSeverity.Error, 'always'],

  // Нижний колонтитул коммита должен начинаться с пустой строки
  'footer-leading-blank': [RuleConfigSeverity.Error, 'always'],

  // Максимальная длина заголовка 72 символа
  'header-max-length': [RuleConfigSeverity.Error, 'always', 72],

  // Область всегда только в нижнем регистре
  'scope-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],

  // Описание не может быть пустым
  'subject-empty': [RuleConfigSeverity.Error, 'never'],

  // Описание не должно заканчиваться '.'
  'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],

  // Тип всегда только в нижнем регистре
  'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],

  // Тип не может быть пустым
  'type-empty': [RuleConfigSeverity.Error, 'never'],

  // Перечислим все возможные варианты коммитов
  'type-enum': [
    RuleConfigSeverity.Error,
    'always',
    ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']
  ]
}
