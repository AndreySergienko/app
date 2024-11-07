export interface CardProps {
  card: {
    img: string
    play: string
    followers: number | string
  }
  isSecondCard: boolean
  isLastCard: boolean
}
