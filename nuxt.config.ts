import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/tailwindcss', 
    '@pinia/nuxt',
  ],
  build: {
    transpile: [
      'tslib',
      '@apollo/client',
      '@apollo/client/core',
      '@vue/apollo-composable',
      '@vue/apollo-option',
      'ts-invariant',
      'lodash-es'
    ],
  },
  runtimeConfig: {
    public: {
      strapiUrl: process.env.NUXT_STRAPI_URL,
    }
  },
})
