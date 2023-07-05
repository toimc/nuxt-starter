<template>
  <div class="bg-gray-100">
    <Container>
      <!-- 课程详情 -->
      <div class="w-full flex mb-4">
        <!-- 左边是Markdown的详情 -->
        <router-view></router-view>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
const activeIndex = ref(0)

provide('activeIndex', activeIndex)
</script>

<style scoped></style>
