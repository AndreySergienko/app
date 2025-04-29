import type {
  ComponentThemes,
  ComponentThemesWithElement
} from '~/types/component.types'

export function useThemesText(theme: keyof ComponentThemes) {
  const themes: ComponentThemesWithElement<string> = {
    light: 'var(--dark-gray)',
    dark: 'var(--black)'
  }

  const color = computed<string>(() => themes[theme])

  return {
    color
  }
}
