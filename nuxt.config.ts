import { pwa } from './app/config/pwa.module'
import { appDescription } from './app/constants'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // env ->process.env.NODE_ENV
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },

  alias: {},

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    '@nuxt/content'
  ],

  // content: {
  //   build: {
  //     markdown: {
  //       toc: {
  //         depth: 3 // include h3 headings
  //       }
  //     }
  //   }
  // },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' }
        // { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' }
      ]
    }
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  pinia: {
    // autoImports: ['defineStore']
    storesDirs: ['app/stores/**']
  },

  // , 'app/styles/main.scss'
  css: ['@unocss/reset/tailwind.css', '~/styles/main.scss'],

  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: []
    }
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true
      }
    }
  },

  pwa,

  compatibilityDate: '2025-01-24',

  srcDir: 'app',

  future: {
    // 兼容Nuxt4，如果不设置，则需要设置srcDir: 'app'
    compatibilityVersion: 4
  }
})
