<template>
  <div class="flex flex-col min-h-100vh">
    <div class="mx-auto my-4">[Layout: Default]</div>
    <Menu></Menu>
    <slot></slot>
    <div>
      <div class="mobile-hide">
        <DefaultFooter icp="鄂ICP备19018123号-1"></DefaultFooter>
      </div>
      <div class="display-none mobile"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style></style>