import type { SharedComponentWithSize } from '~/types/component.types'

export interface SharedCardEmits {
  (event: 'read-more'): void
}

interface Image {
  src: string | Component
  srcSet?: string | Component
  alt: string
}

export interface SharedCardProps extends Partial<SharedComponentWithSize> {
  img: Image
  date: string
}
