import { defineNuxtConfig } from 'nuxt'
import { visualizer } from 'rollup-plugin-visualizer' // 打包体积分析
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const lifecycle = process.env.npm_lifecycle_event
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@vueuse/nuxt', 'nuxt-icon'],
  css: ['@/assets/scss/index.scss'],
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: '',
  },
  build: {
    transpile: lifecycle === 'build' ? ['element-plus'] : [],
  },
  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    navigation: {
      fields: ['author', 'publishedAt'],
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula',
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/scss/variable.scss";',
        },
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dts: true,
        resolvers: [ElementPlusResolver()],
      }),
      visualizer,
    ],
  },
})
