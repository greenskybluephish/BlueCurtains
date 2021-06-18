<template>
  <div>
    <p class="text-4xl">
      <carbon-pedestrian class="iconify inline-block" />
    </p>

    <h2>{{ showDetail?.artistName }} </h2>
    <h4>{{ showDetail?.showDateString }} - {{ showDetail?.venueName }}</h4>
    <ul>
      <li
        v-for="song in showDetail?.setlist"
        :key="song.id"
      >
        {{ song.name }}
      </li>
    </ul>

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
import { asyncComputed } from '@vueuse/core'
import { getArtistShow } from '../../../services/artistHandler'

const { fetchShow, showDetail } = getArtistShow()

const props = defineProps({
  date: {
    type: String,
    required: true,
  },
  artist: {
    type: [String, Number],
    required: true,
  },
})

asyncComputed(
  async() => {
    await fetchShow(props.artist, props.date)
  },
)

const router = useRouter()
</script>
