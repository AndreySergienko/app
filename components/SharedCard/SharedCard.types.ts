import type { SharedComponentWithSize } from '~/types/component.types'

export interface SharedCardEmits {
  (event: 'read-more'): void
}

export interface SharedCardProps extends Partial<SharedComponentWithSize> {
  img: {
    src: string | Component
    alt: string
  }
  text?: string
  title: string
  date: string
}
