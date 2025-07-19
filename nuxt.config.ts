// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static'
  },
  image: {
    provider: 'ipx',
    dir: 'public/images'
  },
  devtools: { enabled: true },
  modules: ['nuxt-icons', '@nuxt/eslint', '@nuxt/image'],
  css: ['~/assets/styles/main.scss'],
  components: ['~/components', '~/controllers'],
  compatibilityDate: '2024-12-31',
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'Andrey Sergienko - website',
      meta: [
        {
          name: 'description',
          content:
            'Андрей Сергиенко — фронтенд-разработчик. Веб разработка с использованием современных технологий под ключ.'
        },

        { property: 'og:title', content: 'Andrey Sergienko - website' },
        {
          property: 'og:description',
          content: 'Современные сайты и веб-приложения под ключ'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ensine.ru' },
        { property: 'og:image', content: '/og-image.png' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  }
})
