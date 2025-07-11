export {}

interface Meta {
  text: string
  link: string
}

declare module 'vue-router' {
  interface RouteMeta {
    anchors: Meta[]
    info: Meta[]
    title: string
  }
}
