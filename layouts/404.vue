<template>
  <div class="flex flex-col min-h-100vh">
    <div class="mx-auto my-4">[Layout: 404]</div>
    <Menu></Menu>
    <Container class="flex-col">
      <h1>404 Page</h1>
      <slot></slot>
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
