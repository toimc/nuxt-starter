<template>
  <div class="bg-gray-100 dark:bg-gray-unset">
    <Container>
      <!-- 课程详情 -->
      <div class="w-full flex my-4 justify-center">
        <!-- 左边是Markdown的详情 -->
        <router-view></router-view>
      </div>
    </Container>
  </div>
  <button @click="$router.back()" class="flex justify-center">
    <i class="i-material-symbols:arrow-back text-2xl"></i>back
  </button>
</template>

<script setup lang="ts">
const activeIndex = ref(0)


provide('activeIndex', activeIndex)

</script>

<style scoped></style>
