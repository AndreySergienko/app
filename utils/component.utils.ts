import type { ComponentSizesWithElement } from '~/types/component.types'

export const defaultClassesForElement: ComponentSizesWithElement<string> = {
  s: 'small',
  m: 'medium',
  l: 'large'
}

export type LinkType = {
  to?: string
  target?: '_blank' | 'self'
  title: string
  href?: string
}
