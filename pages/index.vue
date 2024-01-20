<template>
  <div class="pb-15">
    <Container class="flex-col">
      <div>store: {{ store.someState }}-{{ store.count }}</div>
      <div class="flex">
        <div class="px-4 py-2 bg-sky-500 text-white rounded cursor-pointer" @click="store.increment()">Button +1</div>
        <div class="px-4 py-2 bg-sky-500 text-white rounded cursor-pointer ml-4" @click="store.decrement()">Button -1
        </div>
      </div>
      <!-- 标题 -->
      <div class="py-4">
        <div class="text-2xl">“</div>
        <div class="text-2xl font-bold pb-4" v-flash>传播技术的种子 让分享带来价值</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400 w-2/3">
            这个是Nuxt-Starter项目，其中整合常见的Nuxt Modules：Content&Pinia&vueuse&UnoCSS
          </div>
          <div class="flex pl-20 w-1/3 justify-end items-center">
            <div class="w-1/2 h-[1px] bg-gray-500"></div>
            <div class="text-2xl relative ml-2 top-1">”</div>
          </div>
        </div>
      </div>
      <ContentDoc></ContentDoc>
    </Container>
  </div>
</template>

<script setup lang="ts">
const store = useMain()
</script>

<style scoped lang="scss"></style>
