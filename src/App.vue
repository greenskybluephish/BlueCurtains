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
<main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
<div class="h-16" />
<router-view />
<Footer class=" bottom-4" />
</main>
</template>
