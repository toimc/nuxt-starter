// uno.config.ts
// import presetWind from '@unocss/preset-wind'
import {  defineConfig, presetWind, presetAttributify, presetTypography,presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: {
    // method 2：针对于全局经常需要使用样式
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top',
    btn: 'px-4 py-2 bg-sky-400 text-white hover:bg-sky-500 cursor-pointer',
    'btn-plain':
      'px-4 py-2 border border-sky-400 text-sky-400 hover:(bg-sky-400 text-white) cursor-pointer'
  },
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      },
      autoInstall: true
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      main: '#4E98F4'
    }
  },
  // 是从接口加载出来的->动态的class :class
  safelist: ['i-mdi:web']
})
