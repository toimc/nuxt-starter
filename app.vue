<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <VitePwaManifest />
  </div>
</template>

<script setup lang="ts">
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
html.dark {
  background: #222;
  color: white;
}
</style>
