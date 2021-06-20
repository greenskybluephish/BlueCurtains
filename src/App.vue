<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be renedered correctly in the html results with vite-ssg
useHead({
  title: 'BlueRoom',
  meta: [
    { name: 'description', content: 'Open source setlist tracking' },
  ],
})
</script>

<template>
  <div class="h-full">
    <Navbar />
    <main class="text-center text-gray-700 dark:text-gray-200 h-screen  ">
      <router-view />
    </main>
    <Footer class="text-gray-200 bottom-0 w-full relative dark:text-gray-200" />
  </div>
</template>

<style scoped>
.background {
  background-color: rgb(230, 230, 230)
}
</style>
