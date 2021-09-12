export default {  
  /*
  ** App bundle process.env
  */
  env: {
    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
    API_KEY: process.env.API_KEY || '262723c9c37cce4ce1e2b6abdcec3b1f',
    API_LANG: process.env.API_LANG || 'en-US',
    API_COUNTRY: process.env.API_COUNTRY || 'GB',
    API_YOUTUBE_KEY: process.env.API_YOUTUBE_KEY || '',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Browse Movies, TV Shows and People',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Browse Movies, TV Shows and People' },
      { hid: 'author', name: 'author', content: 'Nuxt.js' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_GB' },
      { hid: 'og:title', property: 'og:title', content: 'Movies App' },
      { hid: 'og:description', property: 'og:description', content: 'Browse Movies, TV Shows and People' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://localhost/' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Movies' },
      { name: 'twitter:description', content: 'Browse Movies, TV Shows and People' },
      { name: 'twitter:site', content: '@nuxt_js' },
      { name: 'twitter:image', content: 'https://nuxtjs.org/nuxt-card.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/filters',
    '~/plugins/search'
  ],


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
