interface Image {
  src: string | Component
  alt: string
}

export interface SharedAnnouncementProps {
  img: Image
  date: string
}
