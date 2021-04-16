<template>
    <div>
      <p class="text-4xl">
        <carbon-pedestrian class="iconify inline-block" />
      </p>

        <h2>{{ showDetail?.artistName }} </h2>
<h4>{{ showDetail?.showDateString }} - {{ showDetail?.venueName }}</h4>
<ul >
    <li
    v-for="song in showDetail?.setlist"
    :key="song.id"
    >  
 {{song.name}}
</li></ul>

      <p class="text-sm opacity-50">
        <em> Demo of dynamic route</em>
      </p>
  
      <div>
        <button
          class="btn m-3 text-sm mt-8"
          @click="router.back()"
        >
          Back
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang='ts'>
  import { useRouter } from 'vue-router'
  import { defineProps } from 'vue'
  import { getArtistShow } from '../../../services/artistHandler'
  import { asyncComputed, useTimeoutFn } from '@vueuse/core'

  const { fetchShow, showDetail } = getArtistShow()



  const props = defineProps({
    date: {
      type: Date,
      required: true
    },
    artist: {
        type: [String, Number],
        required: true
    }
  })

  const showInfo = asyncComputed(
  async() => {
    useTimeoutFn(async () => {
    await fetchShow(props.artist, props.date) }, 2000)
  },
   null 
 )
  const router = useRouter()
  </script>