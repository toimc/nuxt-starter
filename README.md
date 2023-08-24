<h2 align="center">
Nuxt3+Vite Template
</h2><br>


## Features

- 💚 [Nuxt 3](https://nuxt.com/) - SSR, ESR, File-based routing, components auto importing, modules, etc.
- ⚡️ Vite - Instant HMR.
- 🎨 [UnoCSS](https://github.com/unocss/unocss) - The instant on-demand atomic CSS engine.
- 😃 Use icons from any icon sets in Pure CSS, powered by [UnoCSS](https://github.com/unocss/unocss).
- 🔥 The `<script setup>` syntax.
- 🍍 [State Management via Pinia](https://github.com/vuejs/pinia)
- 📑 [Layout system](./layouts).
- Ⓜ️ [Mock API](./server/middleware/mock.ts) with whitelist
- 📥 APIs auto importing - for Composition API, VueUse and custom composables.
- 🦾 TypeScript.
- 📲 [PWA](https://github.com/vite-pwa/nuxt) with offline support and auto update behavior.
- 🌓 Dark/Light mode.
- 📝 [Nuxt Content](https://content.nuxtjs.org/), Markdown Page Support, Content made easy



## Plugins

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [ColorMode](https://github.com/nuxt-modules/color-mode) - dark and Light mode with auto detection made easy with Nuxt.
- [UnoCSS](https://github.com/unocss/unocss) - the instant on-demand atomic CSS engine.
- [Pinia](https://github.com/vuejs/pinia) - intuitive, type safe, light and flexible Store for Vue. With `@pinia-plugin-persistedstate/nuxt` for persist data use localStorage.
- [VitePWA](https://github.com/vite-pwa/nuxt) - zero-config PWA Plugin for Nuxt 3.
- [DevTools](https://github.com/nuxt/devtools) - unleash Nuxt Developer Experience.
- [Content](https://content.nuxtjs.org/) - Nuxt Content reads the `content/` directory in your project, parses `.md`, `.yml`, `.csv` and `.json` files to create a powerful data layer for your application. Use Vue components in Markdown with the [MDC syntax](https://content.nuxtjs.org/guide/writing/mdc).



## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable [Vetur](https://vuejs.github.io/vetur/) if you have it).



## Try it now!

### Online

<a href="https://stackblitz.com/edit/toimc-nuxt3-starter"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>



### GitHub Template

[Create a repo from this template on GitHub](https://github.com/toimc/nuxt-starter/generate).



### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit toimc/nuxt-starter my-nuxt3-app
cd my-nuxt3-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm

#start
pnpm dev

#build
pnpm build
```