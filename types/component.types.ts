export type ComponentSizes = {
  s: string
  m: string
  l: string
}

export type ComponentSizesWithElement<ElementType> = Record<
  keyof ComponentSizes,
  ElementType
>

export interface SharedComponentWithSize {
  size: keyof ComponentSizes
}

export type ComponentThemes = {
  light: string
  dark: string
}

export type ComponentThemesWithElement<ElementType> = Record<
  keyof ComponentThemes,
  ElementType
>

export interface SharedComponentWithTheme {
  theme: keyof ComponentThemes
}

export interface SharedComponentThemeAndSize
  extends SharedComponentWithTheme,
    SharedComponentWithSize {
  hover?: keyof ComponentThemes
}

export type LinkType = {
  to?: string
  target?: '_blank' | 'self'
  title: string
  href?: string
}

