// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static'
  },
  devtools: { enabled: true },
  modules: ['nuxt-icons', '@nuxt/eslint'],
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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
        }
      ]
    }
  }
})
