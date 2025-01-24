import process from 'node:process'
import type { ModuleOptions } from '@vite-pwa/nuxt'

const scope = '/'
const appName = 'Nuxt starter'
const appDescription = 'Nuxt3+Vite+PWA ts starter'

export const pwa: ModuleOptions = {
  registerType: 'autoUpdate',
  scope,
  base: scope,
  manifest: {
    id: scope,
    scope,
    name: appName,
    short_name: appName,
    description: appDescription,
    theme_color: '#ffffff',
    icons: [
      {
        src: '192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  workbox: {
    globPatterns: ['**/*.*'],
    // globPatterns: ['**/*.{js,css,html,txt,png,ico,svg}'],
    navigateFallback: '/',
    cleanupOutdatedCaches: true,
    runtimeCaching: [
      // ...
    ]
  },
  client: {
    installPrompt: true,
    // you don't need to include this: only for testing purposes
    // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
    periodicSyncForUpdates: 3600
  },
  registerWebManifestInRouteRules: true,
  writePlugin: true,
  devOptions: {
    enabled: process.env.VITE_PLUGIN_PWA === 'true',
    suppressWarnings: true,
    navigateFallback: scope
  }
}
