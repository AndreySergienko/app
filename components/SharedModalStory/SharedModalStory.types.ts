export interface ISharedModalStoryEmits {
  (e: 'close'): void

  (e: 'next'): void

  (e: 'prev'): void
}

export interface ISharedModalStoryProps {
  hasPrev: boolean;
  hasNext: boolean;

}
