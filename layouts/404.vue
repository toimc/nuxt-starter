<template>
  <div class="flex flex-col min-h-100vh">
    <div class="mx-auto">[Layout: 404]</div>
    <Container>
      <NuxtLink class="mr-4 text-dark-1" to="/">Home</NuxtLink>
      <NuxtLink class="mr-4 text-dark-1" to="/study">Sub</NuxtLink>
      <NuxtLink class="mr-4 text-dark-1" to="/study/test">Sub+Markdown</NuxtLink>
      <NuxtLink class="text-dark-1" to="/404">404 Layout</NuxtLink>
    </Container>
    <Container class="flex-col">
      <h1>404 Page</h1>
      <NuxtPage></NuxtPage>
      <button @click="router.back()">返回</button>
    </Container>
    <div>
      <div class="mobile-hide">
        <DefaultFooter icp="鄂ICP备19018123号-1"></DefaultFooter>
      </div>
      <div class="display-none mobile"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped></style>
