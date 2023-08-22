<template>
  <div class="text-coolgray-400 text-lg py-4">
    <Container class="flex-col">
      [route: {{ $route.name }} - params: {{ $route.params }}]
      <!-- 菜单 -->
      <div class="my-4 w-full"></div>
      <!-- ICP备案信息 -->
      <div class="flex w-full justify-center">
        Copyright © {{ copyRight }} 2022-{{ new Date().getFullYear() }}
        <a href="https://beian.miit.gov.cn/" target="_blank" class="flex pl-2 items-center">
          <i class="w-4 h-4 bg-contain inline-block mr-2 bg-center mr-2"></i>
          {{ icp }}
        </a>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
interface LinkType {
  title: string
  url: string
}

interface ContactsType {
  email: string
  phone?: string
  address?: string
  wechat?: string
  sina?: string
}

interface FootItem {
  icp?: string
  copyRight?: string
  links?: LinkType[]
  contacts?: ContactsType
}

withDefaults(defineProps<FootItem>(), {
  icp: '',
  copyRight: 'toimc',
  links: () => [],
  contacts: () => ({
    email: 'admin@wayearn.com'
  })
})
</script>

<style scoped>
i {
  background-image: url('/assets/icons/beianicon.png');
}
.item {
  @apply px-4 text-gray-400;
}
</style>
