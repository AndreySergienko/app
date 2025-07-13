export interface ISharedStoryCard {
  id: number
  img: string
  preview?: string
  isViewed: boolean
  text?: string
}

export interface ISharedStoryProps {
  card: ISharedStoryCard
}
