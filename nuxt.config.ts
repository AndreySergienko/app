// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/stylelint-module', 'nuxt-icons'],
  css: ['~/assets/styles/main.scss'],
  components: ['~/components', '~/controllers'],
  compatibilityDate: '2024-12-31'
})
