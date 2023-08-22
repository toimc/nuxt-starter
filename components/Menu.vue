<template>
  <Container class="justify-center py-4">
    <NuxtLink class="mr-4" to="/"><i class="i-solar:home-outline text-2xl"></i></NuxtLink>
    <NuxtLink class="mr-4" to="/study"><i class="i-fluent-mdl2:rows-child text-2xl"></i></NuxtLink>
    <NuxtLink class="mr-4" to="/study/test"
      ><div class="flex">
        <i class="i-fluent-mdl2:rows-child text-2xl"></i>+<i
          class="i-mdi:language-markdown-outline text-2xl"
        ></i></div
    ></NuxtLink>
    <NuxtLink class="mr-4" to="/404"><i class="i-tabler:error-404 text-2xl"></i></NuxtLink>
    <NuxtLink class="mr-4" to="https://github.com/toimc/nuxt-starter"
      ><i class="i-bi:github text-2xl"></i
    ></NuxtLink>
    <DarkToggle></DarkToggle>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NuxtLink } from '../.nuxt/components'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
