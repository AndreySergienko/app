// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icons', '@nuxt/eslint'],
  css: ['~/assets/styles/main.scss'],
  components: ['~/components', '~/controllers'],
  compatibilityDate: '2024-12-31',
  app: {
    head: {
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
        { property: 'og:type', content: 'website' }
        // { property: 'og:url', content: 'https://yourdomain.com' },
        // { property: 'og:image', content: 'https://yourdomain.com/images/preview.jpg' }
      ]
      // link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  }
})
