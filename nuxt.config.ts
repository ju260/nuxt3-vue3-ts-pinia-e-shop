// import { defineNuxtConfig } from '@nuxt/config'

export default defineNuxtConfig({
  mode: 'spa',
  ssr: false,
    css: ["assets/css/tailwind.css"],
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
    static: {
        prefix: false
      },

    modules: [
      // ...
      '@nuxtjs/tailwindcss',
      [
        '@pinia/nuxt',
        {
          autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
          ],
        },
      ],
    ],
  })
