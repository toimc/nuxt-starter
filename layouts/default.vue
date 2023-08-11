<template>
  <div class="flex flex-col min-h-100vh">
    <div class="mx-auto">[Layout: Default]</div>
    <Container>
      <NuxtLink class="mr-4 text-dark-1" to="/">Home</NuxtLink>
      <NuxtLink class="mr-4 text-dark-1" to="/study">Sub</NuxtLink>
      <NuxtLink class="text-dark-1" to="/study/test">Sub+Markdown</NuxtLink>
    </Container>
    <NuxtPage></NuxtPage>
    <div>
      <div class="mobile-hide">
        <DefaultFooter icp="鄂ICP备19018123号-1"></DefaultFooter>
      </div>
      <div class="display-none mobile"></div>
    </div>
  </div>
</template>
<style></style>
