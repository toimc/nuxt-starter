<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <VitePwaManifest />
</template>

<script setup lang="ts">
import { appName } from './constants'

useHead({
  title: appName,
})


// const { $pwa } = useNuxtApp()

onBeforeMount(async () => {
  // 关于这些变量：https://github.com/vite-pwa/nuxt/issues/39
  // setInterval(() => {
  //   console.log('swActivated', $pwa.swActivated)
  //   console.log('offlineReady', $pwa.offlineReady)
  //   console.log('needRefresh', $pwa.needRefresh)
  // }, 5000)
})
</script>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
