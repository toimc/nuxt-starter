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
      <div>
        <!-- 在此处添加技术方案描述 -->
        <p>🚀 <a href="https://nuxt.com" class="link"><strong>Nuxt.js:</strong></a> 一个用于构建服务端渲染 Vue.js
          应用的强大框架，提供了极佳的开发者体验。</p>
        <p>📚 <a href="https://content.nuxtjs.org" class="link"><strong>@nuxt/content:</strong></a> Nuxt.js 的一个模块，允许你以
          Markdown、JSON、YAML、XML 和 CSV 格式编写内容。</p>
        <p>🌈 <a href="https://color-mode.nuxtjs.org" class="link"><strong>@nuxtjs/color-mode:</strong></a>
          一个用于在应用中管理颜色模式（暗/亮）的 Nuxt.js 模块。</p>
        <p>🛠️ <a href="https://nuxt.com/docs/devtools" class="link"><strong>@nuxt/devtools:</strong></a> 一组用于增强 Nuxt.js
          开发体验的工具。</p>
        <p>🔍 <a href="https://vueuse.org" class="link"><strong>@vueuse/core:</strong></a> Vue 2 和 3 的一组基本 Vue
          Composition Utilities。</p>
        <p>🛒 <a href="https://pinia.vuejs.org" class="link"><strong>Pinia:</strong></a> 一个为 Vue.js 设计的状态管理库，直观且易于使用。
        </p>
        <p>🔧 <a href="https://sass-lang.com" class="link"><strong>Sass:</strong></a> 一种预处理脚本语言，解释或编译为 CSS，用于应用的样式设计。
        </p>
        <p>🎨 <a href="https://unocss.dev" class="link"><strong>UnoCSS:</strong></a> 一个即时按需原子化 CSS 引擎，提供高效的样式生成和应用。</p>
        <p>🔄 <strong>Mock:</strong> 集成mock功能，请求<a href="/api/home"
            class="link">/api/home</a>，等价于routes/mock/home，生产可以直接请求api/home可以获取mock数据。</p>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
const store = useMain()
</script>

<style scoped lang="scss">
.link {
  color: #3498db;
  /* 链接颜色 */
  text-decoration: none;
  /* 去掉下划线 */
}
</style>
