interface Image {
  src: string | Component
  srcSet?: string | Component
  alt: string
}

export interface SharedAnnouncementProps {
  img: Image
  date: string
}
