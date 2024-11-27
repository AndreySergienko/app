export interface ISharedStoryCard {
  id?: number
  img: string
  play: string
  followers: number | string
}

export interface ISharedStoryProps {
  card: ISharedStoryCard
  isSecondCard?: boolean
  isLastCard?: boolean
}
