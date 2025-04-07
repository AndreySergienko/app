export interface ISharedStoryCard {
  id: number
  img: string
  isViewed: boolean
}

export interface ISharedStoryProps {
  card: ISharedStoryCard
}

export interface ISharedStoryEmits {
  (e: 'click'): void
}
