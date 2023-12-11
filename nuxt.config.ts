// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [ 'nuxt-icon', '@nuxtjs/tailwindcss', '@nuxt/devtools'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      script: [{ src: "/scripts/tawkto.js"}],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Vanguard Ops',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/icons/favicon.png'
        }
      ]
    },
  },
})
