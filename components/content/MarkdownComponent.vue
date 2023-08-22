<template>
  <div>This is a Vue compoennt in Markdown.{{ titles }}</div>
</template>

<script setup lang="ts">
interface MdType {
  titles: string[]
}
defineProps<MdType>()
</script>

<style scoped></style>
