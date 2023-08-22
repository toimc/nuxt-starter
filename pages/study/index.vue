<template>
  <div class="pb-15">
    <div class="flex justify-center py-4">
      <NuxtLink to="/study/1" class="text-blue mr-4">sub id=1</NuxtLink>
      <NuxtLink to="/study/2" class="text-blue">sub id=2</NuxtLink>
    </div>
    <Container class="flex-col">
      <div>访问/study即加载</div>
      <div>Sub默认页面内容</div>
    </Container>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
