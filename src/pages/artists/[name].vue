<script setup lang="ts">
  import { getArtist} from '../../services/artistHandler'
  import { asyncComputed, useTimeoutFn } from '@vueuse/core'
  import { defineProps } from 'vue'
  import { useRouter } from 'vue-router'

    const router = useRouter()

  const props = defineProps({
     name: {
        type: String,
        required: true
    }
  })
  
   const { fetchArtist, artistDetail } = getArtist()

    const artistInfo = asyncComputed(
  async() => {
    useTimeoutFn(async () => {
    await fetchArtist(1) }, 500)
  },
   null 
 )

 const goToShow = (showUrl:string) => {
      let route = `/shows/1/${showUrl}`
      console.log(route);
       router.push(route)
    }

  </script>

<template>
    <div>
    
     <div
        v-if="artistDetail?.shows.length === 0"
        class="article-preview"
      >
        No shows created. Would you like to add one?
      </div>
    
    <ul >
        <ShowListItem
        v-for="(item,index) in artistDetail?.shows"
        :item="item"
        :index="index"
        :key="item.showId"
        :show="item"
        :showDate="item.showDateString"
        :venueName="item.venueName"
        :venueLocale="item.venueCity"
        :goToShow="goToShow"
        
        ></ShowListItem>
    </ul> 
    </div>
    </template>