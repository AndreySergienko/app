export default {
  // Добавим описание на русском языке ко всем типам
  types: [
    { value: 'feat', name: 'feat:      Добавление нового функционала' },
    { value: 'build', name: 'build:     Сборка проекта или изменения внешних зависимостей' },
    { value: 'ci', name: 'ci:        Настройка CI и работа со скриптами' },
    { value: 'docs', name: 'docs:      Обновление документации' },
    { value: 'fix', name: 'fix:       Исправление ошибок' },
    { value: 'perf', name: 'perf:      Изменения направленные на улучшение производительности' },
    {
      value: 'refactor',
      name: 'refactor:  Правки кода без исправления ошибок или добавления новых функций'
    },
    { value: 'revert', name: 'revert:    Откат на предыдущие коммиты' },
    {
      value: 'style',
      name: 'style:     Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)'
    },
    { value: 'test', name: 'test:      Добавление тестов' }
  ],

  // Область. Она характеризует фрагмент кода, которую затронули изменения
  scopes: [{ name: 'frontned' }, { name: 'tests' }, { name: 'app' }],

  // Возможность задать спец ОБЛАСТЬ для определенного типа коммита (пример для 'fix')
  scopeOverrides: {
    ci: [{ name: 'docker' }, { name: 'gitlab' }, { name: 'node' }]
  },

  // Поменяем дефолтные вопросы
  messages: {
    type: 'Какие изменения вы вносите?',
    scope: '\nВыберите область, которую вы изменили (опционально):',
    // Спросим если allowCustomScopes в true
    customScope: 'Укажите свою область:',
    subject: 'Напишите короткое описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n',
    body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: 'Список BREAKING CHANGES (опционально):\n',
    footer: 'Номер задачи (#100):\n',
    confirmCommit: 'Вас устраивает получившийся коммит?'
  },

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: true,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: 'МЕТА:',

  // limit subject length
  subjectLimit: 72
}
