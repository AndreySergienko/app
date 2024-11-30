// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-icons'],
  eslint: {
    checker: true
  },
  css: ['~/assets/styles/main.scss'],
  components: ['~/components', '~/controllers']
})
