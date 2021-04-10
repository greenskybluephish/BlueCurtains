<template>
<div>
  <!-- <div>{{showDetail}}</div> -->
 <div
    v-if="showList.length === 0"
    class="article-preview"
  >
    No articles are here... yet.
  </div>

<ul >
    <li
    v-for="show in showList"
    :key="show.showId"
    >
{{ show.showDateString }} - {{ show.venueName }} - {{ show.artistName }} 

</li>
</ul> 
</div>
</template>

<script setup lang="ts">
  import {  getShows, getShow } from '../services/showHandler'
  import { asyncComputed, useTimeoutFn } from '@vueuse/core'
  
   const { fetchShows, showList } = getShows()
  
   const { fetchShow, showDetail } = getShow()

    const showsInfo = asyncComputed(
  async() => {
    useTimeoutFn(async () => {
    await fetchShow(58)
 await fetchShows() }, 1000)
  },
   null 
 )



   console.log(showList)
  </script>
