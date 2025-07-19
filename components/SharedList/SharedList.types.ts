export interface SharedListProps {
  items: unknown[]
  hasVisible: boolean
}

export interface SharedListExpose {
  listRoot: Ref<HTMLElement | null>
}

export type ListRoot = { listRoot: HTMLElement | null }
