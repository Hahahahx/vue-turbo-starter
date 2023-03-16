// import Unocss from 'unocss/vite'
// import VueTypeImports from 'vite-plugin-vue-type-imports'
// import { alias } from '../../alias'

import { i18n } from './config/i18n'

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt', '@nuxt/devtools'],
  // alias,
  css: [
    '@unocss/reset/tailwind.css',
    // 'uno.css',
  ],
  components: [{ path: '../../packages/ui/src/components', extensions: ['vue'] }],

  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
  },
  i18n,
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
  // typescript: {
  //   shim: false,
  // },
  // vite: {
  //   plugins: [
  //     /**
  //      *  https://github.com/vuejs/core/issues/4294
  //      */
  //     VueTypeImports(),
  //     Unocss(),
  //   ],
  //   optimizeDeps: {
  //     exclude: ['pinia'],
  //   },
  // },
})
