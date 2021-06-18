<template>
  <nav class="text-xl mt-6 flex justify-evenly">
    <a class="icon-btn mx-2" :title="'Toggle dark mode'" @click="isDark = !isDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </a>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://www.facebook.com/Airshowband/" target="_blank" :title="'Facebook'">
      <simple-icons-facebook />
    </a>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://www.instagram.com/airshowband/" target="_blank" :title="'Instagram'">
      <simple-icons-instagram/>
    </a>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://twitter.com/airshowband" target="_blank" :title="'Twitter'">
      <simple-icons-twitter/>
    </a>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://www.youtube.com/channel/UCH0GV4YdDN__fjF_i_bpvSw" target="_blank" :title="'YouTube'">
      <simple-icons-youtube/>
    </a>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://archive.org/details/AirshowBand" target="_blank" :title="'Archive'">
      <simple-icons-internetarchive/>
    </a>
  </nav>
</template>

<script setup lang='ts'>
import { isDark } from '~/logics'

</script>
