<script setup lang="ts">
import { useRoute } from 'vue-router'

interface RouteParams {
  id: string;
}

const { id } = useRoute().params as RouteParams;

const { data: home } = await useAsyncData(() => queryCollection('content').path(`/study/${id}`).first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <div>
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div>
  </div>
</template>
